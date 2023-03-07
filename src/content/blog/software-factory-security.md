---
draft: false
title: Back to basics - Software Factory security
category: articles
author: Abderrahmane Smimite
publishDate: "2021-07-13 11:39"
image: {
    src: "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?&fit=crop&w=430&h=240",
    alt: "Agile is dying"
}
snippet: ""
tags: ["software", "security", "devsecops", "secdevops"]
---


If you have not caught up with the trend of shifting security to the left in software development, you have probably heard of something equivalent: the DevSecOps or SecDevOps practices. It consists of doing as much as possible the security operations (scans, checks, etc.) at the earliest possible stages, and not wait until the end to go through « a validation process ». This is more practical, cost-efficient, scalable, and the most agile-friendly.

In this article, we will go through the basic aspects that one should consider for software-factory security. You could, of course, extend it to include more topics, and you probably should. We are just highlighting the most common ones that we had to cover across our interaction with the customers on a variety of domains.

In the following, I will only mention free software or one with a community edition. There is of course a lot of nice paid alternatives out there, sometimes even shipped with the CI/CD solution (the case of GitLab enterprise for instance), and it is up to you to choose what suits you better.

## Code security analysis: SAST
SAST stands for Static Application Security Testing. This practice consists of detecting anti-patterns that could eventually lead to security issues. Such tools operate at the code level in the same manner as a linter will review your code for typing, formatting, or any compliance rules that we could establish for a coding style standard.

Here are some good practices:

- Perform SAST scans regularly, either periodically or at the build stage
- Most tools have some form of exceptions management, that could be used to skip false positives, for instance using some specific tags like #nosec. Use that wisely and do not abuse it
- When possible, establish a security gate, by using the output of the SAST tool to block the upcoming steps of your pipeline

Some tools to consider: Snyk, SonarQube, Bandit for Python

## Dependencies management
Unless you are reinventing the wheel for every component that you are developing, you are probably using and importing a few external libraries and modules. If it is the case, it is your responsibility to manage these third-party components by:
- Importing them using the proper patterns according to your stack (e.g. requirements.txt). Don't copy the library's code unless you are forking a project. Using the standard patterns will allow you to easily use the existing tools for checkups
- Using the latest version of dependencies could sound appealing to avoid handling the patch management. For obvious operational reasons such as your build reproducibility, you will need to manage some form of version pinning
- Doing regular proper checks on your imports. Many tools are available out there that can be included as well on the pipeline to block the build if needed
- Exclusively relying on an allow-list, with only validated and regularly reviewed dependencies (a more extreme yet tight approach)

Busting a myth: « Open-source software cannot be vulnerable or malicious because the supporting community or company will prevent that ». While this could be the case for some active projects, you cannot just assume that, as they could have failed some security checks as well (code, dependencies, etc.). You should at least consider checking if the library has some known CVE or issues.

Some tools to consider: npm audit, Safety for python, Dependabot, snyk

## Secrets management
Most deployments need a set of credentials at some point. Whether to interact with a database, object storage, or a third-party API, the tokens or passwords need to be securely managed.
This is a very common topic in Cybersecurity, and we will detail the proper patterns in a dedicated article. Here are some insights that you need to consider:
- Use a proper password management system. The most known one is probably Hashicorp Vault. If you are using AWS or Azure, you can use their equivalent native services as well. Modern solutions have all the options that you might need, ranging from secrets generation to API interaction.
- Never commit a secret to your codebase. If it is the case, your first reflex should be to revoke the credential and then, ideally, rework your git history if it is not too late
- Perform regular checks to identify if there have been any leaks
- If your development environment is unified amongst the team, you can even consider preventing committing the secrets (based on git hooks for instance). Some IDEs support plugins for that as well

Some tools to consider:
- Keys management: Hashicorp Vault, KeePass
- Leaks detection: Trufflehog, Git guardian, Github secret check

## Compute vulnerability management
Once your app is ready for deployment, it will require some form of compute service to run it: bare metal, VM, container-based, serverless, etc. Compute security is the foundation of any application security, and is either managed directly by you or delegated to a provider, as part of a Shared Responsibility Model. The process is basically about monitoring and applying the security patches of your OS components, as well as the associated libraries and dependencies.

The patch management strategy will depend naturally on the compute technology and at which level the fix needs to be applied. For the most common case of VM or containers, it is basically about rebuilding and deploying your images. If you have opted for a serverless approach, it is most likely that the provider handles that on your behalf without any downtime to manage.

You need to consider the following:
- Detection is mandatory: you need to be able to identify the vulnerabilities and keep track of them
- The lower you go at the infrastructure level, the more you need to handle patch management. Use managed services (PaaS or higher) as much as possible, to delegate that to the provider

Some tools to consider: OpenVAS, Clair or Trivy for containers

## Runtime check: DAST
Now that your app is deployed, you need to check it for security issues while it is running. To achieve that, we need a DAST tool, which stands for Dynamic Application Security Testing. Keep in mind that it is complementary to the SAST check explained above.

A DAST tool operates as a lightweight pentest. It performs the usual checks for security vulnerabilities on runtime while considering your application as a black box and attacking it: port scan, SQL injection, cipher checks, banners detection to run specific exploits and even fuzzing.

You should consider the following:
- Tune and adapt the scan to your application to get relevant data. Modern DAST tools support multiple options: authenticated scan, API support, combination with functional testing such as a Postman collection, or even load testing
- Run regular DAST scan on your production app, or at least on an accurate replicate with the same settings
- Ideally, if you can tolerate some extra delay on your pipeline, perform the scan on your staging environment so that you can eventually block the deployment if issues are found

Some tools to consider: OWASP ZAP, Nikto

## Core CI/CD security
It goes without saying, but your software factory security will depend on your CI/CD tooling security. The hardening practices will vary according to your stack. Assuming that you are using Jenkins for instance, you should consider the following:
- Review and maintain the underlying compute security, always :)
- Federate your Jenkins access control with your existing authentication system (eg. Active directory) and fine-tune the roles
- Review the credential store security since it will probably host your initial secret, the one that allows you to connect to a vault for instance. Some common practices are to ensure that the underlying storage is encrypted, the ssh access protected, etc.
- Use a dedicated account to interact with the code base, vault, etc., ideally in read-only mode

## Combining everything
Now that you have the big picture, we can summarize as follows:
- Review your pipeline tooling security and do the proper hardening
- Use a proper solution for secrets management
- Prevent secrets committing and look for leaks
- Perform SAST check on your codebase
- Properly control your dependencies and regularly recheck them for vulnerabilities
- Perform DAST check on your staging environment and prevent the deployment if it doesn't match a security gate
- Ensure that the compute patch management is properly done, either by you or delegated to your managed services provider

## Final thoughts
The main takeaway of this approach is that the earlier you fix it, the less it will cost you. It goes for vulnerabilities as well as for any other bug.

You will end up having multiple warnings and many false positives: do not be discouraged by that, since it is part of the process. Progressively, you will be able to add nice and smart filters on all these findings and establish a priority system. A simple one will be probably based on the severity of the finding, the CVSS score, etc. If you choose to go with a more advanced solution, some can even give you an estimation of the effort to fix it.

Just remember to measure and keep track of your progress. Do not rely entirely on automated tools, and support them with an awareness program, so that your team can make sense of all these practices and adopt them.
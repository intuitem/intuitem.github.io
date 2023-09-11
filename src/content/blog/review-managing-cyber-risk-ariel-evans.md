---
draft: false
title: Review of Managing cyber risk, by Ariel Evans
category: reviews
author: Eric Laubacher
publishDate: "2023-09-04 09:54"
image: {
    src: "https://media.licdn.com/dms/image/D4E12AQEF1Ta7ucADUg/article-cover_image-shrink_423_752/0/1693760414053?e=1700092800&v=beta&t=dDZvujFmrDqJCSOfEf_aPm_Cb6IshTEegNfveHn5tQE",
    alt: "managing cyber risk"
}
snippet: "Ariel Evans is a senior cybersecurity expert, serial entrepreneur, and author. She is Chairperson of Pace Seidenberg Cybersecurity Program. The book has been published by Routledge. It can be downloaded for free on Researchgate."
tags: ["cybersecurity", "risk", "management"]
---

## Preface

In the preface, the author states that ROLF (reputational, operational, legal and financial) analysis is the primary methodology for risk management. Surprisingly, this acronym is very scarcely used, and generally only in reference to Ariel Evans' book.

Another surprise is the criticism of FAIR:

>Most of today's cyber risk models, like Factor Analysis of Information Risk (FAIR), use only control maturities, which provide very limited and superficial metrics.

Yet, The FAIR model can address quite naturally the reputational, operational, legal and financial aspects, and does not rely only on control maturities. We will consider FAIR in another article.

## Introduction

> Managing cyber risk is a new science.

This promising introductory sentence implies that while not yet mature, cyber risk management is a scientific approach. Evans asserts that cyber risk management is now recognized as an enterprise risk and not an IT risk, which is very sound.

Cyber risk is defined in this way:

> It is the risk at the digital asset level - system, process, technology, and data that can have reputational, organizational, legal, and/or financial impacts.

Then Evans introduces two measures for cyber risk:

the inherent risk

>"the risk without controls in place, as if there were zero percent effectiveness of cyber controls. This is raw risk, or what I call cybergeddon risk".

the residual risk, the risk with controls in place.

> Inherent risk is considered the proper way to determine which assets are the most important to protect, and to calculate cyber insurance needs. Residual risk is considered as the proper way to calculate cyber costs for budgeting and to prioritize remediation work.

This definition of inherent risk falls into the classical debate over the concept of having "no controls" (refer to https://www.fairinstitute.org/blog/inherent-risk-vs.-residual-risk-explained-in-90-seconds for more). The scenario of having absolutely no controls in place mirrors the unfortunate outcome experienced by E Corp in the first season of Mr. Robot. Evans introduces the appealing notion that inherent risk is beneficial to determine insurance needs but, regrettably, doesn't explain how to precisely calculate it.

## 1. Cyber risk at the speed of data

The first chapter begins with a brief presentation of the history of cybersecurity, and the rise of the cost of breach. It develops the idea that "cyber is a business issue" with convincing arguments. It also provides simple guidelines for the establishment of an effective cyber risk management strategy.

Cyber risk quantification provides for the following use cases:

- focus on and monitoring of crown jewel assets
- proper prioritization of remediation resources based on impacts
- proper cyber budgeting, aka putting your money where your mouth is
- measuring the effectiveness of cyber tools, aka what are we paying for?
- adequately measuring cyber insurance needs, aka cyber risk transference

For insurance needs, Evans says that requirements should be based on worst-case scenario analysis. While this seems common sense, it is not exactly realistic given companies' current dependence on their IT. The theoretical worst case scenario would almost certainly lead to the company going out of business, as already illustrated.

## 2. Dissecting cyber risk

Evans provides this definition of cyber risk:

> Cyber risk means the exposure to the possibility of loss from a cyberattack or incident.

Impacts follow the ROLF model (reputational, operational, legal and financial).

Financial loss can result from business process interruption, data exfiltration or regulatory fines. The book then presents the cyber risk owners: boards of directors, CISO, DPO, compliance manager, auditors and legal teams.

Assets are typically classified as crown jewel, business critical, business crucial. A crown jewel is a system whose failure results in the company going out of business. A business critical system is a system whose failure may result in very high costs for the business. A business-crucial system is a system whose failure has significant impact.

Evans says the financial risk is the only metric that has objective measurability, an idea that is shared by FAIR methodology. The book develops the following additional types of cyber risks, which all can amplify financial risk:

- reputational risks
- operational risks
- regulatory risks
- vendor (or third-party) risks

## 3. Inherent cyber risk

In this chapter, the inherent cyber risk is linked to cyber risk quantification.

The case for business interruption costs is relatively straightforward. For data exfiltration costs, Evans proposes to multiply the number of leaked records by the average cost of breach per record determined by the Ponemon institute in the 2017 Cost of Data Breach study, which is $141. This type of gross approximation using an average value is not convincing, it seems much preferable to determine the value of records by estimating the consequences of a leak.

Concerning regulatory costs, Evans lists several regulations, and give a quantitative example. What is striking is that the GDPR potential fine of 4% of revenue outweighs largely all other factors. In the given example, it represents 72% of the total estimated cost.

Evans also proposes a qualitative analysis for inherent cyber risk as likelihood x impact.

CMMI is proposed as an example of scoring system, with a value from 1 (optimized) to 5 (initial).

Two questionnaires shall be prepared, one for impact, the other for likelihood. Each question is assigned a weight (based on the understanding of its importance for the organization), and scores are aggregated. Unanswered questions are not included in the aggregated score. Examples of questions are provided.

Likelihood is "the probability an attack will cause damage". Evans says that likelihood can be equated to the cybersecurity triad of confidentiality, integrity and accessibility, which is a very unclear statement.

As for impact, several factors and corresponding examples of questions are given. The metric is again from 1 to 5 (0 for unanswered).

Then qualitative risk analysis is presented in the form of a traditional matrix combining impact score and likelihood score. An interesting approach is that there are 3 different matrices, one for crown jewels, one for business-critical and one for business crucial.

The matrices contain the priority level from 1 (highest priority) to 5 (lowest priority). The risk level is defined from 0-1 (low) to 4-5 (critical), but no rule is given on how to calculate it, which is unfortunate.

Evans highlights that the qualitative and quantitative analyses can diverge, and that this means it is necessary to "tweak the model", with usually two-three rounds of revision.

## 4. Residual cyber risk

The following definition is given:

> Residual risk = inherent risk score - (score of findings + vulnerabilities + incidents)

Once residual risk score is calculated, it shall be compared to a threshold value depending on the type of asset (crown jewel, critical, crucial). If the threshold is over, then some remediations are required.

Cyber control frameworks are a set of standards used for cyber control assessments. They contain requirements with a policy component, a test component and a result component. The results of the tests are called findings. Several frameworks in common use in the US are presented: PCI-DSS, ISO 27001, CIS Critical Security Controls, and NIST CSF. The finding can be expressed as a percentage, 100% being the best score.

A possible method for deriving the residual risk score from the inherent risk and the assessment finding is illustrated in an example (table 4.2), but unfortunately the formula is not given. We can infer it is: RR = IR x (1 - findings).

Similarly, an example is provided for vulnerability correction (table 4.3), without the formula being explicit. We can infer the following formula: RR = IR x (1 - findings) x (1 + vulnerability).

The table 4.4 adds the incident parameter, and ignoring a typo (0,295 instead of 0,0295) and a confusion (incident instead of vulnerability), we infer the following formula: RR = IR x (1 - findings) x (1 + incident).

For cost analysis, Evans presents cyber budgeting, and defines:

> return on control = (reduction in risk / Cost of the control) x 100.

## 5. Vendor cyber risk

The majority of reported breaches are due to third parties, so this chapter presents an approach for third-party risk measurement. It is similar to the previous chapters, with questionnaires to assess impact and likelihood of the risk.

## 6. Future cyber risk

This chapter provides some glimpses on the cyber risk linked to IoT, blockchain, AI and quantum computing.

## 7. Cyber risk management toolkit

Evans defines 5 levels of cyber security maturity: unaware, tactical, focused, strategic and pervasive. The toolkit program comprises the following items:

- organization oversight and leadership program
- cyber risk program
- cyber policies
- assessment, audit, and monitoring programs
- resources - risk prioritization
- cyber budgeting
- incident management plans
- education - cybersecurity awareness
- cyber insurance
- vendor management

## 8. Optimizing cyber risk resiliency

Resiliency is defined as goal score divided by the residual risk score.

This chapter provides some recommendations to determine correct amount of cyber insurance. It also recommends continuous cyber risk management program, and evokes the case of cyber risk metrics for M&A.

The book finishes with a conclusion, abbreviations, and an index.

## Does "Managing cyber risk" provides a scientific approach for risk analysis?

While the book contains sound advice, and provides a quantitative and a qualitative method for risk analysis, this method lacks several qualities to be deemed scientific. In particular:

- the definitions of the concepts are vague.
- the formulas for the method are not clearly defined and justified.

The proposed method can be a good starting point for someone discovering cyber security and risk analysis. But as we close the book, we're left hungry for a scientific approach to risk analysis.

*In addition to its product activity, intuitem has a consultancy service dedicated to helping companies build optimal cyber security programs that fit their needs instead of pre-packaged ones. You are welcome to reach out to learn more about our services.*
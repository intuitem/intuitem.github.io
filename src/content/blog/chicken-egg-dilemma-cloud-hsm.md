---
draft: false
title: Chicken and Egg Dilemma with Cloud HSMs
category: articles
author: Eric Laubacher
publishDate: "2019-04-03 11:39"
image: {
    src: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?&fit=crop&w=430&h=240",
    alt: "Agile is dying"
}
snippet: ""
tags: ["cloud", "rewrite", "redirection", "rules"]
---


**I** have been asked recently about a design issue with HSMs in Kubernetes infrastructure (and cloud application in general): if an HSM contains all the keys, how can a pod authenticates to the HSM, without having itself a secret or private key? another common one is what's the point of having an HSM in the cloud if we end up trusting the provider for key management? This article aims to shed some light on this issue.


## What are HSMs
A Hardware Security Module is a piece of specialized equipment dedicated to the management, storage, and exploitation of cryptographic secrets. The functions of an HSM can be easily performed by standard computers, using common cryptographic libraries like OpenSSL, so functionality is not a driver to use an HSM. performance is not the reason neither, as a mid-range server can perform more cryptographic operations and even faster than most HSMs. 

The real added value of an HSM is to fulfill a fundamental security objective: the non-extractability of secret cryptographic material. A cryptographic key is said to be non-extractable if it is technically impossible to get a copy of it. It means that the only option for an attacker to abuse that key is to have physical or network access to the HSM.

To achieve non-extractability, HSM manufacturers combine several security mechanisms:
- The enclosure of the HSM is tamper-proof, with tight intrusion detection that provokes the erasure of secrets.
- The security functions are highly specialized, and the software is thoroughly verified to avoid software vulnerabilities. Most HSMs are designed so that secrets keys never leave a hardware component, thus even a software vulnerability does not enable cloning a key.

HSMs also provide secure audit logs of all actions. In the event of an attack, this provides a better view of the extent of the compromise. Let's compare a situation of suspicion of compromise of a signing key: 
- A software-stored signing key shall be revoked anyway, for fear that the key has been cloned and will be used later by an attacker.
- An HSM-stored signing key cannot be cloned, so there is no risk of that key being used later by an attacker once the breach is fixed. There is still a risk that forged signatures have been issued during the compromise. Fortunately, the audit log provided by the HSM will trace all the signatures that have been issued by the HSM, and thus it is possible to decide the optimal course of action.

HSMs can be fitted in a server expansion slot, but most of them are available today in the form of a network appliance, which is very appropriate for data centers. They can be accessed from applications using appropriate libraries provided by the manufacturer, typically with a PKCS#11 interface or in the form of an OpenSSL engine.

## The issue with cryptographic keys in the cloud
As noted earlier, there is no difficulty to perform cryptographic functions in a traditional server. Modern CPUs even embed hardware acceleration for AES, the infamous cryptographic algorithm. In many cases, we can process ephemeral keys only in RAM and for the duration of a session. The issue arises when there is a need to manipulate a long-term secret, like a signature key used for authentication for instance. 

To benefit from non-extractability, we would like to store such a key in a network HSM, but any machine having access to the HSM could authenticate with that key. How can we control the access to that key so that only legitimate pods are authorized?
The access control can be performed either by the network equipment or by the HSM. Let's consider both approaches.

### Access control at the network level
The network equipment can filter packets to limit access to specific IP addresses or ports. Practically, the sole criterion to distinguish the applicant is the source IP address. To distinguish which key is requested, the destination port is a good match. But in a Kubernetes environment and most modern cloud architecture, the IP address of the pod is dynamic, so this is not a straightforward solution.

### Access control by the HSM
The HSM can perform similar network filtering as the network equipment, but with the same shortcomings. It can also authenticate the client at the session or application level. However, this requires a long-term secret on the client side. But avoiding that situation was the whole point of using an HSM, thus the dilemma.

## Getting out of the loop
The naked truth is that we need to trust the Kubernetes cluster to solve this chicken and egg problem. Here are a few possibilities:
- Use a secret credential stored in a Kubernetes Secret object. This information is encrypted, and the encryption key will be stored in the etcd servers of the cluster. It is possible to enable data-at-rest encryption of the etcd database, notably with a KMS configuration (see reference [1]).
- Use a Container Network Interface module that is able to control egress traffic from pods to the HSM, using the destination port as the key selector. Calico is a good candidate for this approach. A general deny rule shall be set, and then an egress filtering rule shall be established for each key access control (see reference [2]).
- Use an access control mechanism provided by the cloud infrastructure. Azure provides an interesting solution with a Managed Service Identity used to control the access to Azure Key Vault, which is an abstract service implemented using HSMs (see reference [3]).

## Is it worth the effort?
HSMs are no silver bullet, and the administrators of the Kubernetes cluster and infrastructure still need to be trusted. HSMs facilitate monitoring of sensitive key usage, significantly reduce the pitfalls of manipulating secrets for developers and operators, and help to recover more quickly in case of compromise. So clearly HSM technology makes sense in any cloud infrastructure running sensitive applications, especially for regulated industries.

In my personal experience, in most case a software-based solution for secret management such as the infamous Vault (Hashicorp) is largely enough, and where we can focus on securing the master key (using an HSM for instance if required by regulation).

**References**
- [1] https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/: how to use a KMS for data-at-rest encryption in etcd.
- [2] https://docs.projectcalico.org/v3.5/getting-started/kubernetes/tutorials/advanced-policy: how to set a network filtering policy with Calico.
- [3] https://lukieb.blogspot.com/2018/06/winning-chicken-and-egg-problem-with.html: an inspiring article that exposes a clever solution for Azure Vault.
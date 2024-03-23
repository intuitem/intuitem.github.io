---
draft: false
title: Nginx rewrite rules - the easy way
category: tutorials
author: Abderrahmane Smimite
publishDate: 2022-10-19T11:39:00Z
image: https://images.unsplash.com/photo-1593720213428-28a5b9e94613?&fit=crop&w=430&h=240
snippet: ""
tags: ["nginx", "rewrite", "redirection", "rules"]
---

**U**nlike other posts or articles that I'm used to sharing, this is not about Cyber Security, Product Management, Agile practices, or data. It's just something that I've spent some time on recently, and I thought it could save someone some valuable time.

Nginx (or Apache) has powerful URL rewrite capabilities that can simplify your migrations. You might want to take a look at it as it could ease it up.

As part of website/web app migration, we often have to handle two main challenges:

- Updating the main website URL, which primarily consists of DNS changes. As long as you're not dealing with CNAME entries on the APEX domain using a provider that doesn't support DNS flattening, you should be fine.
- switching URL schemes to adapt to a new format, for instance, redirecting `/posts?id=123` to `/articles/123`

A well-established web server can handle the second aspect. But before diving in, you should consider the effort versus the impact and if it is worth it for your case. Basically, it's about:

- Search engine bots previously indexed paged, sending potential 404 errors and degrading your SEO effort.
- Users that are used to specific patterns or bookmarks could get confused or lost with this change.

If these concerns apply to your case, having Nginx as a proxy can be very handy. The official documentation available here is a good start. If you're in a hurry, here are the five main things to consider:
- There are multiple directives; rewrite is the most flexible and comprehensive one.
- Rules are scoped to a specific location within a specific server. You could have everything at /, but splitting can be pretty convenient.
- Rewrite supports regex in its basic flavor. I usually experiment with Python or regex101 before applying anything.
- Nginx processes the rules sequentially, so the order is essential. Be cautious but also use it wisely to simplify complex cases (e.g., having garbage-collector rules after specific ones)

The most common patterns are:

-  `/section/(.*)/product_(.*) /new/catalog/$2 ;` if the key is part of the URL and you want to redirect /section/health/product_123 to /new/catalog/123
- ` /section/directory(.*) /section/directory/$arg_user? ;` if the key is an argument and you want to redirect /section/directory?user=albert to /section/directory/albert/ ; nginx has built-in `$arg_<your_param>` variables.

And that's it! Fly now and rewrite the world!
---
title: News
description: 'All blog posts can be found here'
layout: blog
pagination:
  data: collections.allPosts
  size: 4
permalink: 'blog/{% if pagination.pageNumber >=1  %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html'
---

To keep up to date with all the latest, subscribe to the {% svg "misc/rss", "inline-style", "block-size: 3ex; fill: var(--color-tertiary); color: var(--color-text);" %}  <a href="/blog/feed.xml">TRIDUBIRE News Feed</a> or follow the <a href="/about#team">team</a> on socials! <b>#TRIDUBIRE</b>

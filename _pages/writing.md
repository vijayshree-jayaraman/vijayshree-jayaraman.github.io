---
layout: default
title: Writing
permalink: /writing/
---

## Writing and Posts

Posts are placed in the `_posts/` folder. Example post is included. The template below lists posts automatically.
<ul>
{% for post in site.posts limit:10 %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%b %-d, %Y" }}</small></li>
{% endfor %}
</ul>
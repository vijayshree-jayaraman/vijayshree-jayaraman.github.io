---
layout: page
permalink: /public-goods/
title: public goods
nav_order: 4
---
Every dataset has its own story to tell. But even when datasets are public, they’re often uploaded in formats that make them hard to access for those who could tell these stories.

Instead of just repeating cleaning efforts, we need to focus on uncovering new insights from the data. Julie Nelson's idea of interconnectedness fits here: treating data cleaning as a shared responsibility. This way, everyone can spend more time generating ideas and less time stuck on cleaning tasks. 🎉
{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

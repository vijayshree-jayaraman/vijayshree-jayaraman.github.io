---
layout: page
permalink: /repositories/
title: repositories
description: Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.
nav: true
nav_order: 4
---
Every dataset has its own story to tell. But even when datasets are public, it's often hard for people to use them easily to tell those stories. We need more stories coming from the data we already have, instead of lots of people working separately to clean the same data over and over.

We need more stories from existing data, not repeated cleaning efforts. Economist Julie Nelson's idea of interconnectedness applies here: treating data cleaning as caring for shared information. This approach is not only efficient but just, allowing everyone to ideate rather than get stuck cleaning.  It opens up opportunities for discovering new stories and encourages fair collaboration, benefiting everyone involved.

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

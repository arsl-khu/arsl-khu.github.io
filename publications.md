---
layout: default
title: Publications
selected_papers: []
---

# Publications
<p class="lede">
  An up-to-date list of publications can also be found on
  <a href="https://scholar.google.com/citations?user=bybQkQEAAAAJ">Google Scholar</a>.
  When available, links point to papers, videos, and project pages.
</p>
<p class="muted" style="margin-top:-6px;">
  * indicates equal contribution (co-first authors).
</p>

{% assign publications = site.data.publications %}
{% include publication-list-dair.html selected_papers=page.selected_papers %}
---
layout: default
title: People
---

# People

{% assign groups = site.data.people %}
{% for g in groups %}
  <div class="people-group">
    <h2 style="margin-bottom:12px;">{{ g.group_label }}</h2>
    <div class="people-grid">
      {% for p in g.members %}
        <div class="person">
          {% if p.image and p.image != "" %}
            <img src="{{ p.image | relative_url }}" alt="{{ p.name }}">
          {% else %}
            <img src="{{ '/assets/img/favicon.svg' | relative_url }}" alt="{{ p.name }}">
          {% endif %}
          <div>
            <p class="person-name">
              {% if p.website and p.website != "" %}
                <a href="{{ p.website }}" style="color:inherit; text-decoration:none;">{{ p.name }}</a>
              {% else %}
                {{ p.name }}
              {% endif %}
            </p>

            {% if g.group == "pi" and p.role and p.role != "" %}
              <p class="person-role">{{ p.role }}</p>
            {% endif %}
            {% if p.affiliation and p.affiliation != "" %}
              <p class="person-affiliation">{{ p.affiliation }}</p>
            {% endif %}
            {% if p.research_interest and p.research_interest != "" %}
              <p class="person-interest">{{ p.research_interest }}</p>
            {% endif %}

            {% if p.email and p.email != "" %}
              <div class="person-links">
                <a href="mailto:{{ p.email }}">Email</a>
                {% for l in p.links %}
                  <a href="{{ l.url }}">{{ l.name }}</a>
                {% endfor %}
              </div>
            {% elsif p.links and p.links.size > 0 %}
              <div class="person-links">
                {% for l in p.links %}
                  <a href="{{ l.url }}">{{ l.name }}</a>
                {% endfor %}
              </div>
            {% endif %}

            {% if p.blurb and p.blurb != "" %}
              <p class="person-bio">{{ p.blurb }}</p>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
{% endfor %}

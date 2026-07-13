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
            {% assign person_photo = p.image | relative_url %}
          {% else %}
            {% assign person_photo = '/assets/img/favicon.svg' | relative_url %}
          {% endif %}
          <img src="{{ person_photo }}" alt="{{ p.name }}">

          <p class="person-name">{{ p.name }}</p>

          {% if g.group == "pi" and p.role and p.role != "" %}
            <p class="person-role">{{ p.role }}</p>
          {% endif %}
          {% if p.affiliation and p.affiliation != "" %}
            <p class="person-affiliation">{{ p.affiliation }}</p>
          {% endif %}

          {% assign has_website = false %}
          {% if p.website and p.website != "" %}{% assign has_website = true %}{% endif %}
          {% assign has_email = false %}
          {% if p.email and p.email != "" %}{% assign has_email = true %}{% endif %}
          {% if has_website or has_email %}
            <div class="person-icons">
              {% if p.website and p.website != "" %}
                <a class="person-icon" href="{{ p.website }}" target="_blank" rel="noopener noreferrer" title="Homepage" aria-label="{{ p.name }} homepage">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"/></svg>
                </a>
              {% endif %}
              {% if p.email and p.email != "" %}
                <button type="button" class="person-icon person-email" data-email="{{ p.email }}" title="{{ p.email }}" aria-label="Copy {{ p.name }} email address">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                </button>
              {% endif %}
            </div>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
{% endfor %}

<script>
  (function () {
    function flash(btn, message) {
      btn.setAttribute('data-tip', message);
      btn.classList.add('show-tip');
      window.clearTimeout(btn._tipTimer);
      btn._tipTimer = window.setTimeout(function () {
        btn.classList.remove('show-tip');
      }, 1300);
    }

    document.querySelectorAll('.person-email').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var email = btn.getAttribute('data-email') || '';
        if (!email) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(
            function () { flash(btn, 'Copied!'); },
            function () { flash(btn, email); }
          );
        } else {
          var input = document.createElement('input');
          input.value = email;
          document.body.appendChild(input);
          input.select();
          try { document.execCommand('copy'); flash(btn, 'Copied!'); }
          catch (e) { flash(btn, email); }
          document.body.removeChild(input);
        }
      });
    });
  })();
</script>

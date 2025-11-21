---
layout: home
title: HOME

images:
  - url: "/assets/images/mv_01.webp"
  - url: "/assets/images/mv_02.webp"
  - url: "/assets/images/mv_03.webp"
  - url: "/assets/images/mv_04.webp"

tabs:
  - title: "こもれび組"
    color: "#FFE66D"
  - title: "そよかぜ組"
    color: "#A8D5BA"
  - title: "たいよう組"
    color: "#F8B26A"
---

{% include sections/mv.html %}

<section>
  {% include parts/title.html title="園の特徴" %}
  {% include sections/panel.html %}
</section>

<section>
  {% include parts/title.html title="クラス紹介" %}
  {% include sections/card.html %}
</section>

<section>
  {% include parts/title.html title="1日の流れ" %}
  {% include parts/tab.html %}
</section>

<section>
  {% include parts/title.html title="お知らせ" %}
  {% include parts/info_box.html %}
</section>
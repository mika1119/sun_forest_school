---
layout: home
title: HOME

images:
  - url: "/assets/images/mv_01.webp"
  - url: "/assets/images/mv_02.webp"
  - url: "/assets/images/mv_03.webp"
  - url: "/assets/images/mv_04.webp"

cards:
  - image: "/assets/images/class_01.webp"
    title: "こもれび組（0〜1歳）"
    text: "安心して過ごせる空間で、ゆっくりと成長を見守ります。"
  - image: "/assets/images/class_02.webp"
    title: "そよかぜ組（2〜3歳）"
    text: "好奇心を大切に、友だちと一緒に遊びながら学びます。"
  - image: "/assets/images/class_03.webp"
    title: "たいよう組（4〜5歳）"
    text: "協力・自立を育みながら、就学に向けた準備をします。"

tabs:
  - title: "こもれび組"
    color: "#FFE66D"
  - title: "そよかぜ組"
    color: "#A8D5BA"
  - title: "たいよう組"
    color: "#F8B26A"

map:
  こもれび組: komorebi
  そよかぜ組: soyokaze
  たいよう組: taiyou
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
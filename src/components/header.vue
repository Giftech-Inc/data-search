<template>
  <div id="header">
    <h1>
      <a href="https://www.kirindo.co.jp/"
        ><img src="img/company_logo.png" alt="株式会社キリン堂"
      /></a>
    </h1>
    <ul id="hNav">
      <li>
        <a href="/sitemap/index.shtml"
          ><i class="fas fa-user"></i
          ><img src="img/bt_hnav_01.png" alt="サイトマップ"
        /></a>
      </li>
      <li>
        <a href="/faq/index.shtml"
          ><img
            src="https://www.kirindo.co.jp/img/bt_hnav_02.png"
            alt="よくあるご質問"
        /></a>
      </li>
      <li>
        <a href="/contact/index.shtml"
          ><img
            src="https://www.kirindo.co.jp/img/bt_hnav_03.png"
            alt="お問い合わせ"
        /></a>
      </li>
      <li>
        <a href="/invite/index.shtml"
          ><img
            src="https://www.kirindo.co.jp/img/bt_hnav_04.png"
            alt="店舗物件募集"
        /></a>
      </li>
    </ul>
    <p id="gNavBtn">メニュー</p>
    <ul id="gNav">
      <li>
        <a href="/company/index.shtml"
          ><img
            src="https://www.kirindo.co.jp/img/bt_gnav_01.png"
            alt="会社情報"
          /><span>会社情報</span></a
        >
      </li>
      <li>
        <a href="/business/index.shtml"
          ><img
            src="https://www.kirindo.co.jp/img/bt_gnav_02.png"
            alt="事業の取り組み"
          /><span>事業の取り組み</span></a
        >
      </li>
      <li>
        <a href="/ir/ir_index.shtml"
          ><img
            src="https://www.kirindo.co.jp/img/bt_gnav_03.png"
            alt="株主・投資家の皆様へ"
          /><span>株主・投資家の皆様へ</span></a
        >
      </li>
      <li>
        <a href="https://www.recruit.kirindo.co.jp/" target="_blank"
          ><img
            src="https://www.kirindo.co.jp/img/bt_gnav_04.png"
            alt="採用情報"
          /><span>採用情報</span></a
        >
      </li>
      <li>
        <a href="https://www.kirindo-shop.com/manage/shop/shop.html"
          ><img
            src="https://www.kirindo.co.jp/img/bt_gnav_05.png"
            alt="店舗情報"
          /><span>店舗情報</span></a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {},
  data: function () {
    return {
      answer: 1, // 選択肢の番号（表示を消すために100にしているので、100に意味はない)
      counter: 0,
      score: 0,
      others: 0,
      alert: '',
    };
  },
  methods: {
    calculate: function () {},
    endTest: function () {},
  },
});
</script>
<style scoped></style>

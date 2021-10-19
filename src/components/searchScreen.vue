<template>
  <div id="search-screen">
    <h2>物件を探す</h2>
    <div id="search-module">
      <input type="text" placeholder="キーワードを入力" v-model="keyword" />
      <button @click="search">検索</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: { env: String, state: String },
  data: function () {
    return {
      keyword: '',
    };
  },
  methods: {
    search: function () {
      this.$emit('search', this.keyword);
    },
  },
});
</script>

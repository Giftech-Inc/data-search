<template>
  <div class="container">
    <header-screen></header-screen>
    <search-screen @search="search"></search-screen>
    <search-result
      :propertyList="propertyList"
      :searchWord="searchWord"
    ></search-result>
    <footer-screen></footer-screen>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import searchScreen from './components/searchScreen.vue';
import header from './components/header.vue';
import searchResult from './components/searchResult.vue';
import footer from './components/footer.vue';
import { getPropertyList } from './json/propertyList';

export default Vue.extend({
  data: function () {
    const propertyList = getPropertyList();
    return {
      propertyList,
      searchWord: '',
    };
  },
  components: {
    'header-screen': header,
    'search-screen': searchScreen,
    'search-result': searchResult,
    'footer-screen': footer,
  },
  methods: {
    search: function (word: string) {
      this.searchWord = word;
    },
  },
});
</script>

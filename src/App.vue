<template>
  <div class="container">
    <header-screen></header-screen>
    <search-window></search-window>
    <search-result></search-result>
    <footer-screen></footer-screen>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import searchScreen from './components/searchScreen.vue';
import header from './components/header.vue';
import serachResult from './components/serachResult.vue';
import footer from './components/footer.vue';
import { getPropertyList } from './json/propertyList';

export default Vue.extend({
  data: function () {
    const propertyList = getPropertyList();
    return {
      propertyList,
    };
  },
  components: {
    'header-screen': header,
    'search-window': searchScreen,
    'search-result': serachResult,
    'footer-screen': footer,
  },
  methods: {},
});
</script>

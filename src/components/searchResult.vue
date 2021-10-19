<template>
  <div id="search-result">
    <h2>物件一覧</h2>
    <h3 v-if="'searchWord.length' === 0">
      <!-- 再レンダリングされるようにしないとだめ -->
      検索条件：{{ searchWord }}{{ searchWord.length }}
    </h3>
    <div class="property-list">
      {{ searchWord }}
      <div
        class="property-card"
        v-for="property in propertyList"
        :key="property.name"
      >
        <property-card :property="property"></property-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Property from '../models/Property';
import propertyCard from './propertyCard.vue';

export default Vue.extend({
  props: {
    propertyList: [Property],
    searchWord: String,
  },
  components: {
    'property-card': propertyCard,
  },
  created: function () {
    console.log(this.searchWord === '');
  },
  methods: {},
});
</script>

<style scoped></style>

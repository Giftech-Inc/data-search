<template>
  <div id="search-result">
    <h2>物件一覧</h2>
    <h3 v-if="keyword !== ''">
      <!-- 再レンダリングされるようにしないとだめ -->
      検索条件：{{ keyword }}
    </h3>
    <div class="property-list">
      <div
        class="property-card"
        v-for="property in propertyList"
        :key="property.name"
      >
        <property-card :property="property" :keyword="keyword"></property-card>
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
    keyword: String,
  },
  components: {
    'property-card': propertyCard,
  },
  created: function () {
    console.log(this.keyword === '');
  },
  methods: {},
  watch: {
    keyword: function () {
      console.log(this.keyword);
    },
  },
});
</script>

<style scoped>
.property-card {
  margin: 10px auto;
}
</style>

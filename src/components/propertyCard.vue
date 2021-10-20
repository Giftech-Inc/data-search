<template>
  <div v-if="property.name.indexOf(keyword) !== -1">
    <div class="property-name">物件名：{{ property.name }}</div>
    <div class="property-image">
      <img
        src="https://www.kirindo-shop.com/manage/shop/images/mod_side-bnr01.jpg"
        :alt="property.name"
      />
    </div>
    <div class="property-location">住所：{{ property.location }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Property from '../models/Property';

export default Vue.extend({
  props: { property: Property, keyword: String },

  methods: {
    serch: function () {
      this.$emit('search', this.keyword);
    },
  },
});
</script>

<style scoped>
.property-name {
  background-color: coral;
  font-size: 18pt;
}

.property-location {
  background-color: lightgray;
}
</style>

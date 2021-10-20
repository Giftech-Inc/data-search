<template>
  <div v-if="property.name.indexOf(keyword) !== -1">
    <p>物件名：{{ property.name }}</p>
    <p>最寄り駅：{{ property.location }}</p>
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

<style scoped></style>

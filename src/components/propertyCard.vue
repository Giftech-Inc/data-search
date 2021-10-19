<template>
  <div class="property-card">物件名：{{ name }} 最寄り駅：{{ location }}</div>
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
    serch: function () {
      this.$emit('search', this.keyword);
    },
  },
});
</script>

<style scoped></style>

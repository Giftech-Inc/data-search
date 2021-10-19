<template>
  <div id="search-screen">
    <h2>物件一覧</h2>
    <div class="property-list">
      <property-card></property-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import propertyCard from './propertyCard.vue';

export default Vue.extend({
  props: { env: String, state: String },
  data: function () {
    return {
      keyword: '',
    };
  },
  components: {
    'property-card': propertyCard,
  },
  methods: {
    serch: function () {
      this.$emit('search', this.keyword);
    },
  },
});
</script>

<style scoped></style>

<template>
  <ParseDom :json="json"></ParseDom>
</template>

<script lang="ts" setup>
import ParseDom from './components/parse/ParseDom.vue';
import AllJson from './mock/all.json';
import { reactive } from 'vue';
const json = reactive(AllJson);
</script>

<style>
body {
  background: #f7f8fa;
}
</style>

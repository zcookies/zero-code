<script setup lang="ts">
import './components/shadow';
import platfrom from './components/default/platform.vue';
</script>

<template>
  <zero-header></zero-header>
  <zero-element></zero-element>
  <!-- <zero-config></zero-config> -->
  <platfrom></platfrom>
</template>

<style lang="scss">
body {
  background: #f7f8fa;
  min-width: 1000px;
}
</style>

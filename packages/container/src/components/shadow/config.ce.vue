<template>
  <div class="config">
    <van-popup v-model:show="show" position="right" :style="{ height: '100%' }" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(true);
</script>

<style lang="scss">
.config {
  width: 50vw;
  height: 100vh;
}
</style>

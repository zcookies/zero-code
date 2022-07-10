<template>
  <van-cell-group v-bind="{ ...props }">
    <slot></slot>
  </van-cell-group>
</template>

<script setup lang="ts">
import { CellGroupProps } from 'vant';
interface Props extends CellGroupProps {}
const props = defineProps<Props>();
</script>

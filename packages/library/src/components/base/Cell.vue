<template>
  <van-cell v-bind="{ ...props }" @click="cellClick" />
</template>

<script setup lang="ts">
import { CellProps } from 'vant';
interface Props extends CellProps {}
const props = defineProps<Props>();

const emits = defineEmits(['click']);

//点击事件
const cellClick = (event: MouseEvent) => {
  emits('click', event);
};
</script>

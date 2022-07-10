<template>
  <van-icon v-bind="{ ...props }" @click="cellClick" />
</template>

<script setup lang="ts">
import { IconProps } from 'vant';
interface Props extends IconProps {}
const props = defineProps<Props>();

const emits = defineEmits(['click']);

//点击事件
const cellClick = () => {
  emits('click');
};
</script>

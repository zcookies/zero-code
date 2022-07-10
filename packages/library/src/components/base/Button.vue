<template>
  <van-button v-bind="{ ...props }" @click="btnClick"></van-button>
</template>

<script setup lang="ts">
import { ButtonProps } from 'vant';
interface Props extends ButtonProps {}
const props = defineProps<Props>();

const emits = defineEmits(['click']);

const btnClick = () => {
  emits('click');
};
</script>

<template>
  <ParseComp :json="json"></ParseComp>
</template>

<script lang="ts" setup>
import ParseComp from './ParseComp.vue';

interface Props {
  json: any;
}

defineProps<Props>();
</script>

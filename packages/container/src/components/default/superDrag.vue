<template>
  <draggable
    :list="list"
    :group="{
      name: 'element',
      pull: false,
      put: true,
    }"
    item-key="id"
    @add="add"
  >
    <template #item="{ element }">
      <DragParseDom :json="element.canvas"></DragParseDom>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
import nextDrag from './superDrag.vue';
import { defineAsyncComponent } from 'vue';
const DragParseDom = defineAsyncComponent({
  loader: () =>
    import('library/platform').then((res) => {
      return res.DragParseDom;
    }),
});
interface Props {
  list: any[];
}
defineProps<Props>();

const add = (a: any) => {
  console.log(a);
};
</script>

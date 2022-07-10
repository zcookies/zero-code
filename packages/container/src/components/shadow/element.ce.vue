<template>
  <div class="container">
    <template v-for="m in map">
      <div class="title">{{ m.label }}</div>
      <draggable
        :list="m.obj"
        :group="{
          name: 'element',
          pull: 'clone',
          put: false,
        }"
        :clone="cloneDom"
        :sort="false"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="item">
            {{ element.label }}
          </div>
        </template>
      </draggable>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import draggable from 'vuedraggable';
import { getUuid } from '../../utils';
const map = ref<any[]>();
import('library/platform').then((res) => {
  map.value = res.default;
});

const cloneDom = (row: any) => {
  const el = JSON.parse(JSON.stringify(row));
  el.id = getUuid();
  return el;
};
</script>

<style lang="scss">
.container {
  position: absolute;
  left: 0;
  z-index: 1;
  min-width: 220px;
  max-width: 220px;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;
  padding: 24px 0;
  min-height: 100vh;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }
  .title {
    padding: 8px 0 8px 24px;
    color: #455a64;
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
  }
  .item {
    display: block;
    margin: 8px 0;
    padding: 8px 0 8px 24px;
    color: #455a64;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    font-size: 13px;
  }
}
</style>

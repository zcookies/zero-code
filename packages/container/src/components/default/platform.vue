<template>
  <div class="platform">
    <div class="emu">
      <div class="phone-bar">状态栏</div>
      <superDrag :list="list" class="super-drag"></superDrag>
    </div>
  </div>
</template>

<script setup lang="ts">
import superDrag from './superDrag.vue';
import { ref } from 'vue';
import { getUuid } from '../../utils';
const list = ref([
  {
    id: getUuid(),
    label: '容器',
    canvas: {
      type: 'div',
      props: {},
      data: {},
      childrens: [],
    },
  },
]);

console.log(list);
</script>

<style lang="scss" scoped>
.super-drag {
  position: relative;
  width: 100%;
  min-height: 650px;
}
.platform {
  position: absolute;
  left: 250px;
  width: calc(100% - 550px);
  text-align: center;
  min-width: 375px;
  margin-top: 30px;
  .emu {
    text-align: left;
    display: inline-block;
    width: 375px;
    height: 667px;
    overflow-y: auto;
    background: #fafafa;
    border-radius: 20px;
    box-shadow: 0 8px 12px #ebedf0;
    border: 1px solid rgba($color: #000000, $alpha: 0.1);
    cursor: pointer;
    &::-webkit-scrollbar {
      width: 0px;
      height: 6px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: 6px;
    }

    .phone-bar {
      padding: 3px;
      background: rgba(0, 0, 0, 0.2);
      text-align: center;
    }
  }
}
</style>

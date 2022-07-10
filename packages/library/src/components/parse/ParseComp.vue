<template>
  <component v-if="data.visible" :zero-scoped="instance.id" :is="props.json.type == 'comp' ? props.json.name : props.json.type" v-bind="{ ...attr, ...events }">
    <template v-if="props.json.childrens && props.json.childrens.length > 0">
      <ParseDom v-for="item in props.json.childrens" :json="item"></ParseDom>
    </template>
  </component>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import ParseDom from './ParseDom.vue';
import { useInstance } from '../../hooks';
import { ParseEvent } from './ParseData';
interface Props {
  json: Record<string, any>;
}
const props = defineProps<Props>();

//属性 属性可以直接透传
const attr = props.json.props;
//事件
const events = ref({});
//数据
const data = ref({
  visible: true,
});
//实例
const instance = useInstance(data);
//解析event
ParseEvent(instance, props.json.events || {}, events);

//检查data值
watch(
  () => props.json.data,
  (value, oldValue) => {
    if (value) {
      data.value = { ...data.value, ...value };
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

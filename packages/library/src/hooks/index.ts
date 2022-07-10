import { getCurrentInstance, reactive } from 'vue';
import { getUuid } from '../utils';

//所有实例
const container = reactive<any>({});

const createELementStyle = async (instance: any, scopeId: string) => {
  let css = instance.props.json.css;
  if (css) {
    const style: any = document.querySelector(`style[scoped=${scopeId}]`) || document.createElement('style');
    style.type = 'text/css';
    style.setAttribute('scoped', scopeId);
    style.innerHTML = css.replaceAll('$sp', `[zero-scoped=${scopeId}]`);
    document.head.append(style);
  }
};

//初始化实例
export const useInstance = (data: any) => {
  const instance = getCurrentInstance() as any;
  const compId = instance.props.json.id || getUuid();
  const exposeInstance = {
    config: instance.props.json,
    props: instance.props.json.props,
    data,
    id: compId,
    container,
  };
  container[compId] = exposeInstance;
  //异步插入css样式
  createELementStyle(instance, compId);
  return exposeInstance;
};

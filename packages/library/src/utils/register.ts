import { App, defineAsyncComponent } from 'vue';

const prefix = 'zo-';

//注册组件
export function registerComponents(app: App, components: any, isAsync = false) {
  for (const comp in components) {
    app.component(prefix.concat(comp), isAsync ? defineAsyncComponent(components[comp]) : components[comp]);
  }
}

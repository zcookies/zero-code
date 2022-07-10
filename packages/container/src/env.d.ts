/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'library/module' {
  const remote: any;
  export = remote;
}

declare module 'library/platform' {
  const remote: any;
  export = remote;
}

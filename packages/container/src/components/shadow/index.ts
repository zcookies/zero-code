import { defineCustomElement } from 'vue';

import Header from './header.ce.vue';
import ZELement from './element.ce.vue';
import Config from './config.ce.vue';

customElements.define('zero-header', defineCustomElement(Header));
customElements.define('zero-element', defineCustomElement(ZELement));
customElements.define('zero-config', defineCustomElement(Config));

import SayHello from "./components/say-hello.vue";
import { defineCustomElement } from "vue";

export const Hello = defineCustomElement(SayHello);

export function register(tagName = "say-hello") {
  customElements.define(tagName, Hello);
}

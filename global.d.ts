import { VuePluginOptions } from "rollup-plugin-vue";

declare global {
  interface Window {
    $cookies: VuePluginOptions
  }
}
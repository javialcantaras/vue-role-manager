import Vue from 'vue'
import Router from 'vue-router'

declare module 'vue/types/vue' {
  interface VueConstructor {
    $roleManager: any
    $router: Router
  }
}
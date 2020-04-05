import Vue from 'vue'
import Router from 'vue-router'
import RoleManager from '@/RoleManager'

declare module 'vue/types/vue' {
  interface VueConstructor {
    $roleManager: RoleManager
    $router: Router
  }
}
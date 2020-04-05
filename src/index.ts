import PluginOptions from './_models/PluginOptions'
import Vue, { PluginObject, VueConstructor } from 'vue'
import RoleManager from './RoleManager';
import { Route } from 'vue-router'



class VueRoleManagerPlugin implements PluginObject<PluginOptions> {
  public install(vm: VueConstructor, options: PluginOptions) {

    vm.$roleManager = new RoleManager()

    vm.$router.beforeEach((to: Route, from: Route, next: Function) => {
      to.meta.authorize
    })
  }
}

export default new VueRoleManagerPlugin()
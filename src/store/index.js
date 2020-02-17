/*
 * @Descripttion: 
 * @version: 
 * @Author: Sonwen
 * @Date: 2020-02-14 10:33:58
 * @LastEditors  : Sonwen
 * @LastEditTime : 2020-02-14 17:22:53
 */
import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function ( /* { ssrContext } */ ) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}

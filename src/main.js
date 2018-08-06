// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Users from './components/users'
import Test from './components/test'
import Photos from './components/photos'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/test', component: Test},
    {path: '/photos', component: Photos}
  ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  // el: '#app',
  // template: '<App/>',
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
        <li><router-link to="/photos">Photos</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `
  // components: { App }
}).$mount('#app')

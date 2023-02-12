import { createApp } from 'vue'
// Utilisation global de mitt anciennement bus
import mitt from 'mitt'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as VueRouter from 'vue-router'
import Routes from './Routes'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: Routes,
  mode: 'history'
})

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter
app.use(router).mount('#app')
// app.mount('#app')


// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import VueD3 from 'vue-d3'
//this.$d3.selectAll('p').style('color', 'white');

//createApp(App).use(VueD3).use(store).use(router).mount('#app')
createApp(App).use(store).use(router).mount('#app')

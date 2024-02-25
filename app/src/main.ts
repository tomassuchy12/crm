import { createApp } from 'vue';
import './style.css'
import { createPinia } from 'pinia';
import router from './router/index';
import App from './App.vue';

const _pinia = createPinia()

createApp(App).use(_pinia).use(router).mount('#app');
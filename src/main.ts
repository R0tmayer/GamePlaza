import {createApp} from 'vue';
import {router} from './router.ts'
import {createPinia} from "pinia";
import App from './App.vue';
import './assets/index.css';

createApp(App).use(router).use(createPinia()).mount('#app');

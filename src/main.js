import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import "@/assets/styles/global/global.scss";
import i18n from "@/core/plugins/i18n";


const app = createApp(App);
app.use(router)
    .use(ElementPlus)
    .use(i18n)
    .mount('#app')

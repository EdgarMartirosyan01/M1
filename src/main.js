import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import "@/assets/styles/global/global.scss";
import i18n from "@/core/plugins/i18n";
// import {createI18n} from "vue-i18n";


// const i18n = createI18n( {
//     locale: "ru",
//     fallbackLocale: "ru",
//     messages: {
//         ru,
//         en,
//         am
//     }
// })

const app = createApp(App);
app.use(router)
    .use(ElementPlus)
    .use(i18n)
    .mount('#app')

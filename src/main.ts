import {createApp} from 'vue'
import './style.scss'
import App from './App.vue'
import "@/assets/references/index.scss";
import {createPinia} from "pinia";
import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import router from "./router"

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(moshaToast)
app.mount('#app')
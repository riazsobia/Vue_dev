import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import "./assets/css/tailwind.css"

const app = createApp(App)
app.provide('$axios', axios);

app.mount('#app')

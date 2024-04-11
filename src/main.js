//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import router from "./routes"


const app = createApp(App)
app.use(Buefy)
app.use(router)
app.mount('#app')



//createApp(App).mount('#app')

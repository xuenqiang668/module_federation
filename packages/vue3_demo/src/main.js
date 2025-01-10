import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'


const app = createApp(App)

// const RemoteButton = defineAsyncComponent(() => import("remoteApp/Button"))
// app.component('RemoteButton', RemoteButton)
app.mount('#app')

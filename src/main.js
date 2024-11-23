import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';


library.add(fas)


createApp(App).use(router).use(PrimeVue, {
    theme: {
        preset: Aura
    }
}).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
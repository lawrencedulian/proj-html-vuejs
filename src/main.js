/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons'

import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faTwitter, faInstagram, faYoutube, faPhoneFlip)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

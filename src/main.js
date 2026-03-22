import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

AOS.init({
  duration: 1000,
  once: true
})

createApp(App).mount('#app')

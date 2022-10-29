import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpbmFzbTk1IiwiYSI6ImNsOXU4YndwMDBlYXgzcGtiNHFrbnRucHQifQ.CkcnSPwz7j5P75f7Ep5GPA';


if( !navigator.geolocation ){
    alert('Tu navegador no soporta la geolocalización')
    throw new Error('Tu navegador no soporta la geolocalización')
}

createApp(App).use(store).use(router).mount('#app')

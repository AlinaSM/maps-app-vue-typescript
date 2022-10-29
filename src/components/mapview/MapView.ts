import { defineComponent, onMounted, ref, watch } from "vue";
import { usePlacesStore } from "@/composables";
import Mapboxgl from "mapbox-gl";

export default defineComponent({
    name : 'Component',
    setup() {
        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        
        onMounted(() => {
            if( isUserLocationReady.value )
                return initMap();

            console.log('No hay localicación aun!!!!');
        });

        watch(isUserLocationReady, ( newVal ) => {
            if( isUserLocationReady.value ) return initMap();
        })

        const initMap = async () => {
            if( !mapElement.value ) throw new Error('Elemento de mapa no esta cargado');
            if( !userLocation.value ) throw new Error('Las locaciones del usuario no han sido cargadas');

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 9, // starting zoom
                //projection: 'globe' // display the map as a 3D globe
            });
        }

        return {
            isUserLocationReady,
            mapElement
        }
    },
});
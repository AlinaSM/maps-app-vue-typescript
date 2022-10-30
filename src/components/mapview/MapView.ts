import { defineComponent, onMounted, ref, watch } from "vue";
import { usePlacesStore, useMapStore } from "@/composables";
import Mapboxgl from "mapbox-gl";

export default defineComponent({
    name : 'Component',
    setup() {
        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore();
        
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
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 9, // starting zoom
            });


            const myLocationPopup = new Mapboxgl.Popup({ closeOnClick: false, offset : [0, -15] })
            .setLngLat(userLocation.value)
            .setHTML(`
                <h4>Estas aqui!!!</h4>
                <p>Estas son las coordenadas: ${ userLocation.value }</p>
            `);

            const myLocationMarker = new Mapboxgl.Marker({color : 'black'})
            .setLngLat( userLocation.value )
            .setPopup(myLocationPopup)
            .addTo(map);

            //TODO: set map on Vuex
            setMap ( map )


        }

        return {
            isUserLocationReady,
            mapElement
        }
    },
});
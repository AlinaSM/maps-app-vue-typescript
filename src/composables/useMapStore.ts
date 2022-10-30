import { StateInterface } from "@/store/index";
import Mapboxgl from "mapbox-gl";
import { computed, onMounted } from "vue";
import { useStore } from "vuex"

export const useMapStore = () => {
    const store = useStore<StateInterface>()

    return {
        //State
        map : computed(() => store.state.map.map),
        duration : computed(() => store.state.map.duration),
        distance : computed(() => store.state.map.distance),

        //Getters
        isMapReady : computed<boolean>(() => store.getters['map/isMapReady']),
        
        //Actions

        //Mutations
        setMap : (map : Mapboxgl.Map) => store.commit('map/setMap', map ) ,

    }
}
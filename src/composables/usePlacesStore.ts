import { StateInterface } from "@/store/index";
import { computed, onMounted } from "vue";
import { useStore } from "vuex"

export const usePlacesStore = () => {
    const store = useStore<StateInterface>()

    onMounted(() => {
        if( !store.getters['places/isUserLocationReady'] ){
            store.dispatch('places/getInitialLocation')
        }
    });

    return {
        //State
        isLoading : computed(() => {  return store.state.places.isLoading }),
        userLocation : computed(() => { return store.state.places.userLocation }),
    
        //Getters
        isUserLocationReady : computed<boolean>(() => { return store.getters['places/isUserLocationReady'] }),

        //Actions

        //Mutations


    }
}
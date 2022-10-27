import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit } ) {
        // TODO: implement loading
        navigator.geolocation.getCurrentPosition(
            //(position) => commmit('setLngLat', position.coords ) this is without destructuring 
            ({coords}) => commit('setLngLat', {lng : coords.longitude , lat : coords.latitude } ),
            ( err ) => {
                console.error(err)
                throw new Error('No hay geolocalización :(')
            }
        )
    }
}



export default actions;
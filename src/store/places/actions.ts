import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';


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
    },
    //TODO: Colocar el valor de retorno
    async searchPlacesByTerm( { commit, state }, query : string ) {
        const resp = await searchApi(`/${ query }.json`, {
            params: {
                proximity : state.userLocation?.join(',')
            }
        })
        console.log(resp.data)
    }
}



export default actions;
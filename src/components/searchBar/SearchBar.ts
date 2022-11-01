import { defineComponent, ref, computed } from "vue";
import SearchResult from "@/components/searchResult/SearchResult.vue";
import { usePlacesStore } from "@/composables";

export default defineComponent({
    name: 'SearchBar',
    components : {
        SearchResult
    },
    setup(){

        const debouncedTimeout = ref()
        const debouncedValue = ref('')
        const { searchPlacesByTerm } = usePlacesStore()

        return {
            debouncedValue,
            searchTerm: computed({
                get(){
                    return debouncedValue.value;
                },
                set( val: string ){
                    if( debouncedTimeout.value ) clearTimeout( debouncedTimeout.value );

                    debouncedTimeout.value = setTimeout(() => {
                        debouncedValue.value =  val;
                        searchPlacesByTerm( val )
                    }, 1500)
                }
            })

        }
    }   
});
<template>
    <button
        v-if="activeBtn" 
        class="btn btn-primary"
        @click="onMyLocationClicked"
    >   
        Ir a mi ubicación
    </button>

</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { usePlacesStore, useMapStore } from "@/composables";

export default defineComponent({
    name : 'MyLocationBtn',
    setup() {

        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { map, isMapReady } = useMapStore();

        return {

            activeBtn: computed<boolean>(() =>  isMapReady.value && isUserLocationReady.value ),


            onMyLocationClicked:  () => {
                map.value?.flyTo({
                    center : userLocation.value,
                    zoom : 14,
                })
            }
        }
    },
})
</script>
<style scoped>
button {
    position: fixed;
    top: 30px;
    right: 30px;
}

</style>
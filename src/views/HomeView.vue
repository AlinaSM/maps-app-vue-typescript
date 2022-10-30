<template>
  <MapView />
  <MyLocationBtn /> 
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';
import MapView from '@/components/mapview/MapView.vue';
import MyLocationBtn from '@/components/MyLocationBtn/MyLocationBtn.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MapView,
    MyLocationBtn,
  },
  setup(){
    usePlacesStore();
  }
});
</script>

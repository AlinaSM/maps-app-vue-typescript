<template>
  <MapView />
  <SearchBar />
  <MyLocationBtn /> 
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';
import MapView from '@/components/mapview/MapView.vue';
import SearchBar from '@/components/searchBar/SearchBar.vue';
import MyLocationBtn from '@/components/myLocationBtn/MyLocationBtn.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MapView,
    MyLocationBtn,
    SearchBar,
  },
  setup(){
    usePlacesStore();
  }
});
</script>

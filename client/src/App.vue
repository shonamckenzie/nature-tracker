<template>
  <div id="app">
    <h3>Wildlife App</h3>
    <species-list :allSpecies="allSpecies"/>
    <species-detail :species="selectedSpecies"/>
  </div>
</template>

<script>
import {eventBus} from './main.js';
import SpeciesService from './services/SpeciesService';
import SpeciesList from './components/SpeciesList';
import SpeciesDetail from './components/SpeciesDetail';

export default {
  name: 'app',
  data() {
    return {
      allSpecies: [],
      selectedSpecies: {}
    }
  },
  components: {
    'species-list': SpeciesList,
    'species-detail': SpeciesDetail
  },
  mounted() {
    this.fetchData();
    eventBus.$on('species-selected', (species) => {
      this.selectedSpecies = species;
    })
  },
  methods: {
    fetchData() {
      SpeciesService.getSpecies()
      .then(allSpecies => this.allSpecies = allSpecies);
    }
  }
}
</script>

<style>

</style>

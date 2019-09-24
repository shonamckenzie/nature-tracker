<template>
  <div id="app">
    <div class="top-level-container">
      <h3>Wildlife App</h3>
      <div class="top-section">
        <sightings-bar-chart :barChart="barChart"/>
        <species-detail :species="selectedSpecies"/>
      </div>
      <species-list :allSpecies="allSpecies"/>
    </div>
  </div>
</template>

<script>
import {eventBus} from './main.js';
import SpeciesService from './services/SpeciesService';
import SpeciesList from './components/SpeciesList';
import SpeciesDetail from './components/SpeciesDetail';
import SightingsBarChart from './components/SightingsBarChart';

export default {
  name: 'app',
  data() {
    return {
      barChart: {},
      allSpecies: [],
      selectedSpecies: {}
    }
  },
  components: {
    'species-list': SpeciesList,
    'species-detail': SpeciesDetail,
    'sightings-bar-chart': SightingsBarChart
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

<style lang="css" scoped>
  .top-section {
      display: flex;
      background-color: #ff9d1e;
  }
</style>

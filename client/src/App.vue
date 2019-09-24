<template>
  <div id="app">
    <div class="top-level-container">
      <h1>Nature Tracker</h1>
      <div class="top-section">
        <sightings-chart :allSpecies="allSpecies"></sightings-chart>
        <species-detail :species="selectedSpecies"/>
      </div>
      <div class="species-list-wrapper">
        <species-list :allSpecies="allSpecies"/>
      </div>
      <div class="add-sighting-form-wrapper">
        <add-sighting-form :speciesOptions="allSpecies"/>
      </div>
      <div class="sightings-map-wrapper">
        <sightings-map :speciesOption="allSpecies"/>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from './main.js';
import SpeciesService from './services/SpeciesService';
import SpeciesList from './components/SpeciesList';
import SpeciesDetail from './components/SpeciesDetail';
import SightingsChart from './components/SightingsChart';
import AddSightingForm from './components/AddSightingForm';
import SightingsMap from './components/SightingsMap';

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
    'sightings-chart': SightingsChart,
    'add-sighting-form': AddSightingForm,
    'sightings-map': SightingsMap,
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
      background-color: #DDB771;
      align-items: center;
      justify-content: space-around;
      border-radius: 10px;
  }

  h1 {
    text-align: center;
    height: 50px;
  }

</style>

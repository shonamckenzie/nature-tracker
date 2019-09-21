<template>
  <div id="app">
    <h3>Wildlife App</h3>
    <species-list :allSpecies="allSpecies"/>
  </div>
</template>

<script>
import SpeciesService from './services/SpeciesService';
import SpeciesList from './components/SpeciesList'

export default {
  name: 'app',
  data() {
    return {
      allSpecies: [],
      selectedSpecies: {}
    }
  },
  components: {
    'species-list': SpeciesList
  },
  mounted() {
    this.fetchData();
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

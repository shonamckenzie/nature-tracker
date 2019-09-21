<template>
  <div id="app">
    <h3>Wildlife App</h3>
  </div>
</template>

<script>
import SpeciesService from './services/SpeciesService'

export default {
  name: 'app',
  data() {
    return {
      allSpecies: [],
      selectedSpecies: {}
    }
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

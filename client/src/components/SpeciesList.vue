<template>
  <div id="species-list">
    <div class="species" v-for="species in allSpecies" :key="species.name">
      <species-card v-for="name in species" :species="species"></species-card>
      <p>{{ species.name }}</p>
    </div>
    <add-sighting-form :allSpecies="allSpecies"/>
  </div>
</template>

<script>
import SpeciesService from '../services/SpeciesService';
import AddSightingForm from './AddSightingForm';

export default {
  name: 'species-list',
  props: ['allSpecies'],
  components: {
    'species-card': SpeciesCard,
    'add-sighting-form': AddSightingForm
  }
}
</script>

<style>

</style>

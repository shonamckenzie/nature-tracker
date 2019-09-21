<template>
  <div id="species-list">
    <div class="species" v-for="species in allSpecies" :key="species.name">
      <!-- This div is just a placeholder - to be replaced by species-card component -->
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
    // 'species-card': SpeciesCard,
    // Uncomment when this is added
    'add-sighting-form': AddSightingForm
  }
}
</script>

<style>

</style>
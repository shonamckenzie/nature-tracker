<template>
  <div id="species-list">
    <div class="species" v-for="species in allSpecies" :key="species.name">
      <!-- This div is just a placeholder - to be replaced by species-card component -->
      <p>{{ species.name }}</p>
    </div>
  </div>
</template>

<script>
import SpeciesService from '../services/SpeciesService';

export default {
  name: 'species-list',
  props: ['allSpecies'],
  components: {
    // 'species-card': SpeciesCard,
    // 'add-sighting-form': AddSightingForm
    // Uncomment when these are added
  }
}
</script>

<style>

</style>
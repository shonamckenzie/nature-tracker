<template>
  <div id="species-list">
    <div class="species" v-for="species in allSpecies" :key="species.name">
      <species-card :species="species"></species-card>
    </div>
    <add-sighting-form :allSpecies="allSpecies"/>
  </div>
</template>

<script>
import SpeciesService from '../services/SpeciesService';
import AddSightingForm from './AddSightingForm';
import SpeciesCard from './SpeciesCard';

export default {
  name: 'species-list',
  props: ['allSpecies'],
  components: {
    'species-card': SpeciesCard,
    'add-sighting-form': AddSightingForm
  }
}
</script>

<style lang="css" scoped>

#species-list {
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
}

.species {
  display: grid;
  border-radius: 30%;
  width: 30%;
}



</style>

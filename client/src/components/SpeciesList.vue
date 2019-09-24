<template>
  <div id="species-list">
    <div class="species" v-for="species in allSpecies" :key="species.name">
      <species-card :species="species"></species-card>
    </div>
  </div>
</template>

<script>
import SpeciesService from '../services/SpeciesService';
import SpeciesCard from './SpeciesCard';

export default {
  name: 'species-list',
  props: ['allSpecies'],
  components: {
    'species-card': SpeciesCard
  }
}
</script>

<style lang="css" scoped>

#species-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.species {
  /* display: grid; */
  min-width: 300px;
  border-radius: 30%;
  /* width: 30%; */
  flex-basis: 30%;
}



</style>

<template>
  <div id="species-list">
    <div class="species" v-for="species in allSpecies" :key="species.name">
      <p>{{ species.name }}</p>
    </div>
  </div>
</template>

<script>
import SpeciesService from '../services/SpeciesService';

export default {
  name: 'species-list',
  props: ['allSpecies']
}
</script>

<style>

</style>
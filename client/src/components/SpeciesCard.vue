<template lang="html">
<div class="species-card">
  <h3>{{ species.name }}</h3>
  <p>About: {{ species.about }}</p>
  <img id="species-image" :src="species.image" :alt="species.name" />
  <button v-on:click="displayInfo">More Info &rarr;</button>
</div>
</template>

<script>
import { eventBus } from '@/main.js'
import SpeciesService from '@/services/SpeciesService.js'
export default {
  name: 'species-card',
  props: ['species'],
  methods: {
      displayInfo() {
        eventBus.$emit('species-selected', this.species)
      }
  },
}

</script>

<style lang="css" scoped>
#species-image {
  height: 20%;
  width: 20%;
}
</style>

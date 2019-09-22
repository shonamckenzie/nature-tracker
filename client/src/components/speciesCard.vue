<template lang="html">
<div class="species-card">
  <h3>{{ species.name }}</h3>
  <p>Sightings: {{ species.sightings }}</p>
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
      
    }
  }
}
</script>

<style lang="css" scoped>

</style>

// changed component name and need to comment for file change to be registered
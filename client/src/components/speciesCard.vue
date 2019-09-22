<template lang="html">
<div class="species-card">
  <h3>{{ species.name }}</h3>
  <p>Description: </p>
  <p>Habitat: </p>
  <p>Sightings: </p>
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

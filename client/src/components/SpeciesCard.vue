<template lang="html">
  <div class="species-card">
    <h3>{{ species.name }}</h3>
    <p>About: {{ species.about }}</p>
    <img id="species-image" :src="species.image" :alt="species.name" />
    <button v-on:click="displayInfo">Find Out More! &rarr;</button>
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
  width: 15em;
}

.species-card {
  align-items: center;
  align-content:space-between;
  box-sizing: content-box;
  background: darkgreen;
  margin-bottom: 20px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
}

button {
  background-color: brown;
  color: white;
}




</style>

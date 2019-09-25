<template lang="html">
  <div class="species-card">
    <h3>{{ species.name }}</h3>
    <p>{{ species.about }}</p>
    <img id="species-image" :src="species.image" :alt="species.name" />

    <h3 v-on:click="displayInfo"> <a href="#top">Find Out More!</a></h3>

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
  height: 10em;
  object-fit: cover;
  width: 15em;
  max-width: 98%;
}

.species-card {
  align-items: center;
  align-content:space-between;
  box-sizing: content-box;
  background: #0B6E4F;
  margin-bottom: 20px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px;
  color: lightgrey;
}

a {
  color: #DDB771;
}





</style>

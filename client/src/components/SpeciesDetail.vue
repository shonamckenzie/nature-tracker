<template lang="html">
  <div id="species-detail-container">
    <h3>{{ species.name }}</h3>
    <div id="species-info">
      <div id="species-image">
        <img :src="species.image" :alt="species.name">
      </div>
      <div id="species-text">
        <p v-if="species.description">Description: {{ species.description }}</p>
        <p v-if="species.habitat">Habitat: {{ species.habitat }}</p>
      </div>
      <div id="sightings-container">
        <div
          class="sightings" v-for="(sighting, key) in species.sightings" :key="key">
          <p v-if="sighting.location">Location Sighted: {{ sighting.location }}<span v-if="sighting.date"> Date Sighted: {{ sighting.date }}</span></p>
        </div>
          <add-sighting-form v-if="species._id" :allSpecies="species"/>
      </div>
    </div>
  </div>
</template>

<script>
import AddSightingForm from "@/components/AddSightingForm";

export default {
  name: 'speciesDetail',
  props: ["species"],
  components: {
    'add-sighting-form': AddSightingForm
  }
};
</script>

<style lang="css" scoped>
#species-image {
  height: 10%;
  width: 10%;
}
</style>

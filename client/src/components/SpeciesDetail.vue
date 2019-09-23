<template lang="html">
  <div id="species-detail-container">
    <h3>{{ species.name }}</h3>
    <div id="species-info">
      <!-- <div id="species-image"> -->
      <img id="species-image" :src="species.image" :alt="species.name" />
        <!-- <img :src="species.image" :alt="species.name"> -->
      <!-- </div> -->
      <div id="species-text">
        <p v-if="species.description">Description: {{ species.description }}</p>
        <p v-if="species.habitat">Habitat: {{ species.habitat }}</p>
      </div>
      <div id="sightings-container">
        <div
          class="sightings" v-for="(sighting, key) in species.sightings" :key="key">
          <p v-if="sighting.location">Location Sighted: {{ sighting.location }}<span v-if="sighting.date"> Date Sighted: {{ sighting.date }}</span></p>
          <!-- <button v-on:click="AddSightingForm">Add a New Sighting &rarr;</button> -->
        </div>
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
  }
};
</script>

<style lang="css" scoped>
#species-image {
  height: 10%;
  width: 10%;
}
#species-detail-container {
  width: 60%;
  padding: 20px;
}
</style>

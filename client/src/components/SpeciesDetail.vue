<template lang="html">
  <div id="species-detail-container">
    <h3>{{ species.name }}</h3>
    <div id="species-info">
      <div id="species-picture">
        <img :src="species.image_url" />
      </div>
      <div id="species-text">
        <p>{{ species.description }}</p>
        <p>{{ species.habitat }}</p>
      </div>
      <div id="sightings-container">
        <div
          class="sightings" v-for="(sighting, key) in species.sightings" :key="key">
          <p>{{ sighting.location }}</p>
          <p>{{ sighting.date }}</p>
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
</style>

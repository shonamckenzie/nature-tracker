<template>
  <form v-on:submit="addSighting" method="post">
    <h3>Add a New Sighting</h3>
    <div>
      <label for="species">Species:</label>
      <input type="text" v-model="species" required />
    </div>
    <div>
      <label for="date">Date Sighted:</label>
      <input type="date" v-model="date" required />
    </div>
    <div>
      <label for="location">Location Sighted:</label>
      <input type="text" v-model="location" required />
    </div>
    <div>
      <label for="locationLat">Location Latitude:</label>
      <input type="number" v-model="locationLat" />
    </div>
    <div>
      <label for="locationLon">Location Longitude:</label>
      <input type="number" v-model="locationLon" />
    </div>
  </form>
</template>

<script>
export default {
  name: "add-sighting-form",
  props: ["allSpecies"],
  data() {
    return {
      species: "",
      date: null,
      location: "",
      locationLat: null,
      locationLon: null
    }
  },
  methods: {
    addSighting(event) {

    }
  }
};
</script>

<style>
</style>
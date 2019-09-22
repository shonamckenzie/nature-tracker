<template>
  <form v-on:submit="addSighting" method="post">
    <h3>Add a New Sighting</h3>
    <div>
      <label for="name">Species:</label>
      <select id="name" v-model="selectedSpecies" required>
        <option
          v-for="species in allSpecies"
          :value="species"
          :key="species.name"
        >{{ species.name }}</option>
      </select>
    </div>
    <div>
      <label for="date">Date Sighted:</label>
      <input type="date" id="date" v-model="date" required />
    </div>
    <div>
      <label for="location">Location Sighted:</label>
      <input type="text" id="location" v-model="location" required />
    </div>
    <div>
      <label for="locationLat">Location Latitude:</label>
      <input type="number" id="locationLat" v-model="locationLat" />
    </div>
    <div>
      <label for="locationLon">Location Longitude:</label>
      <input type="number" id="locationLon" v-model="locationLon" />
    </div>
    <input type="submit" value="Add Sighting">
  </form>
</template>

<script>
import SpeciesService from "../services/SpeciesService";

export default {
  name: "add-sighting-form",
  props: ["allSpecies"],
  data() {
    return {
      selectedSpecies: this.species,
      date: null,
      location: "",
      locationLat: null,
      locationLon: null
    };
  },
  methods: {
    addSighting(event) {
      const newSighting = {
        date: this.date,
        location: this.location,
        locationLat: this.locationLat,
        locationLon: this.locationLon
      };
      const updatedSightings = selectedSpecies.sightings.push(newSighting);
      SpeciesService.updateSpecies(selectedSpecies.id, updatedSightings);
    }
  }
};
</script>

<style>
</style>
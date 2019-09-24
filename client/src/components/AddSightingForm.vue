<template>
  <form v-on:submit="addSighting" method="post">
    <h3>Add a New Sighting</h3>
    <div v-if="speciesOptions.length > 1">
      <label for="name">Species:</label>
      <select id="name" v-model="selectedSpecies" required>
        <option
          v-for="species in speciesOptions"
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
    <input type="submit" value="Add Sighting">
  </form>
</template>

<script>
import SpeciesService from "../services/SpeciesService";
import CoordinatesService from "../services/CoordinatesService";

export default {
  name: "add-sighting-form",
  props: ["speciesOptions"],
  data() {
    return {
      selectedSpecies: this.species,
      date: null,
      location: "",
    };
  },
  methods: {
    addSighting(event) {
      event.preventDefault();
      const newSighting = {
        date: this.date,
        location: this.location,
        locationLat: "",
        locationLon: ""
      };

      CoordinatesService.getCoord(this.location)
        .then(coord => {
          newSighting.locationLat = coord.lat;
          newSighting.locationLon = coord.lon;
          const speciesToUpdate = this.speciesOptions.length > 1 ? this.selectedSpecies : this.speciesOptions;
          speciesToUpdate.sightings.push(newSighting);
          const updatedSightings = { sightings: speciesToUpdate.sightings };
          SpeciesService.updateSpecies(speciesToUpdate._id, updatedSightings);
          this.selectedSpecies = null;
          this.date = null,
          this.location = ""
        })
        .catch(error=>console.error(error))


      }
  }
};
</script>

<style>
</style>

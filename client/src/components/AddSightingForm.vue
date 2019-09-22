<template>
  <form>
    <h3>Add a New Sighting</h3>
    <div>
      <label for="species">Species:</label>
      <input type="text" />
    </div>
    <div>
      <label for="date">Date Sighted:</label>
      <input type="text" />
    </div>
    <div>
      <label for="location">Location Sighted:</label>
      <input type="text" />
    </div>
    <div>
      <label for="locationLat">Location Latitude:</label>
      <input type="text" />
    </div>
    <div>
      <label for="locationLon">Location Longitude:</label>
      <input type="text" />
    </div>
  </form>
</template>

<script>
export default {
  name: "add-sighting-form",
  props: ["allSpecies"]
};
</script>

<style>
</style>
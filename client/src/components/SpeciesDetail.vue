<template lang="html">
  <div id="species-detail-container">
    <species-header :title="species.name" />
    <div id="species-info">
      <div id="picture">
        <species-image :imageUrl="species.image_url"></species-image>
      </div>
      <div id="species-text">
        <p>{{ species.description }}</p>
        <p>{{ species.habitat }}</p>
      </div>
      <div id="sightings-container">
        <div
          class="sightings" v-for="(sighting, key) in sightings" :key="key">
          <p>{{ sighting.location }}</p>
          <p>{{ sighting.date }}</p>
          <button v-on:click="AddSightingForm">Add a New Sighting &rarr;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

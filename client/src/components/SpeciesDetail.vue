<template lang="html">
  <div v-if="species._id" id="species-detail-container">
    <h3 id="details">{{ species.name }}</h3>
    <div id="species-info">
      <!-- <div id="species-image"> -->
      <img id="species-image" :src="species.image" :alt="species.name" />
        <!-- <img :src="species.image" :alt="species.name"> -->
      <!-- </div> -->
      <div id="species-text">
        <p v-if="species.description"><b>Description: </b>{{ species.description }}</p>
        <p v-if="species.habitat"><b>Habitat: </b>{{ species.habitat }}</p>
        <p v-if="species.funFacts"><b>Fun Facts: </b>{{species.funFacts}}</p>
      </div>
      <div id="sightings-container">
        <div
          class="sightings" v-for="(sighting, key) in species.sightings" :key="key">
          <p v-if="sighting.location"><b>Location Sighted: </b>{{ sighting.location }}<span v-if="sighting.date">  |  <b>Date Sighted: </b>{{ sighting.date }}</span></p>
        </div>
          <add-sighting-form  :speciesOptions="species"/>
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
  height: 8em;
  width: 12em;
}
#species-detail-container {
  width: 60%;
  padding: 20px;
}
</style>

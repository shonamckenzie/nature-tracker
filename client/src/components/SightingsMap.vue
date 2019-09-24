<template>
  <div id="sightings-map"></div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
const key = require("../map-key");

export default {
  name: "sightings-map",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  mounted() {
    const sightingsMap = L.map("sightings-map").setView([56.5, -4], 6);
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: key.token
      }
    ).addTo(sightingsMap);
  }
};
</script>

<style>
#sightings-map {
  height: 400px;
  width: 400px;
}
</style>
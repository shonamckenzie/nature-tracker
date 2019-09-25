
<template>
  <div id="sightings-map"></div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
const key = require("../map-key");
export default {
  name: "sightings-map",
  props: ["speciesOptions"],
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      sightingsMap: null,
      markerLayer: null
    };
  },
  mounted() {
    this.sightingsMap = L.map("sightings-map").setView([56.5, -4], 6);
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: key.token
      }
    ).addTo(this.sightingsMap);

    this.markerLayer = L.layerGroup().addTo(this.sightingsMap);

    this.addMarkers();
  },
  methods: {
    addMarkers: function() {
      this.markerLayer.clearLayers();
      this.allSightings.forEach(sighting => {
        L.marker([sighting.locationLat, sighting.locationLon])
          .bindPopup(`<b> ${sighting.name} </b> sighted ${sighting.date}`)
          .addTo(this.markerLayer);
      });
    }
  },
  watch: {
    allSightings: function() {
      this.addMarkers();
    }
  },
  computed: {
    allSightings: function() {
      const sightingsAccumulator = [];
      this.speciesOptions.forEach(species => {
        const name = species.name;
        species.sightings.forEach(sighting => {
          sighting.name = name;
          sightingsAccumulator.push(sighting);
        });
      });
      return sightingsAccumulator;
    }
  }
};
</script>

<style>
#sightings-map {
  height: 400px;
  width: 400px;
}
</style>
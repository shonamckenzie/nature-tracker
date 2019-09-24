<template lang="html">
  <div class="chart">
    <highcharts id="barChart" :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  computed: {
    chartOptions() {
      return {
        title: {
          text: "Sightings by Species"
        },
        chart: {
          type: "column"
        },
        plotOptions: {
          column: {
            pointPadding: 0,
            borderWidth: 5,
            groupPadding: 0,
            shadow: false
          }
        },
        xAxis: {
          categories: this.allSpecies.map(species => species.name)
        },
        yAxis: {
          title: {
            text: "Sightings"
          }
        },
        series: [
          {
            name: "Total Sightings",
            data: this.allSpecies.map(species => species.sightings.length),
            color: '#4f2d20',
            events: {
              click: (event) => {
                this.selectSpecies(event.target.point.x)
              }
            }
          }
        ]
      };
    }
  },
  props: ["allSpecies"],
  methods: {
    selectSpecies(index) {
      eventBus.$emit('species-selected', this.allSpecies[index])
    }
  }
};
</script>

<style>
.chart {
  padding: 10px;
  width: 40%;
}
</style>
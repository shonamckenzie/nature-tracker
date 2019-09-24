<template lang="html">
  <div class="chart">
    <highcharts id="barChart" :options="chartOptions"></highcharts>
  </div>
</template>

<script>
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
            color: '#4f2d20'
          }
        ]
      };
    }
  },
  props: ["allSpecies"]
};
</script>

<style lang="css" scoped>
.chart {
  padding: 10px;
}
</style>
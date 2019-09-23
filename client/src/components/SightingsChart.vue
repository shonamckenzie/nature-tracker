<template>
  <div class="chart">
      <highcharts id="barChart" :options="chartOptions"></highcharts>
  </div>
</template>

<script>
export default {
    data() {
        return {
            chartOptions:{
                title: {
                    text: 'Sightings by Species'
                },
                chart: {
                    type: 'column'
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
                    categories: ['Badger', 'Hedgehog', 'Red Deer']
                },
                 yAxis: {
                    title: {
                        text: 'Sightings'
                     }
                },
                 series: [{
                     name: 'Species',
                     data: [{
                        color: '#00FF00',
                        y: 1
                    }, {
                        color: '#FF00FF',
                        y: 5
                    }, {  
                        color: 'black',
                        y: 8  
                    }]
                 }]
            }
        }
    }
}
</script>

<style>

</style>
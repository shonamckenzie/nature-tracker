import config from "../config";

export default {
  getCoord(location){

    const mykey = config.API_KEY;

    const url=`https://eu1.locationiq.com/v1/search.php?key=${mykey}&q=${location},scotland&format=json`;

    return fetch(url)
      .then(coords => coords.json())
      .then(coordData => {
        const locationData = coordData[0]
        // console.log(locationData);
        return {
          lat: locationData.lat,
          lon: locationData.lon
        }
      })

      .catch(error=>console.log(error))
  }
}

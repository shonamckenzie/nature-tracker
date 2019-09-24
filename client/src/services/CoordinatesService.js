export default {
  getCoord(location){

    const url=`https://eu1.locationiq.com/v1/search.php?key=306bf02320ef63&q=${location},scotland&format=json`;

    return fetch(url)
      .then(coords => coords.json())
      .catch(error=>console.log(error))
  }
}

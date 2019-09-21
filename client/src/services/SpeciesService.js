const baseURL = 'http://localhost:3000/api/species/'

export default {

  getSpecies(){
    return fetch(baseURL)
    .then(res => res.json())
  },

}
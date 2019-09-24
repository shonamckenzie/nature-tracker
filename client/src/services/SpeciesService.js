const baseURL = 'http://localhost:3000/api/species/'

export default {

  getSpecies(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  updateSpecies(id, payload){
    return fetch(baseURL + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
}

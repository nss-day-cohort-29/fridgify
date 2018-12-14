// Component responsible for interacting with the API. All fetch calls for this application will be defined here

const foodCollection = {
  getAllFoods() {
    return fetch("http://localhost:8088/fridge")
    .then(response => response.json())
  }
}

export default foodCollection

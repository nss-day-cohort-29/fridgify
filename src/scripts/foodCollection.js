const foodCollection = {
  getAllFoods() {
    return fetch("http://localhost:8088/fridge")
    .then(response => response.json())
  }
}

export default foodCollection

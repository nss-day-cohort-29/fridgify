// Component responsible for interacting with the API. All fetch calls for this application will be defined here

const foodCollection = {
  // This method returns a fetch, which means it is returning a promise. Which means to access the response from the asynchronous HTTP GET request that is being made by this fetch, we can chain a .then at the point where this method(getAllFoods) is called. The .then then is chained to the fetch inside the method is parsing the data from JSON to data structures Javascript will understand. In this case, because we have a collection of items, it will be an array of objects.
  getAllFoods() {
    return fetch("http://localhost:8088/fridge")
    .then(response => response.json())
  },

  // This method will make a HTTP POST request to the API. Because a POST has a body with the data for the new item you want created, this method will take one argument which will be the object for the new food item we want to add to our collection in the API.
  postNewFood(newFoodToSave) {
    fetch("http://localhost:8088/fridge", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newFoodToSave)
    })
  }
}

export default foodCollection

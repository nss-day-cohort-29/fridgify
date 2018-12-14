// Component responsible for interacting with the API. All fetch calls for this application will be defined here

const foodCollection = {
  // This method returns a fetch, which means it is returning a promise. Which means to access the response from the asynchronous HTTP GET request that is being made by this fetch, we can chain a .then at the point where this method(getAllFoods) is called. The .then then is chained to the fetch inside the method is parsing the data from JSON to data structures Javascript will understand. In this case, because we have a collection of items, it will be an array of objects.
  getAllFoods() {
    return fetch("http://localhost:8088/fridge")
    .then(response => response.json())
  }
}

export default foodCollection

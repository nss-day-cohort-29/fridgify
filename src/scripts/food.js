import foodCollection from "./foodCollection"
import foodList from "./foodList"

//Given a single food object, this component builds out the HTML and returns it
const food = {

  // This method takes one argument, which we expect to be an object that represents a food and will have the following structure:
  // {
  //   name: "name value",
  //   expiration: "expiration value",
  //   type: "type value"
  // }

  // Given this object, the method will build HTML elements and append them appropriately so that it will look like this:
  // <article>
  //   <h3>name value</h3>
  //   <p>expiration value</p>
  //   <p>type value</p>
  // </article>

  // This HTML is then returned to the point from where this method was called
  foodBuilder(foodObject) {
    let foodArticle = document.createElement("article")
    
    let foodName = document.createElement("h3")
    foodName.textContent = foodObject.name

    let foodExp = document.createElement("p")
    foodExp.textContent = foodObject.expiration

    let foodType = document.createElement("p")
    foodType.textContent = foodObject.type

    let deleteFoodButton = document.createElement("button")
    deleteFoodButton.textContent = "Delete"
    // In order to have the id of the food item available when the user clicks on the delete button, we are the id of the HTML button element to contain the id of the item in the API. We are intentionally planning ahead and formating the id this way so that when the button is clicked, we can use the split method for strings to get just the id number of the food item to be deleted.
    deleteFoodButton.setAttribute("id", `food--${foodObject.id}`)
    deleteFoodButton.addEventListener("click", () => {
      let foodId = event.target.id.split("--")[1]
      foodCollection.deleteFood(foodId)
      .then(response => {
        foodList.fridgify()
      })
    })

    foodArticle.appendChild(foodName)
    foodArticle.appendChild(foodExp)
    foodArticle.appendChild(foodType)
    foodArticle.appendChild(deleteFoodButton)

    return foodArticle
  }
}

export default food

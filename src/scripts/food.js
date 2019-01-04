import foodCollection from "./foodCollection"
import foodList from "./foodList"
import foodEditForm from "./foodEditForm"

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
    // In order to have the id of the food item available when the user clicks on the delete and edit button, we set the id of the HTML article element for each food item to contain the id of the item in the API. We are intentionally planning ahead and formating the id this way so that when the buttons are clicked, we can use the split method for strings to get just the id number of the food item to be edited/deleted. Also, because we are using the ids from the API, it also ensures that each delete button has a unique id. By moving the id to the article element, it also gives us a a way to target the whole article element so that we can replace the contents of the article element with a pre-filled form when the user clicks the edit button.
    foodArticle.setAttribute("id", `food--${foodObject.id}`)
    
    let foodName = document.createElement("h3")
    foodName.textContent = foodObject.name

    let foodExp = document.createElement("p")
    foodExp.textContent = foodObject.expiration

    let foodType = document.createElement("p")
    foodType.textContent = foodObject.type

    // In order to change the data for an existing food item in our API, we need to provide the user with a way to edit the existing values. This means we will show the user a form with the existing values already populated. Once again, we want our data to be our point of truth. So we make a HTTP GET request targeting the specific food item the user wants to edit to get the data that will be populated in the form. Once we have that data, we can build the form, populate the input fields with our data form the GET request and then append that form to the appropriate place on the DOM.
    let editFoodButton = document.createElement("button")
    editFoodButton.textContent = "Edit"
    editFoodButton.addEventListener("click", () => {
      let articleId = event.target.parentNode.id
      let foodId = articleId.split("--")[1]
      foodCollection.getFood(foodId)
      .then(response => {
        foodEditForm.createAndAppendForm(articleId, response)
      })
    })

    // Since we can get the id of the food item to be deleted from the parent element(the article element), we can use that to make an HTTP DELETE request to our API. Once again after this we want to get the list of food items from the API using a HTTP GET request and display it to the user so that the user does not have to refresh the page in order to see that the item they deleted has actually been deleted.
    let deleteFoodButton = document.createElement("button")
    deleteFoodButton.textContent = "Delete"
    deleteFoodButton.addEventListener("click", () => {
      let foodId = event.target.parentNode.id.split("--")[1]
      foodCollection.deleteFood(foodId)
      .then(response => {
        foodList.fridgify()
      })
    })

    foodArticle.appendChild(foodName)
    foodArticle.appendChild(foodExp)
    foodArticle.appendChild(foodType)
    foodArticle.appendChild(editFoodButton)
    foodArticle.appendChild(deleteFoodButton)

    return foodArticle
  }
}

export default food

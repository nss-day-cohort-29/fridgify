import foodCollection from "./foodCollection"
import foodList from "./foodList"

const foodEditForm = {
  // This module will build an edit form and append it to the DOM. The form will contain input fields with existing values from the API and an Update button. The user can edit the the values in the input fields. An event listener on the Update button will handle taking the new values entered by the user and calling the API to update the data.
  createAndAppendForm (articleId, foodObjToEdit) {

    // Building the edit form with fields for the name, expiration and type of the food item. Each of the input fields contains the existing values from the database.
    let foodNameField = document.createElement("p")

    let foodNameLabel = document.createElement("label")
    foodNameLabel.textContent = "Name"
    let foodNameInput = document.createElement("input")
    foodNameInput.value = foodObjToEdit.name

    foodNameField.appendChild(foodNameLabel)
    foodNameField.appendChild(foodNameInput)

    let foodExpirationField = document.createElement("p")

    let foodExpirationLabel = document.createElement("label")
    foodExpirationLabel.textContent = "Expiration"
    let foodExpirationInput = document.createElement("input")
    foodExpirationInput.value = foodObjToEdit.expiration

    foodExpirationField.appendChild(foodExpirationLabel)
    foodExpirationField.appendChild(foodExpirationInput)

    let foodTypeField = document.createElement("p")

    let foodTypeLabel = document.createElement("label")
    foodTypeLabel.textContent = "Type"
    let foodTypeInput = document.createElement("input")
    foodTypeInput.value = foodObjToEdit.type

    foodTypeField.appendChild(foodTypeLabel)
    foodTypeField.appendChild(foodTypeInput)

    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"

    // There is an event listener on the Update button which will take the new values in the input fields and build an object for the food item to be edited. Then we make a HTTP PUT request where we target the food item we want to edit by specifying the id in the URL. We also pass the object representing the food item with the new values as data in our HTTP request. Once again, because our data has been modified, we make an HTTP GET request to get all the food items and display them.
    updateButton.addEventListener("click", () => {
      let editedFood = {
        name: foodNameInput.value,
        expiration: foodExpirationInput.value,
        type: foodTypeInput.value
      }
      
      foodCollection.putExistingFood(foodObjToEdit.id, editedFood)
      .then(response => {
        foodList.fridgify()
      })
    })

    // We passed in the id of the article so we know exactly where to append the edit form.
    let foodItemArticle = document.querySelector(`#${articleId}`)

    // Because we want to replace what is currently in the article element with the edit form, we clear out all children HTML elements in our targeted element before appending our edit form to it.
    while (foodItemArticle.firstChild) {
      foodItemArticle.removeChild(foodItemArticle.firstChild);
    }
    foodItemArticle.appendChild(foodNameField)
    foodItemArticle.appendChild(foodExpirationField)
    foodItemArticle.appendChild(foodTypeField)
    foodItemArticle.appendChild(updateButton)
  }
}
export default foodEditForm

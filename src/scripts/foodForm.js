import foodCollection from "./foodCollection"

const foodForm = {

  // This module will build a form and append it to the DOM. The form will contain input fields for a user to add a new food to their refrigerator and a button with an event listener that will listen for the click
  createAndAppendForm () {
    // 1. Build HTML form
    let formHeader = document.createElement("h3")
    formHeader.textContent = "Add something to your refrigerator"

    let foodNameField = document.createElement("fieldset")

    let foodNameLabel = document.createElement("label")
    foodNameLabel.textContent = "Name"
    foodNameLabel.setAttribute("for", "food__name")
    let foodNameInput = document.createElement("input")
    foodNameInput.setAttribute("id", "food__name")
    foodNameInput.setAttribute("name", "food__name")

    foodNameField.appendChild(foodNameLabel)
    foodNameField.appendChild(foodNameInput)

    let foodExpirationField = document.createElement("fieldset")

    let foodExpirationLabel = document.createElement("label")
    foodExpirationLabel.textContent = "Expiration"
    foodExpirationLabel.setAttribute("for", "food__expiration")
    let foodExpirationInput = document.createElement("input")
    foodExpirationInput.setAttribute("id", "food__expiration")
    foodExpirationInput.setAttribute("name", "food__expiration")

    foodExpirationField.appendChild(foodExpirationLabel)
    foodExpirationField.appendChild(foodExpirationInput)

    let foodTypeField = document.createElement("fieldset")

    let foodTypeLabel = document.createElement("label")
    foodTypeLabel.textContent = "Type"
    foodTypeLabel.setAttribute("for", "food__type")
    let foodTypeInput = document.createElement("input")
    foodTypeInput.setAttribute("id", "food__type")
    foodTypeInput.setAttribute("name", "food__type")

    foodTypeField.appendChild(foodTypeLabel)
    foodTypeField.appendChild(foodTypeInput)

    let submitButton = document.createElement("button")
    submitButton.textContent = "Add Food"
    submitButton.setAttribute("class", "food__save")

    // 2. Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewFood)

    // 3. Append the HTML form to the DOM
    //Notice that I have added an article element to my index.html with the class "form".
    let foodFormFragment = document.createDocumentFragment()
    foodFormFragment.appendChild(formHeader)
    foodFormFragment.appendChild(foodNameField)
    foodFormFragment.appendChild(foodExpirationField)
    foodFormFragment.appendChild(foodTypeField)
    foodFormFragment.appendChild(submitButton)

    let formArticle = document.querySelector(".form")
    formArticle.appendChild(foodFormFragment)

  },
  // This module will also contain the function that executes when the button in the form is clicked. When the button in the form is clicked, the following will happen:
  handleAddNewFood (event) {
    // 1. Get user input that user entered
    let inputFoodName = document.querySelector("#food__name").value
    let inputFoodExpiration = document.querySelector("#food__expiration").value
    let inputFoodType = document.querySelector("#food__type").value

    // 2. Create a new object with the same structure we have been using throughout the application to represent a food item:
    // {
      //   name: "user input name",
      //   expiration: "user input expiration",
      //   type: "user input type"
    // }

    let newFood = {
      name: inputFoodName,
      expiration: inputFoodExpiration,
      type: inputFoodType
    }

    // 3. Call the method(postNewFood) with the fetch request to POST to the API and pass it the object we created in the previous step

    // Notice the import statement at the top of the module so I can call a method in the foodCollection module.
    foodCollection.postNewFood(newFood)
  }
}

export default foodForm

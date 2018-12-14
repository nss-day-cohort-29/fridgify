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

    foodArticle.appendChild(foodName)
    foodArticle.appendChild(foodExp)
    foodArticle.appendChild(foodType)

    return foodArticle
  }
}

export default food

//Given a single food object, this component builds out the HTML that will be appended to the DOM

const food = {
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

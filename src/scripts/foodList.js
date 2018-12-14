// This component will get the data, build the HTML from the data and append it to the DOM.

// To get the data, we will use the foodCollection component.
import foodCollection from "./foodCollection"
import food from "./food"

const foodList = {
  fridgify(){
    foodCollection.getAllFoods()
    .then(allFoods => {
      let foodDocFragment = document.createDocumentFragment();
      allFoods.forEach(foodItem => {
        let foodHtml = food.foodBuilder(foodItem)
        foodDocFragment.appendChild(foodHtml)
      })
      
      let outputArticle = document.querySelector(".output")
      outputArticle.appendChild(foodDocFragment)

    })
  }
}

export default foodList

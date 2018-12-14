import foodCollection from "./foodCollection";


const foodList = {
  fridgify(){
    foodCollection.getAllFoods()
    .then(allFoods => {
      console.log(allFoods)
    })
  }
}

export default foodList

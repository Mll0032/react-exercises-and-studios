import recipedata from './recipe.json'

function RecipeImage() {
  return (
    <div>
    <img src={recipedata[0].recipeImage} className="recipeImage" />
    </div>
  )
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 
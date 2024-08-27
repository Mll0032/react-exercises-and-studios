import { useState } from 'react';
// The recipe’s title: Sushi Bake Onigiri (Rice Balls)
// A short description of the recipe The onigiri filling used in this recipe is a simplified take on sushi bake. Small portions of sushi bake are baked and used as the onigiri filling.
//The filling does not require baking, however I wouldn’t be able to call it a sushi bake if I didn’t! The filling can be added to the onigiri without cooking and will be just as delicious.
// Five ingredients used in the recipe: imitation crab, shrimp, cream chees, rice, nori seaweed
// A link to a photo from the recipe: https://i0.wp.com/mariellamahal.com/wp-content/uploads/2023/03/featured-image_1.2.3.jpg?resize=1024%2C1536&ssl=1
// A link to a photo of the recipe’s author: https://i0.wp.com/mariellamahal.com/wp-content/uploads/2022/06/DSC01168-scaled.jpeg?resize=1229%2C1536&ssl=1
// The author’s name: Mariella Mahal
// A link to the author’s website: https://mariellamahal.com/sushi-bake-onigiri-rice-balls/

const RecipeAuthor = () => {
   let authorLink = "https://mariellamahal.com/sushi-bake-onigiri-rice-balls/";
   let authorPhoto = "https://i0.wp.com/mariellamahal.com/wp-content/uploads/2022/06/DSC01168-scaled.jpeg?resize=1229%2C1536&ssl=1";
   let authorName = "Mariella Mahal";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["imitation crab", "shrimp", "cream cheese", "rice", "nori seaweed"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://i0.wp.com/mariellamahal.com/wp-content/uploads/2023/03/featured-image_1.2.3.jpg?resize=1024%2C1536&ssl=1" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}


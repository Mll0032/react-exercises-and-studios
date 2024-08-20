import React from "react";
import styles from './Ingredients.module.css';

function RecipeIngredients() {
   let ingredients = [
    "Imitation Crab",
    "Shrimp",
    "Cream Cheese",
    "Nori",
    "Japanese Mayo"
];
    return (
        <div className = {styles.ingredientList}>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
  );
}

export default RecipeIngredients;
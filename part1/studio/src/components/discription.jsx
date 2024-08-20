import React from 'react'
import styles from './description.module.css'

function RecipeAuthor() {
    let authorLink = "https://mariellamahal.com/sushi-bake-onigiri-rice-balls/";
    let authorPhoto = "https://i0.wp.com/mariellamahal.com/wp-content/uploads/2022/06/DSC01168-scaled.jpeg?resize=1229%2C1536&ssl=1";
    let authorName = "Mariella Mahal" ;
    return (
        <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Blog Photo" className={styles.imageUpdates} />
        <div>
           <h3>{authorName}</h3>
           <a href={authorLink}>Eat, Cook, and Learn with me!</a> 
        </div>
     </div>
  );
}

class RecipeDescription extends React.Component {
    render() {
    return (
        <div> 
            <div>
                <h1>Sushi Bake Onigiri (Rice Balls)</h1>
                <p>Rice balls filled with creamy imitation crab and shrimp</p>
            </div>
            <RecipeAuthor />
        </div>
        )
    }
}
export default RecipeDescription;
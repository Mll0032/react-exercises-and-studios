import styles from './styling.css';
import recipedata from './recipe.json';

function AuthorInfo() {
  const author = recipedata[0].author;

const authorImage = recipedata.map((recipe, index) => recipe.author === author) ?.authorImage;
return (
  <div className={styles.authorInfo}>
    <h3>Author: {author}</h3>
    {authorImage && <img src={authorImage} alt={author} className={styles.authorImage} />}
  </div>
);
}
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 
import styles from './Recipe.module.scss';
import { useState } from 'react';

function Recipe({ image, title }) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  }

  return (
    <div className={styles.recipe}  onClick={ handleClick }>
      <div className={styles.imageContainer}>
        <img src={ image } alt="recipe" />
      </div>
      <div className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}>
        <h3 className='mb-10'>{ title }</h3>
        <i className={`fas fa-heart ${liked ? "text-primary" : ""}`}></i>
      </div>
    </div>
  );
};

export default Recipe;
import styles from './Content.module.scss';
import Recipe from './Recipe';
import { data } from '../data/recipe';

function Content() {
  const recipes = data;

  return (
    <div className="flex-fill container p-20">
      <h1 className={`${styles.title} my-30`}>Découvrez nos nouvelles recettes</h1>
      <div className={`${styles.contentCard} card p-20`}>
        <div className={styles.grid}>
        {
          recipes.map(recipe => (
            <Recipe 
              key={recipe._id}
              image={recipe.image}
              title={recipe.title}
            />
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default Content;

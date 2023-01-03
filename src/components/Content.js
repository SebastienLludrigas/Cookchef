import { useState } from 'react';
import styles from './Content.module.scss';
import Recipe from './Recipe';
import { data } from '../data/recipe';

function Content() {
  const recipes = data;
  const [filter, setFilter] = useState('');

  const handleInput = (evt) => {
    console.log(evt.target.value)
    const filter = evt.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div className="flex-fill container p-20">
      <h1 className={`${styles.title} my-30`}>Découvrez nos nouvelles recettes</h1>
      <div className={`${styles.contentCard} d-flex flex-column card p-20`}>
      <div className={`flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}>
        <i className='fa solid fa-magnifying-glass mr-15'></i>
        <input className='flex-fill' type="text" placeholder='Rechercher' onInput={ handleInput }/>
      </div>
        <div className={styles.grid}>
        {
          recipes.filter(r => r.title.toLowerCase().startsWith(filter)).map(recipe => (
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

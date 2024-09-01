import React, { useEffect, useState } from 'react'
import styles from './search.module.css';
const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "79548d0ea1c7497f8fcb368999334168"

function Search({foodData, setFoodData}) {

    const [query, setQuery] = useState("pizza");
    useEffect(()=>{
        async function fectchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results);
            await setFoodData(data.results);
        }
        fectchFood();
    },[query]);
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input} value={query} onChange={(e)=>{setQuery(e.target.value)}} type="text" />
    </div>
  )
}

export default Search

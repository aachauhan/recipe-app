import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () =>{
  
  const APP_ID = "fcd4b1ad";
  const APP_KEY = "a534b7df1578d47de545ef00c738db69";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('banana');
  
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    // setSearch('');
  }

  return(
    <div className="App">
      {/* Search form that runs get search */}
      <form onSubmit={getSearch} className="search-form">
        <input className="search-box" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Recipe Search</button>
      </form>
      {/* Recipe module lives in following div */}
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label} // this key can be improved to something more random (generator)
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            linktorecipe={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import style from './recipe.module.css';

//Get the recipe module from 

const Recipe = ({title, calories, image, ingredients, linktorecipe}) =>{
    
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories.toFixed(2)}</p>
            <a className={style.link} href={linktorecipe} target="_blank">Full Recipe</a>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;
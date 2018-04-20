import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type = {igKey} />
    })
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);
  if(transformedIngredients.length === 0)
  {
    transformedIngredients = <div>Please Add Some Ingredients</div>;
  }
  console.log(transformedIngredients);
  
  return(
      <div className = {classes.Burger}>
    <BurgerIngredient type = "bread-top" />
    {transformedIngredients}
    <BurgerIngredient type = "bread-bottom" />
    <div className = {classes.price}>Total : {props.total ? props.total.toFixed(2) : null}</div>
  </div>
);
}
export default burger;

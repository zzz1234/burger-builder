import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
                            .map(igKey => {
                              return <li key = {igKey}>
                                <span style = {{textTransform: 'captalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                              </li>
                            });

  return (
    <Aux>
      <h3>Your Delicious Burger is Ready!!!</h3>
      <p>Your Bill : </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Price : {props.price.toFixed(2)}</strong></p>
      <p>Do you wish to Continue</p>
      <Button type = "Success" clicked = {props.clicked}> Continue</Button>
      <Button type = "Danger" clicked = {props.clicked}> Cancel</Button>
    </Aux>
  );
}

export default orderSummary;

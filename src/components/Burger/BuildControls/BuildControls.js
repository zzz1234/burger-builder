import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'}
];

const buildControls = (props) => (
  <div className = {classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label= {ctrl.label}
      add={() => props.ingredientAdded(ctrl.type)}
      remove = {() => props.ingredientRemoved(ctrl.type)}/>
    ))
  }
  <div className = {classes.OrderButton} onClick = {props.summary}>Order Now!!</div>
  </div>
);

export default buildControls;

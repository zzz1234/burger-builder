import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


  const priceIngredients = {
    cheese : 0.7,
    salad : 0.5,
    bacon : 0.6,
    meat : 1.4
  };


class BurgerBuilder extends Component {

  state = {
    ingredients : {
      cheese : 0,
      salad : 0,
      bacon : 0,
      meat : 0
    },
    price : 20,
    modal : false
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const upgradedIngredients = {
      ...this.state.ingredients
    };
    upgradedIngredients[type] = updatedCount;
    const cost = this.state.price;
    const updatedCost = {
      ...priceIngredients
    };
    const newCost = cost + updatedCost[type];
    this.setState({
      price : newCost,
      ingredients: upgradedIngredients
    })
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    let updatedCount = 0;
    if(oldCount !== 0)
    {
      updatedCount = oldCount - 1;
      const upgradedIngredients = {
        ...this.state.ingredients
      };
      upgradedIngredients[type] = updatedCount;
      const cost = this.state.price;
      const updatedCost = priceIngredients;
      const newCost = cost - updatedCost[type];
      this.setState({
        price : newCost,
        ingredients: upgradedIngredients
      })
    }
  }

  showModalHandler = () => {
    this.setState({
      modal : true
    })
  }

  removeModalHandler = () => {
    this.setState({
      modal : false
    })
  }

  render(){

    return(
      <Aux>
      <Modal status = {this.state.modal} click = {this.removeModalHandler}>
        <OrderSummary ingredients = {this.state.ingredients} clicked = {this.removeModalHandler} price = {this.state.price}/>
      </Modal>
        <Burger ingredients = {this.state.ingredients} total = {this.state.price}/>
        <div><BuildControls ingredientAdded = {this.addIngredientHandler} ingredientRemoved = {this.removeIngredientHandler} summary={this.showModalHandler}/></div>
      </Aux>
    );
  }
}

export default BurgerBuilder;

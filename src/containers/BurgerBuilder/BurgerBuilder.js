import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';

  const priceIngredients = {
    cheese : 0.7,
    salad : 0.5,
    bacon : 0.6,
    meat : 1.4
  };


class BurgerBuilder extends Component {

  state = {
    ingredients : null,
    price : 20,
    modal : false,
    loading : false
  }

  componentDidMount () {
    axios.get('https://burger-builder-20255.firebaseio.com/ingredients.json')
         .then( response => {
           this.setState({
             ingredients : response.data
           })
         })
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

  purchaseContinueHandler = () => {
    this.setState({
      loading : true
    })
    const order = {
      ingredients : this.state.ingredients,
      price : this.state.price.toFixed(2),
      customer : {
        name : 'Ujjwal',
        address : {
          street : '15 Yemen Road',
          country : 'Yemen',
          Zipcode : '163134'
        },
        email : 'ujjwalsharma04@gmail.com'
      },
      deliveryMethod : 'Fastest'
    }
    axios.post('/orders.json',order)
    .then(this.setState({
      loading : false
    }))
    .catch(this.setState({
      loading : false
    }));

    this.setState({
      modal : false
    })
  }

  render(){
    let summary = <Spinner />;
    if(this.state.ingredients)
    {
      summary = <OrderSummary ingredients = {this.state.ingredients} clicked = {this.removeModalHandler} price = {this.state.price}
                  ordercontinue = {this.purchaseContinueHandler}/>
    }
    if(this.state.loading){
      summary = <Spinner />;
    }

    let burger = <Spinner />;

    if(this.state.ingredients){
      burger = (
        <Aux>
        <Burger ingredients = {this.state.ingredients} total = {this.state.price}/>
      <div>
      <BuildControls ingredientAdded = {this.addIngredientHandler}
                     ingredientRemoved = {this.removeIngredientHandler}
                     summary={this.showModalHandler}/>
      </div>
      </Aux>
    );
    }

    return(
      <Aux>
      <Modal status = {this.state.modal} click = {this.removeModalHandler}>
      {summary}
      </Modal>
        {burger}
      </Aux>
    );
  }
}

export default BurgerBuilder;

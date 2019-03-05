import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'

class App extends Component {
  
  state = {
    foods: foods,
    todaysFood: [],
    value: 1,
    totalCalories: 0
  }

  showFood = () => {
    let list = this.state.foods.map((food,i) => {
      return <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={food.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{food.name}</strong> <br />
                      <small>{food.calories} cal</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        onChange={()=>{this.changeQty(food)}}
                        className="input"
                        type="number" 
                        value={food.quantity}
                      />
                    </div>
                    <div className="control">
                      <button onClick={()=>{this.addFood(food)}} className="button is-info">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
    })
    return list;
  }

  todaysFood = () => {
    let list = this.state.todaysFood.map((food, i) => {
      return <li>{food.quantity} {food.name} = {Number(food.calories)*Number(food.quantity)} cal</li>
    })
    return list;
  }

  addFood = (food) => {
    let updatedTodaysFood = [...this.state.todaysFood]
    updatedTodaysFood.push(food)
    this.setState ({
      todaysFood: updatedTodaysFood,
      totalCalories: this.state.totalCalories + (Number(food.calories)*Number(food.quantity))
    })
  }

  changeQty = (food) => {
    let updatedTodaysFood = [...this.state.todaysFood]
    food.quantity += 1
    this.setState ({
      todaysFood: updatedTodaysFood
    })
  }
  
  render() {
    return (
      <div className="App">
        <div class="allFoods">
          {this.showFood()}
        </div>
        <div class="todaysFood">
          <h2>Today's Food</h2>
          <ul>{this.todaysFood()}</ul>
          <p>Total: {this.state.totalCalories} cal</p>
        </div>
      </div>
    );
  }
}

export default App;

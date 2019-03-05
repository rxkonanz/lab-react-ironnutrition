import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'

class App extends Component {
  
  state = {
    foods: foods,
    todaysFood: []
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
                        className="input"
                        type="number" 
                        value="1"
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
      return <li>{food.name}</li>
    })
    return list;
  }

  addFood = (food) => {
    let updatedTodaysFood = [...this.state.todaysFood]
    updatedTodaysFood.push(food)
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
          <ul>{this.todaysFood()}</ul>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Forms from './components/forms';
import UserRecipe from './components/recipeblocks/userRecipe';
import './App.css';
import Header from './components/headeritems/header';
import PopRecipe from './components/recipeblocks/popRecipe';
import HealthyRecipe from './components/recipeblocks/healthyRecipe';
import DessertDay from './components/recipeblocks/dessertDay';
import HeaderNav from './components/headeritems/headerNav';

class App extends Component {

state= {
  users: []
}

// addToUsers= users => {
//   let NewUsers=[...this.state.users, users];
//   this.setState({
//     users: newUsers
//   })
// }








  render() {
    return (
      <div className="container">

        <Header
          header={this.header}
        />
        <HeaderNav
          navBar={this.headerNav} />
        Recipes of the day:
        <div className="recipes">
          <div className="col-md-6">
          <div className="row">
            <PopRecipe
              recipe={this.recipe} />
            <UserRecipe
              recipe={this.recipe} />
          </div>
          <div className="row">
            <HealthyRecipe
              recipe={this.recipe} />
            <DessertDay 
              recipe={this.recipe} />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

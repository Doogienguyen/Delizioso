import React, { Component } from 'react';
import LogIn from './components/logIn';
import UserRecipe from './components/recipeblocks/userRecipe';
import './App.css';
import Header from './components/headeritems/header';
import PopRecipe from './components/recipeblocks/popRecipe';
import HealthyRecipe from './components/recipeblocks/healthyRecipe';
import DessertDay from './components/recipeblocks/dessertDay';
import HeaderNav from './components/headeritems/headerNav';
import UserProfile from './components/userProfile';
import HomePage from './components/homePage'
import RecipePage from './components/recipes/limeShrimp'

class App extends Component {

state= {
  users: [],
}

  render() {
    return (
      <div className="container-fluid">
        <RecipePage />
        {/* <Header
          header={this.header}
        />
        <HeaderNav
          navBar={this.headerNav} />
        
        <div className="col-md-6">
      
        <div className="recipes">
        <p>Recipes of the day:</p>
       
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
        </div> */}
      </div>
    );
  }
}

export default App;

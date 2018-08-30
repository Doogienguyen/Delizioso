import React, { Component } from 'react';
import logIn from './components/logIn';
import './App.css';
import Header from './components/headeritems/header';
import HeaderNav from './components/headeritems/headerNav';
import userProfile from './components/userProfile';
import HomePage from './components/homePage';

import UserProfile from './components/userProfile';
import {HOME,USERPROFILE} from './constants';

import LimeShrimp from './components/recipes/limeShrimp';
import PestoPasta from './components/recipes/pestoPasta';
import Lasagna from './components/recipes/lasagna'
import ChickenParm from './components/recipes/chickenParm'

// const HOME = 'HOME';
// const USERPROFILE ="USERPROFILE";
// const LOGIN = "LOGIN";

class App extends Component {

  state = {
    users: [{ 
      userName: 'Tram', 
      password: 'food' 
    }],
    path: HOME,
    goodLogIn: false
    
  }

  

  login = user => {
    for (let i = 0; i < this.state.users.length; i++) {
      if (user.username === this.state.users[i].username && user.password === this.state.users[i].password) {
        this.setState({ goodLogin: true });
      } else {
        this.setState({ goodLogin: false });
      }
    }
  }
  changePath = x => {
    this.setState({ path: x })
  }

  renderPath = path => {
    switch (path) {
      case HOME:
        return (
        <HomePage
          changePath={this.changePath}
          login ={this.login}
          username={this.state.userName}
          password={this.state.password}
          />
      
      )
      case USERPROFILE: 
        return (
          <UserProfile
            changePath={this.changePath}
            username={this.state.userName}
            goodLogin={this.state.goodLogin}/>
        )
        
    }
  }



  render() {
    return (
      <div className="container-fluid">

      <LimeShrimp/>
      <PestoPasta/>
      <Lasagna/>
      <ChickenParm/>
      
      <Header/>
         
        <HeaderNav
        changePath={this.changePath}
          navBar={this.headerNav}
          isLoggedIn={this.state.isLoggedIn}
          userName={this.state.userName}
          password={this.state.password}
          onUserName={this.onUserNameChange}
          onPassword={this.onPasswordChange}
          login={this.login}
        />
        
          {this.renderPath(this.state.path)} 
        
        <div className="col-md-6">
          <div className="recipes">
            <p>Recipes of the day:</p>
            <div className="row">


              {/* <PopRecipe
                recipe={this.recipe} />
              <UserRecipe
                recipe={this.recipe} />
            </div>
            <div className="row">
              <HealthyRecipe
                recipe={this.recipe} />
              <DessertDay
                recipe={this.recipe} /> */}
            </div>
          </div>
        </div> 


      </div>
    );
  }
  
}
export default App;

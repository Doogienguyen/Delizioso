import React, { Component } from 'react';
import logIn from './components/logIn';
import './App.css';
import Header from './components/headeritems/header';
import HeaderNav from './components/headeritems/headerNav';
import userProfile from './components/userProfile';
import HomePage from './components/homePage';
import UserProfile from './components/userProfile';
import {HOME,USERPROFILE, LIMESHRIMP, CHICKENPARM, PESTOPASTA, LASAGNA} from './constants';
import LimeShrimp from './components/recipes/limeShrimp';
import PestoPasta from './components/recipes/pestoPasta';
import Lasagna from './components/recipes/lasagna';
import ChickenParm from './components/recipes/chickenParm';
import Tiramisu from './components/recipes/tiramisu';
import SpaghettiClam from './components/recipes/spaghettiClam';
import Risotto from './components/recipes/risotto';
import LemonChicken from './components/recipes/lemonChicken';
import ProsciuttoPizza from './components/recipes/prosciuttoPizza';
import SpinachRavioli from './components/recipes/spinachRavioli';
import Cannolis from './components/recipes/cannolis';
import Data from './data';
import Allrecipes from './components/allRecipes';
import LemonGelato from './components/recipes/lemonGelato'

// const HOME = 'HOME';
// const USERPROFILE ="USERPROFILE";
// const LOGIN = "LOGIN";

class App extends Component {

  state = {
    recipes: Data,
    users: { 
      userName: 'Tram', 
      password: 'food' 
    },
    path: HOME,
    goodLogIn: false
  }

 resultRecipe = result => {
   this.setState({
     path: (result.recipeName)
   })
  }
  login = user => {
      if (user.username === this.state.users.username && user.password === this.state.users.password) {
        this.setState({ goodLogIn: true });
        this.changePath(USERPROFILE);
      } else {
        // this.setState({ goodLogIn: false });
        alert("Username/Password does not match. Please try again");
      
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
            userName={this.state.users.userName}
            goodLogIn={this.state.goodLogIn}/>
        )
        case LIMESHRIMP: 
        return (
          <LimeShrimp
            changePath={this.changePath}
            userName={this.state.users.userName}
            />
        )
        case CHICKENPARM: 
        return (
          <ChickenParm
            changePath={this.changePath}
            />
          
        )
        case PESTOPASTA: 
        return (
          <PestoPasta
            changePath={this.changePath}
            />
        )
        case LASAGNA: 
        return (
          <Lasagna
            changePath={this.changePath}
            />
        )
    }
  }



  render() {
    return (
      <div className="container-fluid">

      {/* <Allrecipes/>
      <LemonGelato/>
      <Cannolis/>
      <SpinachRavioli/>
      <ProsciuttoPizza/>
      <LemonChicken/>
      <Risotto/>
      <SpaghettiClam/>
      <Tiramisu/>
      <LimeShrimp/>
      <PestoPasta/>
      <Lasagna/>
      <ChickenParm/> */}
      
      <Header/>
         
        <HeaderNav
        recipes={this.state.recipes}
          changePath={this.changePath}
          navBar={this.headerNav}
          goodLogIn={this.state.goodLogIn}
          userName={this.state.users.userName}
          password={this.state.password}
          onUserName={this.onUserNameChange}
          onPassword={this.onPasswordChange}
          login={this.login}
          onTermChange={this.handleTermChange}
        />
      {/* <Allrecipes/>
      <LemonGelato/>
      <Cannolis/>
      <SpinachRavioli/>
      <ProsciuttoPizza/>
      <LemonChicken/>
      <Risotto/>
      <SpaghettiClam/>
      <Tiramisu/>
      <LimeShrimp/>
      <PestoPasta/>
      <Lasagna/>
      <ChickenParm/> */}
          {this.renderPath(this.state.path)} 
        
        


      </div>
    );
  }
  
}
export default App;

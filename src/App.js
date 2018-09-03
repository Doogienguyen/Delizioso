import React, { Component } from 'react';
import './App.css';
import Header from './components/headeritems/header';
import HeaderNav from './components/headeritems/headerNav';
import userProfile from './components/userProfile';
import HomePage from './components/homePage';
import UserProfile from './components/userProfile';
import { HOME, USERPROFILE, CANNOLIS, CHICKENPARM, LASAGNA, LEMONCHICKEN, LIMESHRIMP, PESTOPASTA, PROSCIUTTOPIZZA, RISOTTO, SPAGHETTICLAM, SPINACHRAVIOLI, TIRAMISU, SUBMITRECIP} from './constants';
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
import SubmitRecip from './components/submitRecip'
import UsersSubmit from './components/usersSubmit'
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
      userName: 'T',
      password: 'food'
    },
    path: HOME,
    goodLogIn: false,
    favorites: [],
    usersSubmit: []
  }

  addToFavorite = recipe => {

    let newFavorites = [...this.state.favorites, recipe];
    this.setState({ favorites: newFavorites })
    console.log(this.state.favorites);
  }

  addToUsersSubmit= usersSubmit => {
  let newUsersSubmit = [...this.state.usersSubmit,usersSubmit];
  this.setState({
    usersSubmit: newUsersSubmit
  })

}
  deleteRecipe = recipe => {
    let newUsersSubmit = [
      ...this.state.usersSubmit.slice(0, recipe),
      ...this.state.usersSubmit.slice(recipe + 1)
    ];
    this.setState({ usersSubmit: newUsersSubmit });
  }

  resultRecipe = result => {
    console.log("from App.js");
    console.log(result)
    console.log(result.recipeName);

    this.setState({
      path: result.recipeName
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
            addToFavorite={this.addToFavorite}
            login={this.login}
            username={this.state.userName}
            password={this.state.password}
            changePath={this.changePath}
          />

        )
      case USERPROFILE:
        return (
          <div>
          <UserProfile
            recipe={this.state.recipes}
            deleteRecipe={this.deleteRecipe}
            favorites={this.state.favorites}
            changePath={this.changePath}
            userName={this.state.users.userName}
            goodLogIn={this.state.goodLogIn}
            usersSubmit={this.state.usersSubmit}
            
          />
          {/* <UsersSubmit 
          deleteRecipe={this.deleteRecipe}/> */}
          </div>
        )
        case SUBMITRECIP:
        return(
          <SubmitRecip
            deleteRecipe={this.deleteRecipe}
            usersSubmit={this.usersSubmit}
            changePath={this.changePath}
            addToUsersSubmit={this.addToUsersSubmit}
            usersSubmit={this.state.usersSubmit}
          />
          
        )   
      case CANNOLIS:
        return(
          <Cannolis
            changePath={this.changePath}
            addToFavorite={this.addToFavorite}
          />
        )
        case CHICKENPARM:
        return (
          <ChickenParm
            changePath={this.changePath}
            addToFavorite={this.addToFavorite}
          />

        )
        case LASAGNA:
        return (
          <Lasagna
            changePath={this.changePath}
            addToFavorite={this.addToFavorite}
          />
        )
        case LEMONCHICKEN:
        return(
          <LemonChicken
            changePath={this.changePath}
            addToFavorite={this.addToFavorite}
          />
        )
      case LIMESHRIMP:
        return (
          <LimeShrimp
            changePath={this.changePath}
            addToFavorite={this.addToFavorite}
          />
        )
      
      case PESTOPASTA:
        return (
          <PestoPasta
            changePath={this.changePath}
            addToFavorite={this.addToFavorite}
          />
        )
        case PROSCIUTTOPIZZA:
        return(
          <Cannolis
            changePath={this.changePath}
            addToFavorite={this.addToFavorite}
          />
        )
        case RISOTTO:
        return(
          <Risotto
            changePath={this.changePath}
            addToFavorite={this.addToFavorite}
          />
        )
        case SPAGHETTICLAM:
        return(
          <SpaghettiClam
            changePath={this.changePath}
            addToFavorite={this.addToFavorite}
          />
        )
        case SPINACHRAVIOLI:
        return (
          <SpinachRavioli
            changePath={this.changePath}
            addToFavorite={this.addToFavorite}
          />
        )
        case TIRAMISU:
        return (
          <Tiramisu
            changePath={this.changePath}
            addToFavorite={this.addToFavorite}
          />
        )
        

    }
  }
  render() {
    return (
      <div className="container">
        <Header />

      {/* // <div className="container-fluid">

      
      // <Header/> */}
         
        <HeaderNav
          resultRecipe={this.resultRecipe}
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

        {this.renderPath(this.state.path)}

      
      {/* // <UserProfile/>

      // <Allrecipes/> */}
      {/* <LemonGelato/>
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

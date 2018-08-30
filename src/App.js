import React, { Component } from 'react';
import logIn from './components/logIn';
import UserRecipe from './components/recipeblocks/userRecipe';
import './App.css';
import Header from './components/headeritems/header';
import PopRecipe from './components/recipeblocks/popRecipe';
import HealthyRecipe from './components/recipeblocks/healthyRecipe';
import DessertDay from './components/recipeblocks/dessertDay';
import HeaderNav from './components/headeritems/headerNav';
import userProfile from './components/userProfile';
import LogIn from './components/logIn';

const HOME = 'HOME';
// const USERPROFILE ="USERPROFILE";

class App extends Component {

  state = {
    users: [{ 
      userName: 'Tram', 
      password: 'food' 
    }],
    path: HOME,
    isLoggedIn: false
    
  }

  // logIn = user => {
  //   this.setState({
  //     isLoggedIn: this.logInCheck(user)
  //   })
  // }

  logIn = user => {
    for (let i = 0; i < this.state.users.length; i++) {
      if (user.username === this.state.user.username && user.password === this.state.user.password) {
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
        <HOME
          login ={this.login}/>
      
      )
      // case USERPROFILE: 
      //   return (
      //     <USERPROFILE />
      //   )
    }
  }



  render() {
    return (
      <div className="container-fluid">
      {/* <Home 
        login= {this.props.login} /> */}
        {/* // <Header
        //   header={this.header}
        // />
        // <HeaderNav
        //   navBar={this.headerNav}
        //   isLoggedIn={this.state.isLoggedIn}
        // /> */}
      {this.renderPath(this.state.path)}
        {/* // <LogIn
        //   login={this.logIn}
        //   change={this.changePage}
        // />
        // <div className="col-md-6">
        //   <div className="recipes">
        //     <p>Recipes of the day:</p>
        //     <div className="row">

        //       <PopRecipe
        //         recipe={this.recipe} />
        //       <UserRecipe
        //         recipe={this.recipe} />
        //     </div>
        //     <div className="row">
        //       <HealthyRecipe
        //         recipe={this.recipe} />
        //       <DessertDay
        //         recipe={this.recipe} />
        //     </div>
        //   </div>
        // </div> */}
      </div>
    );
  }
  
}
export default App;

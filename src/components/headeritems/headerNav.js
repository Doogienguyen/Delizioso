import React, { Component } from 'react';
import { HOME, USERPROFILE, PESTOPASTA } from '../../constants';
class HeaderNav extends Component {
    state = {
        userName: "",
        password: "",
        recipeInput: ""
        
    }
   
    onUserNameChange = e => {
        this.setState({
            userName: e.target.value
        })
    }
    onPasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }
    buttonClicked = e => {
        e.preventDefault();
        this.props.login(this.state);
        // this.props.changePath(USERPROFILE);
        this.setState({
            userName: "",
            password: "",

        });
    }
    onSearch = e => {
        this.setState({
            recipeInput: e.target.value
        })
    }
    
  searchRecipe = e => {
      e.preventDefault();
    console.log(this.state.recipeInput);
    let item = this.props.recipes.filter(r => r.recipeName == this.state.recipeInput );
    let items = this.props.recipes.filter(r => r.keywords.indexOf(this.state.recipeInput) != -1);
    
    var result = item.length > 0 ? item : items

    // var result = [...item, ...items];
    console.log(result);
    this.setState({
        recipeInput: ""
    })
  }

    render() {
        return (
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            Login <span className="caret"></span>
                        </button>
                        
                        <ul className="dropdown-menu">

                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.userName} onChange={this.onUserNameChange} placeholder="User Name" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" value={this.state.password} onChange={this.onPasswordChange} placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-warning" onClick={this.buttonClicked} >Sign in</button>
                            </div>

                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">New around here? Sign up</a>
                            <a className="dropdown-item" href="#">Forgot password?</a>
                        </ul>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            
                            <li className="nav-item active">
                            <button className="btn btn-link">{ this.props.goodLogIn && <p>Hello, {this.props.userName}</p>}</button>
                                  
                            </li>
                            <li className="nav-item">
                            <button className="btn btn-link" onClick={() => { this.props.changePath(HOME)}} >Home</button>
                            </li>
                            <li className="nav-item">
                            <button className="btn btn-link" >Submit a Recipe</button>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Browse Recipes
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                     <a className="dropdown-item" href="#">All Recipes</a>
                                    <a className="dropdown-item" onClick={() => { this.props.changePath(PESTOPASTA)}} >Low Calorie</a>
                                    <a className="dropdown-item" href="#">Vegetarian</a>
                                    <a className="dropdown-item" href="#">Pastas</a>
                                    <a className="dropdown-item" href="#">Chicken</a>
                                    <a className="dropdown-item" href="#">Desserts</a>
                                    
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"  value={this.state.recipeInput} onChange={this.onSearch}/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.searchRecipe}>Search</button>
                        </form>
                    </div>
                </nav>
                
            </div>
            
        )
    }










}

export default HeaderNav;
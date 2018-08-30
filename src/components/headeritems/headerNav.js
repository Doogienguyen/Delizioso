import React, { Component } from 'react';

class HeaderNav extends Component {
    render() {
<<<<<<< HEAD
        return(
            <navbar>
                <nav>
                    
                    <navItem className="btn btn-link" eventKey={1} href="#">
                        Home
                    </navItem>
                    <navItem  className= "btn btn-link" eventKey={2} href="#">
                        Browse recipes
                    </navItem>
                    <navItem>
                        <input type="text" placeholder="search a recipe"/>
                    </navItem>
                    <navItem>

                        <div className="btn-group float-right">
                            <button type="button" className="btn btn-info dropdown-toggle " data-toggle="dropdown" >
                                Log In <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="inputEmail1" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-default" >Sign in</button>
                                    </div>
                                </form>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">New around here? Sign up</a>
                                <a class="dropdown-item" href="#">Forgot password?</a>
                            </ul>
                        </div>

                 </navItem>      
=======
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">


                    <div class="dropdown-menu">
                        <form class="px-4 py-3">
                            <div class="form-group">
                                <label for="exampleDropdownFormEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                            </div>
                            <div class="form-group">
                                <label for="exampleDropdownFormPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                                <label class="form-check-label" for="dropdownCheck">
                                    Remember me
      </label>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">New around here? Sign up</a>
                        <a class="dropdown-item" href="#">Forgot password?</a>
                    </div>



                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sumbit a Recipe</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Browse Recipes
                            </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Low Calorie</a>
                                    <a class="dropdown-item" href="#">Vegetarian</a>
                                    <a class="dropdown-item" href="#">Pastas</a>
                                    <a class="dropdown-item" href="#">Chicken</a>
                                    <a class="dropdown-item" href="#">Desserts</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
>>>>>>> f98841998d3d7bf6a10cad85a233996a6a6e37bb
                </nav>
            </div>
        )
    }










}

export default HeaderNav;
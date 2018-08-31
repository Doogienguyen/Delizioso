import React, { Component } from 'react';
class LemonChicken extends Component {

    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1 ><img src="./components/logo2.png" /></h1>
                </div>

                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                Login <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">

                                <div className="form-group">
                                    <input type="email" className="form-control" id="inputEmail1" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-default" onClick={() => console.log('click')} >Sign in</button>
                                </div>

                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">New around here? Sign up</a>
                                <a className="dropdown-item" href="#">Forgot password?</a>
                            </ul>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sumbit a Recipe</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Browse Recipes
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Low Calorie</a>
                                        <a className="dropdown-item" href="#">Vegetarian</a>
                                        <a className="dropdown-item" href="#">Pastas</a>
                                        <a className="dropdown-item" href="#">Chicken</a>
                                        <a className="dropdown-item" href="#">Desserts</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col" >
                        <h2 class="ingredients-header">Lemon Chicken Pasta<button type="button" class="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Favorite </button></h2>

                        <div>
                        We love lemon, we love chicken and we love pasta so I had to make this tasty Lemon Chicken Pasta. Full of grilled chicken breasts, a lemon garlic cream sauce and asparagus this is a hearty meal that you won’t be able to stop enjoying. 
                    </div>
                        <h3 class="ingredients-header">Ingredients<button type="button" class="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Healthier Alternatives </button></h3>
                        <ul>
                            <li>2 large boneless skinless chicken breasts</li>
                            <li>1 16 oz pkg fettuccine</li>
                            <li>1 lb asparagus tips only cut about 2 inches from top</li>
                            <li>1 stick unsalted butter</li>
                            <li>6 cloves garlic minced</li>
                            <li>2 cups heavy cream</li>
                            <li>1/4 cup lemon juice</li>
                            <li>Zest of 1 large lemon</li>
                            <li>1 cup parmesan cheese</li>
                            <li>Salt and pepper to taste</li>
                            <li>Parsley</li>
                        </ul>

                        <div>
                            <h3 class="ingredients-header">Directions</h3>
                            <ol>
                                <li>Grill your chicken breasts until they reach 165 degrees.</li>
                                <li>Meanwhile make pasta according to package directions, when there is only a few minutes left of cook time add in your asparagus, drain.</li>
                                <li>To make your sauce in large pan melt butter.</li>
                                <li>Add your garlic and cook for about 30 seconds or until fragrant.</li>
                                <li>Add in your heavy cream and bring to a slow boil.</li>
                                <li>Stir in your lemon juice and zest then add in parmesan until melted, sprinkle with some salt and pepper to taste.</li>
                                <li>Add in pasta and asparagus and toss to coat.</li>
                                <li>Top with sliced chicken breasts.</li>
                                <li>Sprinkle with parsley and top with sliced lemons if desired.</li>
                            </ol>
                        </div>

                    </div>
                    <div className="col" id="ingredients-box">

                        <img className="recipe-picture" src="https://tornadoughalli.com/wp-content/uploads/2018/02/Lemon-Chicken-Pasta-2.jpg"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default LemonChicken;
import React, { Component } from 'react';
class ProsciuttoPizza extends Component {

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
                        <h2 class="ingredients-header">Prosciutto and Arugala Pizza<button type="button" class="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Favorite </button></h2>

                        <div>
                        This supersimple dish is packed with garlic and a judicious amount of crushed red pepper topped off with clams for you to enjoy</div>
                        <h3 class="ingredients-header">Ingredients</h3>
                        <ul>
                            <li>1 batch Thin Crust Pizza Dough</li>
                            <li>1 cup (8 fl. oz./250 ml) San Marzano Tomato Pizza Sauce</li>
                            <li>2 cups (8 oz./250 g) shredded mozzarella cheese</li>
                            <li>2 cups (2 oz./60 g) baby arugula</li>
                            <li>Extra-virgin olive oil, to taste </li>
                            <li>Lemon juice, to taste</li>
                            <li>Kosher salt and freshly ground pepper, to taste</li>
                            <li>3 oz. (90 g) prosciutto, very thinly sliced</li>
                        </ul>

                        <div>
                            <h3 class="ingredients-header">Directions</h3>
                            <ol>
                                <li>Preheat a Breville pizza maker on the preheat setting for 30 minutes.</li>
                                <li>On a lightly floured surface, roll out half of the dough into a 10-inch (25-cm) round. Prick the dough all over with the tines of a fork. Transfer the dough to a floured pizza peel. Spread half of the pizza sauce over the dough, leaving a 1/2-inch (12-mm) border uncovered. Top with half of the cheese.</li>
                                <li>Transfer the pizza to the pizza maker. Bake on the classic setting according to the manufacturer’s instructions until the crust is crisp and the cheese is lightly browned, 10 to 11 minutes. Using the pizza peel, transfer the pizza to a cutting board.</li>
                                <li>In a bowl, toss half of the arugula with olive oil, lemon juice and salt and pepper to taste. Drape the pizza with half of the sliced prosciutto and top with the dressed arugula. Slice and serve immediately.</li>
                                <li>Preheat the pizza maker again and prepare the second pizza with the remaining ingredients as above. Makes two 10-inch (25-cm) pizzas.</li>
                            </ol>
                        </div>

                    </div>

                    <div className="col" id="ingredients-box">

                        <img className="recipe-picture" src="https://www.williams-sonoma.com/wsimgs/ab/images/dp/recipe/201803/0057/img39l.jpg"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default ProsciuttoPizza;
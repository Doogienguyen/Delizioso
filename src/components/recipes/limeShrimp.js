import React, { Component } from 'react';
class LimeShrimp extends Component {

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
                    <div>
                        This cilantro lime shrimp with zucchini noodles is simply drool worthy. Lime and cilantro combo makes for a full-flavored dish that tastes like restaurant quality, while only taking minutes to prepare! A perfect low-carb option when you’re looking for a quick healthy dinner that’s packed with flavor.                    </div>
                        <h2 class="ingredients-header">Ingredients</h2>
                        <ul>
                            <li>1 lb (450g) shrimp, shelled and deveined</li>
                            <li>2 + 1 tablespoons olive oil</li>
                            <li>4 cloves garlic, minced</li>
                            <li>1 pinch red pepper flakes (optional)</li>
                            <li>1/4 cup vegetable broth</li>
                            <li>1 teaspoon honey</li>
                            <li>Juice of 1 1/2 lime</li>
                            <li>3 medium zucchini, spiralized or cut into noodles</li>
                            <li>Salt and fresh cracked pepper to taste</li>
                            <li>1 teaspoon lime zest</li>
                            <li>2 tablespoons cilantro, chopped</li>
                        </ul>

                        <div>
                        <h2 class="ingredients-header">Directions</h2>
                        <ol>
                            <li>In a bowl, combine 2 tablespoons olive oil, garlic, red pepper flakes, 1 tablespoon cilantro, honey, lime juice and lime zest. Add uncooked shrimp and toss to mix well. Marinate for 15 to 20 minutes.</li>
                            <li>Heat 1 tablespoon olive oil in a pan over medium-high heat, add the drained shrimp, cook for 2 minutes, flip, and add the marinade. Cook for 1 more minute and set the shrimp aside.</li>
                            <li>In the same skillet add vegetable broth to deglaze and simmer for 2 minutes. Add the zucchini noodles and cook until just tender, about 2 minutes. Add the shrimp and adjust seasoning. Toss everything and serve immediately topped with additional cilantro, enjoy!</li>
                        </ol>
                        </div>

                    </div>
                    
                    <div className="col" id="ingredients-box">
                    
                        <img className="recipe-picture" src="https://www.eatwell101.com/wp-content/uploads/2017/05/Cilantro-Lime-Shrimp-with-Zucchini-Noodles-recipe.jpg"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default LimeShrimp;
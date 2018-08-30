import React, { Component } from 'react';
class PestoPasta extends Component {

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
                            Pesto and pasta is perfectly delicious served plain with a bit of parmesan cheese and a sprinkling of extra roasted pine nuts if you have them.
                    </div>
                        <h2 class="ingredients-header">Ingredients</h2>
                        <ul>
                            <li>1 pound bucatini spaghetti or other favorite noodle</li>
                            <li>1 garlic cloves</li>
                            <li>1/2 cup toasted pine nuts</li>
                            <li>2 cups fresh basil leaves washed and stemmed and finely packed</li>
                            <li>1/2 cup olive oil</li>
                            <li>1/2 cup fresh grated Parmesan cheese plus more for garnish</li>
                            <li>1/2 lemon juiced</li>
                            <li>1/2 teaspoon kosher salt</li>
                            <li>fresh ground black pepper</li>
                            <li>Cherry tomatoes</li>
                        </ul>

                        <div>
                            <h2 class="ingredients-header">Directions</h2>
                            <ol>
                                <li>Cook the spaghetti or other pasta in large pot of salted boiling water according to package directions or until al dente. Drain the pasta and reserve 1 cup of the cooking water.</li>
                                <li>While pasta is cooking, add the roughly chopped garlic, toasted pine nuts and finely grated parmesan cheese to a food processor and process until smooth. Then, add in the basil. Pulse a few times until chopped then let it run as you drizzle the olive oil into the processor as it runs until emulsified. Season with kosher salt and freshly ground black pepper, give a squeeze of lemon juice, and whiz again until combined. Taste for seasoning and adjust to your liking.</li>
                                <li>Toss the hot pasta with the pesto in a large bowl and add reserved cooking water ¼ cup at a time or until saucy. Top with the cherry tomatoes and season with more salt and pepper if desired and garnish with more parmesan cheese.</li>
                            </ol>
                        </div>

                    </div>
                    <div className="col" id="ingredients-box">

                        <img className="recipe-picture" src="https://www.foodiecrush.com/wp-content/uploads/2017/09/Pesto-Pasta-Recipe-foodiecrush.com-002.jpg"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default PestoPasta;
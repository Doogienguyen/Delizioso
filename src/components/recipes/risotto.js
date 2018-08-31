import React, { Component } from 'react';
class Risotto extends Component {

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
                        <h2 class="ingredients-header">Mushroom Risotto<button type="button" class="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Favorite </button></h2>

                        <div>
                            Rich, creamy mushroom risotto with risotto rice, brandy, Parmesan and mushrooms.
                        </div>
                        <h3 class="ingredients-header">Ingredients</h3>
                        <ul>
                            <li>2 Tbsp butter</li>
                            <li>2 cups flavorful mushrooms such as shiitake, chanterelle, or oyster mushrooms, cleaned, trimmed, and cut into half inch to inch pieces</li>
                            <li>2/3 cup brandy, vermouth, or dry white wine</li>
                            <li>5-6 cups chicken stock* (use vegetable stock for vegetarian option)</li>
                            <li>1/3 cup of peeled and minced shallots (OR 1/3 cup of yellow or white onion, finely chopped)</li>
                            <li>1 3/4 cups arborio rice or other risotto rice</li>
                            <li>1/3 cup freshly grated Parmesan cheese</li>
                            <li>Salt and freshly ground black pepper</li>
                            <li>2 Tbsp chopped fresh parsley or chives</li>
                        </ul>

                        <div>
                            <h3 class="ingredients-header">Directions</h3>
                            <ol>
                                <li>Bring stock to a simmer in a saucepan.</li>
                                <li>Sauté the mushrooms: Melt the butter in a wide saucepan over medium-high heat. Add mushrooms and shallots and sauté about 5 minutes (if using chanterelles, dry sauté first for a minute or two and let the mushrooms cook in their own juices before adding the butter).</li>
                                <li>Add rice and brandy: Add the rice and stir to combine. Add brandy, bring to a boil, and reduce liquid by half, about 3-4 minutes.</li>
                                <li>Add simmering stock, 1/2 cup at a time, stirring enough to keep the rice from sticking to the edges of the pan. Stir the rice almost constantly — stirring sloughs off the starch from the rice, making the creamy sauce you're looking for in a risotto.</li>
                                <li>Stir in the Parmesan cheese and season to taste with salt and pepper. Garnish with chopped fresh parsley or chives.</li>
                            </ol>
                        </div>

                    </div>

                    <div className="col" id="ingredients-box">

                        <img className="recipe-picture" src="https://www.simplyrecipes.com/wp-content/uploads/2011/04/mushroom-risotto-horiz-a-1800.jpg"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default Risotto;
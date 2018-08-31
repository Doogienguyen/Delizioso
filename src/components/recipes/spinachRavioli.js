import React, { Component } from 'react';
class SpinachRavioli extends Component {

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
                        <h2 class="ingredients-header">Spinach Ravioli with Zucchini Ribbons<button type="button" class="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Favorite </button></h2>

                        <div>
                            For this light vegetarian ravioli recipe, we combine gorgeous long ribbons of zucchini with spinach-and-cheese-stuffed ravioli and a light cream sauce for a satisfying vegetarian pasta dinner.
    
    
                    </div>
                        <h3 class="ingredients-header">Ingredients<button type="button" class="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Healthier Alternatives </button></h3>
                        <ul>
                            <li>2 medium zucchini, very thinly sliced lengthwise</li>
                            <li>Loose Yellow Zucchini (Yellow Squash) 1 Lb</li>
                            <li>1 pound fresh or frozen spinach-and-cheese ravioli</li>
                            <li>Organic Baby Spinach 5 Oz</li>
                            <li>2 cloves garlic, crushed</li>
                            <li>½ teaspoon salt</li>
                            <li>½ cup half-and-half</li>
                            <li>2 teaspoons all-purpose flour</li>
                            <li>1 tablespoon butter</li>
                            <li>1 large shallot, minced</li>
                            <li>¼ cup dry white wine</li>
                            <li>¼ cup thinly sliced fresh basil</li>
                            <li>¼ teaspoon freshly ground pepper</li>
                            <li>¼ cup shredded Parmesan cheese</li>
                        </ul>

                        <div>
                            <h3 class="ingredients-header">Directions</h3>
                            <ol>
                                <li>Put a pot of water on to boil. Place sliced zucchini in a large colander and set it in the sink. Cook ravioli according to package directions. Pour the ravioli and cooking liquid over the zucchini in the colander.</li>
                                <li>Meanwhile, mash garlic and salt together in a small bowl with a fork to form a coarse paste. Combine half-and-half and flour in another small bowl and place near the stove.</li>
                                <li>Heat butter in a large skillet over medium-high heat. Add shallot and the garlic paste and cook, stirring, until fragrant, about 1 minute. Add wine and cook, stirring, until almost completely evaporated, 2 to 3 minutes more. Add the flour mixture and cook, stirring, until the sauce is thickened, about 30 seconds. Gently stir in the ravioli and zucchini, basil and pepper. Divide among 4 plates. Top each portion with 1 tablespoon Parmesan.</li>
                                <li>To make “ribbon-thin” zucchini, slice lengthwise with a vegetable peeler or a mandoline slicer.</li>
                            </ol>
                        </div>

                    </div>
                    <div className="col" id="ingredients-box">

                        <img className="recipe-picture" src="http://images.media-allrecipes.com/userphotos/960x960/3758232.jpg"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default SpinachRavioli;
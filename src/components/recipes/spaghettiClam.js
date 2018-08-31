import React, { Component } from 'react';
class SpaghettiClam extends Component {

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
                        <h2 class="ingredients-header">Spaghetti with Clams and Garlic<button type="button" class="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Favorite </button></h2>

                        <div>
                        This supersimple dish is packed with garlic and a judicious amount of crushed red pepper topped off with clams for you to enjoy</div>
                        <h3 class="ingredients-header">Ingredients</h3>
                        <ul>
                            <li>1 pound spaghetti</li>
                            <li>Salt</li>
                            <li>1/4 cup extra-virgin olive oil</li>
                            <li>4 garlic cloves, minced</li>
                            <li>1/2 teaspoon crushed red pepper</li>
                            <li>2 dozen littleneck clams, scrubbed</li>
                            <li>1/4 cup water</li>
                            <li>1/4 cup finely chopped parsley</li>
                            <li>Freshly ground black pepper</li>
                        </ul>

                        <div>
                            <h3 class="ingredients-header">Directions</h3>
                            <ol>
                                <li>In a large pot of boiling salted water, cook the spaghetti until just al dente, then drain the pasta well.</li>
                                <li>Meanwhile, in a large, deep skillet, heat the olive oil. Add the minced garlic and crushed red pepper and cook over moderately high heat, stirring occasionally, until the garlic is lightly browned, about 1 1/2 minutes. Add the clams and water, cover and simmer until the clams open and are just cooked through, 5 to 8 minutes. Discard any clams that don't open.</li>
                                <li>Add the spaghetti and the chopped parsley to the clams in the skillet and season with pepper. Toss over moderately high heat just until the spaghetti absorbs some of the juices, about 1 minute. Transfer the spaghetti and clams to shallow bowls and serve right away.</li>
                            </ol>
                        </div>

                    </div>

                    <div className="col" id="ingredients-box">

                        <img className="recipe-picture" src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201002-xl-spaghetti-clams-garlic.jpg%3Fitok%3DJ9rhLMhA&w=1600&q=70"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default SpaghettiClam;
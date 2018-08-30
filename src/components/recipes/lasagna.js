import React, { Component } from 'react';
class Lasagna extends Component {

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
                        One of the most loved foods in the world is finally here! This is a traditional Italian Lasagna, made the Italian way with layers of slow cooked Bolognese ragu and cheese sauce. No ricotta – that’s the American-Italian version. Though patience is required.</div>
                        <h2 class="ingredients-header">Ingredients</h2>
                        <ul>
                            <h6>Ragu Bolognese</h6>
                            <li>1 tbsp olive oil</li>
                            <li>1 onion , finely chopped (white, yellow or brown)</li>
                            <li>1 medium carrot , finely diced</li>
                            <li>2 garlic cloves , minced</li>
                            <li>1 kg / 2 lb beef mince (ground beef)</li>
                            <li>800 g / 28 oz crushed tomato</li>
                            <li>3 tbsp / 1/4 cup tomato paste</li>
                            <li>1 cup red wine , bold not light</li>
                            <li>3 beef bouillon cubes , crumbled</li>
                            <li>2 bay leaves , dried or fresh</li>
                            <li>1/2 tsp each dried thyme and oregano</li>
                            <li>2 tsp Worcestershire Sauce</li>
                            <li>1 - 2 tsp sugar </li>
                            <li>1/2 tsp salt and black pepper</li>
                            <br />
                            <h6>Cheese Sauce</h6>
                            <li>60 g / 4 tbsp butter</li>
                            <li>1/2 cup/ 75g flour</li>
                            <li>1 litre / 1 quart / 4 cups milk</li>
                            <li>220g/ 2 cups shredded cheese (Colby, Gruyere, Cheddar, Monterey Jack, OR 1 cup shredded parmesan)</li>
                            <li>Pinch of freshly ground nutmeg</li>
                            <br />
                            <h6>Lasagna</h6>
                            <li>350 g/ 12 oz fresh lasagna sheets (or 250g/8oz dried)</li>
                            <li>1 1/2 cups / 150g shredded mozzarella cheese</li>
                            <li>Finely chopped basil or parsley , for garnish (optional)</li>
                        </ul>

                        <div>
                            <h2 class="ingredients-header">Directions</h2>
                            <ol>
                                <h6>Ragu</h6>
                                <li>Heat oil in a large heavy based pot over medium heat. Add garlic, onion, celery and carrots. Cook for 10 minutes until softened and sweet - they should not brown (if they do, turn heat down).</li>
                                <li>Add beef, turn heat up and cook the beef, breaking it up as you go.</li>
                                <li>Once the beef has all turned brown, add the remaining Ragu ingredients EXCEPT the sugar.</li>
                                <li>Stir then adjust the heat so it is bubbling very gently. Place the lid on and cook for 1.5 - 2 hours, stirring every now and then, then remove the lid and simmer for 30 minutes.</li>
                                <li>The ragu is ready when the meat is really tender and the sauce has thickened and is rich.</li>
                            </ol>
                            <ol>
                                <h6>Cheese Sauce</h6>
                                <li>Warm milk up in a saucepan (optional - just makes sauce thicken faster).</li>
                                <li>In a large saucepan, melt butter over medium low heat. Add flour and mix constantly for 1 minute.</li>
                                <li>Pour about 1 cup of the milk in, mixing as you go to incorporate into the flour mixture. Once mostly lump free, add remaining milk. Use a whisk if needed to make it lump free.</li>
                                <li>Turn heat up to medium high. Stir occasionally at first then regularly after a few minutes until sauce thickens - about 5 - 8 minutes. It should coat the back of the wooden spoon.</li>
                                <li>Remove from heat, add cheese, nutmeg, salt and pepper. Mix until the cheese is melted. The Sauce should be thick but still easily pourable - the consistency of heavy cream (you need to be able to drizzle it over the Ragu when layering - see video). If it's too thick, add a splash of water or milk.</li>
                            </ol>
                            <ol>
                                <h6>Assemble</h6>
                                <li>Preheat oven to 180C/350F.</li>
                                <li>Use a 33 x 22 x 7 cm / 13 x 9 x 2.5" baking dish.</li>
                                <li>Smear a bit of Ragu on the base, then cover with lasagna sheets. Tear sheets to fit.</li>
                                <li>Spread over 2 1/2 cups of Ragu (enough to cover sheets), then drizzle over 1 cup of Cheese Sauce.</li>
                                <li>Top with lasagna sheets. Spread with another 2 1/2 cups of Ragu, then 1 cup of Cheese Sauce. Top with lasagna sheets then repeat 1 more time.</li>
                                <li>Top with a 4th layer of lasagna sheets, then pour over the remaining Cheese Sauce.</li>
                                <li>Sprinkle with Mozzarella, then bake for 25 minutes or until golden and bubbling.</li>
                                <li>Stand for 5 to 10 minutes before cutting and serving, garnished with basil or parsley if desired.</li>

                                </ol>
                        </div>

                    </div>
                    <div className="col" id="ingredients-box">

                        <img className="recipe-picture" src="https://www.recipetineats.com/wp-content/uploads/2017/05/Lasagne-recipe-3-main.jpg"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default Lasagna;
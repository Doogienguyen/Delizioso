import React, { Component } from 'react';
class Tiramisu extends Component {

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
                        <h2 class="ingredients-header">Tiramisu<button type="button" class="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Favorite </button></h2>

                        <div>
                        Done correctly, a classic tiramisù can be transcendent. A creamy dessert of espresso-soaked ladyfingers surrounded by lightly sweetened whipped cream and a rich mascarpone, tiramisù relies heavily on the quality of its ingredients.</div>
                        <h3 class="ingredients-header">Ingredients<button type="button" class="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Healthier Alternatives </button></h3>
                        <ul>
                            <h6>Cream</h6>
                            <li>4  large egg yolks</li>
                            <li>½  cup/100 grams granulated sugar, divided</li>
                            <li>¾  cup heavy cream</li>
                            <li>1  cup/227 grams mascarpone (8 ounces)</li>
                        </ul> 
                        <ul>
                            <h6> Assembly</h6>
                            <li>1 ¾  cups good espresso or very strong coffee</li>
                            <li>2  tablespoons rum or cognac</li>
                            <li>2 tablespoons unsweetened cocoa powder</li>
                            <li> About 24 ladyfingers (from one 7-ounce/200-gram package)</li>
                            <li>1 to 2  ounces bittersweet chocolate, for shaving (optional)</li>
                        </ul>
                       

                        <div>
                            <h3 class="ingredients-header">Directions</h3>
                            <ol>
                                <li>Using an electric mixer in a medium bowl, whip together egg yolks and 1/4 cup/50 grams sugar until very pale yellow and about tripled in volume. A slight ribbon should fall from the beaters (or whisk attachment) when lifted from the bowl. Transfer mixture to a large bowl, wiping out the medium bowl used to whip the yolks and set aside.</li>
                                <li>In the medium bowl, whip cream and remaining 1/4 cup/50 grams sugar until it creates soft-medium peaks. Add mascarpone and continue to whip until it creates a soft, spreadable mixture with medium peaks. Gently fold the mascarpone mixture into the sweetened egg yolks until combined.</li>
                                <li>Combine espresso and rum in a shallow bowl and set aside.</li>
                                <li>Using a sifter, dust the bottom of a 2-quart baking dish (an 8x8-inch dish, or a 9-inch round cake pan would also work here) with 1 tablespoon cocoa powder.</li>
                                <li>Working one at a time, quickly dip each ladyfinger into the espresso mixture -- they are quite porous and will fall apart if left in the liquid too long -- and place them rounded side up at the bottom of the baking dish. Repeat, using half the ladyfingers, until you’ve got an even layer, breaking the ladyfingers in half as needed to fill in any obvious gaps (a little space in between is O.K.). Spread half the mascarpone mixture onto the ladyfingers in one even layer. Repeat with remaining espresso-dipped ladyfingers and mascarpone mixture.</li>
                                <li>Dust top layer with remaining tablespoon of cocoa powder. Top with shaved or finely grated chocolate, if desired.</li>
                                <li>Cover with plastic wrap and let chill in the refrigerator for at least 4 hours (if you can wait 24 hours, all the better) before slicing or scooping to serve.</li>
                            </ol>
                        </div>

                    </div>

                    <div className="col" id="ingredients-box">

                        <img className="recipe-picture" src="http://images.honestcooking.com/wp-content/uploads/2016/12/2401039199_3509e6ec5c_o1-635x501.jpg"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default Tiramisu;
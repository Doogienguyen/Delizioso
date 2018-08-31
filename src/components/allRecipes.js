import React, { Component } from 'react';

class AllRecipes extends Component {
    render() {
        return (

                // <div class="container">

                // <div className="header">
                //     <h1 ><img src="./components/logo2.png" /></h1>
                // </div>

                // <div>
                //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
                //         <div className="btn-group">
                //             <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                //                 Login 
                //             </button>
                //             <ul className="dropdown-menu">

                //                 <div className="form-group">
                //                     <input type="email" className="form-control" id="inputEmail1" placeholder="Email" />
                //                 </div>
                //                 <div className="form-group">
                //                     <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                //                 </div>
                //                 <div className="form-group">
                //                     <button type="submit" className="btn btn-default" onClick={() => console.log('click')} >Sign in</button>
                //                 </div>

                //                 <div className="dropdown-divider"></div>
                //                 <a className="dropdown-item" href="#">New around here? Sign up</a>
                //                 <a className="dropdown-item" href="#">Forgot password?</a>
                //             </ul>
                //         </div>

                //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                //             <ul className="navbar-nav mr-auto">
                //                 <li className="nav-item active">
                //                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                //                 </li>
                //                 <li className="nav-item">
                //                     <a className="nav-link" href="#">Sumbit a Recipe</a>
                //                 </li>
                //                 <li className="nav-item dropdown">
                //                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                //                         Browse Recipes
                //                     </a>
                //                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                //                         <a className="dropdown-item" href="#">All Recipes</a>
                //                         <a className="dropdown-item" href="#">Low Calorie</a>
                //                         <a className="dropdown-item" href="#">Vegetarian</a>
                //                         <a className="dropdown-item" href="#">Pastas</a>
                //                         <a className="dropdown-item" href="#">Chicken</a>
                //                         <a className="dropdown-item" href="#">Desserts</a>                                        
                //                     </div>
                //                 </li>
                //             </ul>
                //         </div>
                //         <form className="form-inline my-2 my-lg-0">
                //             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                //             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                //         </form>
                //     </nav>
                // </div>

                    <div class="row">
                        <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1 class="gallery-title">All Recipes</h1>
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="https://www.eatwell101.com/wp-content/uploads/2017/05/Cilantro-Lime-Shrimp-with-Zucchini-Noodles-recipe.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="http://images.media-allrecipes.com/userphotos/960x960/3758232.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="https://tornadoughalli.com/wp-content/uploads/2018/02/Lemon-Chicken-Pasta-2.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="https://www.foodiecrush.com/wp-content/uploads/2017/09/Pesto-Pasta-Recipe-foodiecrush.com-002.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="http://alidaskitchen.com/wp-content/uploads/2012/06/IMG_2475-002-PM-001.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201002-xl-spaghetti-clams-garlic.jpg%3Fitok%3DJ9rhLMhA&w=1600&q=70" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="https://www.recipetineats.com/wp-content/uploads/2017/05/Lasagne-recipe-3-main.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="https://www.williams-sonoma.com/wsimgs/ab/images/dp/recipe/201803/0057/img39l.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="https://www.simplyrecipes.com/wp-content/uploads/2011/04/mushroom-risotto-horiz-a-1800.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="http://images.honestcooking.com/wp-content/uploads/2016/12/2401039199_3509e6ec5c_o1-635x501.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="https://bakerbynature.com/wp-content/uploads/2016/11/untitled-67-of-101.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <img src="https://www.tasteofhome.com/wp-content/uploads/2018/02/EXPS_35621_TH1195008D7_RMS-1-696x696.jpg" class="img-responsive" />
                        </div>
                    </div>
                // </div>





        )
    }
}

export default AllRecipes; 
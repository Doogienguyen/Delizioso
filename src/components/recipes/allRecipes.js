import React, { Component } from 'react';


class AllRecipes extends Component {
    render() {
        return (

                <div class="container">
                
                
                    <div class="row">
                        <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1 class="gallery-title">All Recipes</h1>
                            <div className="jump-to">Jump to: <a href="#healthy" className="space">Healthy</a><a href="#pastas" className="space">Pastas</a><a href="#hearty" className="space">Hearty</a><a href="#desserts" className="space">Desserts</a></div>


                        </div>
                        <h3>Healthy: Low Carbs, full flavor</h3>
                        <div id="healthy" className="row"><a name="healthy"></a>
                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">Cilantro Lime Shrimp </h4>
                            <img src="https://www.eatwell101.com/wp-content/uploads/2017/05/Cilantro-Lime-Shrimp-with-Zucchini-Noodles-recipe.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">Spinach Ravioli</h4>
                            <img src="http://images.media-allrecipes.com/userphotos/960x960/3758232.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">Mushroom Risotto</h4>
                            <img src="https://www.simplyrecipes.com/wp-content/uploads/2011/04/mushroom-risotto-horiz-a-1800.jpg" class="img-responsive" />
                        </div>
                        </div>

                        <h3>Pastas </h3>
                        <div id="pastas" className="row"><a name="pastas"></a>
                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">Pesto Pasta</h4>
                            <img src="https://www.foodiecrush.com/wp-content/uploads/2017/09/Pesto-Pasta-Recipe-foodiecrush.com-002.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">Lemon Chicken Pasta</h4>
                            <img src="https://tornadoughalli.com/wp-content/uploads/2018/02/Lemon-Chicken-Pasta-2.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">Spaghetti with Clam</h4>
                            <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201002-xl-spaghetti-clams-garlic.jpg%3Fitok%3DJ9rhLMhA&w=1600&q=70" class="img-responsive" />
                        </div></div>

                        <h3>Hearty and Original</h3>
                        <div id="hearty" className="row"><a name="hearty"></a>
                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">Lasagna</h4>
                            <img src="https://www.recipetineats.com/wp-content/uploads/2017/05/Lasagne-recipe-3-main.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">Proscuitto Pizza</h4>
                            <img src="https://www.williams-sonoma.com/wsimgs/ab/images/dp/recipe/201803/0057/img39l.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">Chicken Parmesan</h4>
                            <img src="http://alidaskitchen.com/wp-content/uploads/2012/06/IMG_2475-002-PM-001.jpg" class="img-responsive" />
                        </div>
                        </div>

                        <h3>Classic Italian Desserts</h3>
                        <div id="dessert" className="row"><a name="desserts" />
                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">Tiramisu</h4>
                            <img src="http://images.honestcooking.com/wp-content/uploads/2016/12/2401039199_3509e6ec5c_o1-635x501.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">5-Ingredient Cannolis</h4>
                            <img src="https://bakerbynature.com/wp-content/uploads/2016/11/untitled-67-of-101.jpg" class="img-responsive" />
                        </div>

                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h4 class="ingredients-header">Lemon Gelato</h4>
                            <img src="https://www.tasteofhome.com/wp-content/uploads/2018/02/EXPS_35621_TH1195008D7_RMS-1-696x696.jpg" class="img-responsive" />
                        </div>
                        </div>
                    </div>
                 </div>





        )
    }
}

export default AllRecipes; 
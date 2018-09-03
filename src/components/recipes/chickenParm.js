import React, { Component } from 'react';
class ChickenParm extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col" >
                    <h2 class="ingredients-header">Chicken Parmesan<button type="button" className="btn btn-outline-success btn-sm" data-toggle="button" aria-pressed="false" autocomplete="off">
                           Favorite</button></h2>

                    <div>
                    Chicken parmigiana, or chicken parmesan, is a popular Italian-American dish. It consists of a breaded chicken breast topped with tomato sauce and mozzarella, parmesan or provolone cheese. </div>
                        <h3 className="ingredients-header">Ingredients <button type="button" className="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Healthier Alternatives </button></h3>
                        <ul>
                            <li>1 lb. boneless skinless chicken breasts</li>
                            <li>8 oz. fresh mozzarella</li>
                            <li>kosher salt</li>
                            <li>Freshly ground black pepper</li>
                            <li>1 c. flour</li>
                            <li>3 Eggs, beaten</li>
                            <li>1 c. panko bread crumbs</li>
                            <li>1 tsp. dried oregano</li>
                            <li>1/2 tsp. garlic powder</li>
                            <li>1/2 c. freshly grated Parmesan, divided</li>
                            <li>Olive oil, for frying</li>
                            <li>2 c. marinara</li>
                            <li>1/4 c. Thinly sliced basil</li>
                            <li>2 tbsp. chopped parsley</li>
                        </ul>

                        <div>
                        <h3 className="ingredients-header">Directions</h3>
                        <ol>
                            <li>Preheat oven to 425°. Using a sharp paring knife, cut a deep slit into each chicken breast. Stuff pockets with mozzarella then press edges of the chicken together to seal the chicken. Season outside of chicken with salt and pepper.</li>
                            <li>Put the flour, eggs and panko bread crumbs into three separate shallow bowls. Into the panko bread crumbs, whisk in garlic powder, dried oregano, ¼ cup Parmesan and ½ teaspoon salt.</li>
                            <li>Dip the stuffed chicken in flour, shaking off excess, then dip the chicken into egg, tossing to coat. Dredge chicken in bread crumbs, making sure the chicken is evenly coated.</li>
                            <li>In a large skillet over medium heat, heat a thin layer of olive oil. Add chicken to skillet and cook until golden on both sides, about 4 minutes per side. Pour marinara around chicken and scatter basil on top of marinara. Turn off heat then sprinkle remaining Parmesan on top of chicken.</li>
                            <li>Transfer skillet to oven and bake until the chicken is cooked through, about 20 minutes more. Garnish with parsley and serve warm.
</li>
                        </ol>
                        </div>

                    </div>
                    <div className="col" id="ingredients-box">
                    
                        <img className="recipe-picture" src="http://alidaskitchen.com/wp-content/uploads/2012/06/IMG_2475-002-PM-001.jpg"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default ChickenParm;
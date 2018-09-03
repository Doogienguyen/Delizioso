import React, { Component } from 'react';
class LimeShrimp extends Component {
    
    
    render() {
        return (
<<<<<<< HEAD
            <div className="container">

=======
>>>>>>> e67c6261cde56abdd59d9cbcb08e890825fd7fd7
                <div className="row">
                    <div className="col" >
                        <h2 className="ingredients-header">Cilantro Lime Shrimp with Zucchini Noodles <button className="btn btn-danger btn-lg float-right" onClick={() => { this.props.addToFavorite(this.props.recipes[0]) }}><span >♥</span> </button></h2>

                        <div>
                            This cilantro lime shrimp with zucchini noodles is simply drool worthy. Lime and cilantro combo makes for a full-flavored dish that tastes like restaurant quality, while only taking minutes to prepare! A perfect low-carb option when you’re looking for a quick healthy dinner that’s packed with flavor.                    </div>
                        <h3 className="ingredients-header">Ingredients</h3>
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
                            <h3 className="ingredients-header">Directions</h3>
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
        )
    }
}


export default LimeShrimp;
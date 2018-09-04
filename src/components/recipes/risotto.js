import React, { Component } from 'react';
class Risotto extends Component {

    render() {
        return (
                <div className="row">
                    <div className="col" >
                        <h2 className="ingredients-header">Mushroom Risotto<button type="button" className="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Favorite </button></h2>

                        <div>
                            Rich, creamy mushroom risotto with risotto rice, brandy, Parmesan and mushrooms.
                        </div>
                        <h3 className="ingredients-header">Ingredients</h3>
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
                            <h3 className="ingredients-header">Directions</h3>
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

        )
    }
}


export default Risotto;
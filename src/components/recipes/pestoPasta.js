import React, { Component } from 'react';
import { HOME, USERPROFILE, LIMESHRIMP, CHICKENPARM, PESTOPASTA, LASAGNA } from '../../constants';
class PestoPasta extends Component {

    render() {
        return (
            <div className="row">
                <div className="col" >
                    <h2 className="ingredients-header">Pesto Pasta<button type="button" className="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                        Favorite </button></h2>

                    <div>
                        Pesto and pasta is perfectly delicious served plain with a bit of parmesan cheese and a sprinkling of extra roasted pine nuts if you have them.
                    </div>
                    <h3 className="ingredients-header">Ingredients<button type="button" className="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                        Healthier Alternatives </button></h3>
                    <ul>
                        <li>1 pound bucatini spaghetti or other favorite noodle</li>
                        <li>1 garlic cloves</li>
                        <li>1/2 cup toasted pine nuts</li>
                        <li>2 cups fresh basil leaves washed and stemmed and finely packed</li>
                        <li>1/2 cup olive oil</li>
                        <li>1/2 cup fresh grated Parmesan cheese plus more for garnish</li>
                        <li>1/2 lemon juiced</li>
                        <li>1/2 teaspoon kosher salt</li>
                        <li>fresh ground black pepper</li>
                        <li>Cherry tomatoes</li>
                    </ul>

                    <div>
                        <h3 className="ingredients-header">Directions</h3>
                        <ol>
                            <li>Cook the spaghetti or other pasta in large pot of salted boiling water according to package directions or until al dente. Drain the pasta and reserve 1 cup of the cooking water.</li>
                            <li>While pasta is cooking, add the roughly chopped garlic, toasted pine nuts and finely grated parmesan cheese to a food processor and process until smooth. Then, add in the basil. Pulse a few times until chopped then let it run as you drizzle the olive oil into the processor as it runs until emulsified. Season with kosher salt and freshly ground black pepper, give a squeeze of lemon juice, and whiz again until combined. Taste for seasoning and adjust to your liking.</li>
                            <li>Toss the hot pasta with the pesto in a large bowl and add reserved cooking water ¼ cup at a time or until saucy. Top with the cherry tomatoes and season with more salt and pepper if desired and garnish with more parmesan cheese.</li>
                        </ol>
                    </div>

                </div>
                <div className="col" id="ingredients-box">

                    <img className="recipe-picture" src="https://www.foodiecrush.com/wp-content/uploads/2017/09/Pesto-Pasta-Recipe-foodiecrush.com-002.jpg"></img>
                </div>

            </div>





        )
    }
}


export default PestoPasta;
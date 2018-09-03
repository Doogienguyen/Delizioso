import React, { Component } from 'react';
class ProsciuttoPizza extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col" >
                        <h2 className="ingredients-header">Prosciutto and Arugala Pizza<button type="button" className="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Favorite </button></h2>

                        <div>
                        This supersimple dish is packed with garlic and a judicious amount of crushed red pepper topped off with clams for you to enjoy</div>
                        <h3 className="ingredients-header">Ingredients</h3>
                        <ul>
                            <li>1 batch Thin Crust Pizza Dough</li>
                            <li>1 cup (8 fl. oz./250 ml) San Marzano Tomato Pizza Sauce</li>
                            <li>2 cups (8 oz./250 g) shredded mozzarella cheese</li>
                            <li>2 cups (2 oz./60 g) baby arugula</li>
                            <li>Extra-virgin olive oil, to taste </li>
                            <li>Lemon juice, to taste</li>
                            <li>Kosher salt and freshly ground pepper, to taste</li>
                            <li>3 oz. (90 g) prosciutto, very thinly sliced</li>
                        </ul>

                        <div>
                            <h3 className="ingredients-header">Directions</h3>
                            <ol>
                                <li>Preheat a Breville pizza maker on the preheat setting for 30 minutes.</li>
                                <li>On a lightly floured surface, roll out half of the dough into a 10-inch (25-cm) round. Prick the dough all over with the tines of a fork. Transfer the dough to a floured pizza peel. Spread half of the pizza sauce over the dough, leaving a 1/2-inch (12-mm) border uncovered. Top with half of the cheese.</li>
                                <li>Transfer the pizza to the pizza maker. Bake on the classic setting according to the manufacturer’s instructions until the crust is crisp and the cheese is lightly browned, 10 to 11 minutes. Using the pizza peel, transfer the pizza to a cutting board.</li>
                                <li>In a bowl, toss half of the arugula with olive oil, lemon juice and salt and pepper to taste. Drape the pizza with half of the sliced prosciutto and top with the dressed arugula. Slice and serve immediately.</li>
                                <li>Preheat the pizza maker again and prepare the second pizza with the remaining ingredients as above. Makes two 10-inch (25-cm) pizzas.</li>
                            </ol>
                        </div>

                    </div>

                    <div className="col" id="ingredients-box">

                        <img className="recipe-picture" src="https://www.williams-sonoma.com/wsimgs/ab/images/dp/recipe/201803/0057/img39l.jpg"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default ProsciuttoPizza;
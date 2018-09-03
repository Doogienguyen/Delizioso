import React, { Component } from 'react';
class SpaghettiClam extends Component {

    render() {
        return (
            <div className="container">
                
                <div className="row">
                    <div className="col" >
                        <h2 className="ingredients-header">Spaghetti with Clams and Garlic<button type="button" className="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Favorite </button></h2>

                        <div>
                        This supersimple dish is packed with garlic and a judicious amount of crushed red pepper topped off with clams for you to enjoy</div>
                        <h3 className="ingredients-header">Ingredients</h3>
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
                            <h3 className="ingredients-header">Directions</h3>
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
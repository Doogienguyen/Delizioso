import React, { Component } from 'react';
import { HOME, USERPROFILE, LIMESHRIMP, CHICKENPARM, PESTOPASTA, LASAGNA, TIRAMISU, SPINACHRAVIOLI } from '../constants';


class HomePage extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <div className="recipes">
                        <p>Recipes of the day:</p>
                        <div className="col1">
                            <div id="row1" className="row">
                                <div className="popRecipe">Popular</div>
                                <div className="userRecipe">Users Submitted</div>

                            </div>
                        </div>
                        <div id="row1" className="col1">
                            <div className="row">
                                <div className='recipedesc'> <p className="recipeheader" >Cilantro Lime Shrimp with Zucchini Noodles</p>
                                    <p>A fan favorite. This cilantro lime shrimp with zucchini noodles is simply drool worthy.... <button className="btn btn-link" onClick={() => { this.props.changePath(LIMESHRIMP) }} >click to read more</button></p></div>
                                <div className='recipedesc'> <p className="recipeheader" >Spinach Ravioli with Zucchini Ribbons</p>
                                    <p>Combine gorgeous long ribbons of zucchini with spinach-and-cheese-stuffed ravioli and a light cream sauce ... <button className="btn btn-link" onClick={() => { this.props.changePath(SPINACHRAVIOLI) }} >click to read more</button></p></div>
                            </div>
                            <div className="col1">
                                <div id="row1" className="row">
                                    <div className="healthyRecipe">Healthy</div>
                                    <div className="dessertDay">Dessert</div>
                                </div>
                            </div>

                        </div>
                        <div id="row1" className="col1">
                            <div className="row">
                                <div className='recipedesc'> <p className="recipeheader" >Pesto Pasta</p>
                                    <p>Pesto and pasta is perfectly delicious served plain with a bit of parmesan cheese... <button className="btn btn-link" onClick={() => { this.props.changePath(PESTOPASTA) }} >click to read more</button></p></div>
                                <div className='recipedesc'> <p className="recipeheader" >Tiramisu</p>
                                    <p>A creamy dessert of espresso-soaked ladyfingers surrounded by lightly sweetened whipped cream and a rich mascarpone ... <button className="btn btn-link" onClick={() => { this.props.changePath(TIRAMISU) }} >click to read more</button></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}

export default HomePage;
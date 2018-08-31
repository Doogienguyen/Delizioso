import React, { Component } from 'react';
// import {HOME, USERPROFILE} from '../constants'

class HomePage extends Component {
    render(){
        return(
            <div>
                
                    <div className="recipes">
                        <p>Recipes of the day:</p>
                        <div className="col1">
                            <div id ="row1" className="row">
                                <div className="popRecipe">Popular</div>
                                <div className="userRecipe">User Submitted</div>
                                
                            </div>
                        </div>
                        <div id="row1" className="col1">
                            <div className="row">
                                <div className="healthyRecipe"></div>
                                <div className="dessertDay"></div>

                            </div>
                        </div>
                    </div>
                
            </div>
        
        
        )
    }


}

export default HomePage;
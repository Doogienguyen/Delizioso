import React from 'react';
import { array, func } from 'prop-types';



const UsersSubmit = props => {
    return (
        <div className="col-md-6">

            {props.usersSubmit.map((account, index) => {
                return (
                    <div ic="submitted" className="container" key={index}>
                        <div className="col" >
                            <h2 className="ingredients-header">{account.recipName}
                            </h2>

                            <div>
                                {account.description}</div>

                            <h3 className="ingredients-header">Ingredients</h3>
                            <ul>
                                {account.ingredients.replace(/,/g, '').split(' ').map(x => <li key={x}>{x}</li>)}
                            </ul>

                            <div>
                                <h3 className="ingredients-header">Directions</h3>
                                {account.directions}
                            </div>
                        </div>

                        <div className="col" id="ingredients-box">
                            <img className="recipe-picture1" src={account.url}></img>
                            <button className="btn btn-danger" onClick={() => { props.deleteRecipe(index) }} >x</button>
                        </div>

                    </div>





                )
            })}










        </div>
    );

}


export default UsersSubmit;
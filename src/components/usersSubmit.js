import React from 'react';
import { array, func } from 'prop-types';



const UsersSubmit = props => {
    return (
        <div className="col-md-6">
        
        {props.usersSubmit.map((account, index) => {
            return(
                <div ic="submitted" className="container" key={index}>
                    <div className="col" >
                        <h2 class="ingredients-header">{account.recipName}
                        <button className="btn btn-danger" onClick={() => { props.deleteRecipe(index) }} >x</button></h2>

                        <div>
                            {account.description}</div>
                            
                        <h3 class="ingredients-header">Ingredients</h3>
                        {account.ingredients}

                        
                        <div>
                            <h3 className="ingredients-header">Directions</h3>
                             {account.directions}
                            
                        </div>
                        </div>

                    <div className="col" id="ingredients-box">

                        <img className="recipe-picture1" src={account.url}></img>
                    </div>

                </div>



            

            )
        })}



        





        
        </div>
    );

}


export default UsersSubmit;
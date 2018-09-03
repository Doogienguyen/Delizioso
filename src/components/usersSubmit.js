import React from 'react';
import { array, func } from 'prop-types';



const UsersSubmit = props => {
    return (
        <div className="col-md-6">
        {/* <table className="table">
            <thead>
                
            </thead>
            <tbody>
                {props.usersSubmit.map((account, index) => {
                    return (
                        <React.Fragment key={index}>
                            <tr id="first-list">
                                <td>{account.recipName} </td>
                            </tr>
                            <tr id='second-list'>
                                <td>{account.ingredients}</td>
                            </tr>
                            <tr id="third-list">
                                <td>{account.description}</td>
                                <td><button className="btn btn-danger" onClick={() => { props.deleteRecipe(index) }} >x</button></td>
                            </tr>
                            
                        </React.Fragment>
                    )
                })}
            </tbody>
        </table> */}
        {props.usersSubmit.map((account, index) => {
            return(
                <div ic="submitted" className="container" key={index}>
                    <div className="col" >
                        <h2 class="ingredients-header">{account.recipName}
                        <button className="btn btn-danger" onClick={() => { props.deleteRecipe(index) }} >x</button></h2>

                        <div>
                            {account.description}</div>
                            
                        <h3 class="ingredients-header">Ingredients</h3>
                        <ul></ul>
                        {account.ingredients}

                        
                        <div>
                            <h3 className="ingredients-header">Directions</h3>
                            <ol>
                                <li>{account.directions}</li>
                            </ol>
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
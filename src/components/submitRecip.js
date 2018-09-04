import React, { Component } from 'react';
import { array, func} from 'prop-types';
import UsersSubmit from './usersSubmit'

class SubmitRecip extends Component {
    state = {
        recipName: "",
        ingredient: "",
        description:"",
        directions: "",
        url: ""
    }

    onRecipNameChange = e => {
        this.setState({
            recipName: e.target.value
        })
    }
    onIngredientsChange = e => {
        this.setState({
            ingredients: e.target.value
        })
    }
    onDescriptionChange = e => {
        this.setState({
            description: e.target.value
        })
    }
    onDirectionsChange = e => {
        this.setState({
            directions: e.target.value
        })
    }
    onUrlChange = e => {
        this.setState({
            url: e.target.value
        })
    }
    formSubmit = e => {
        e.preventDefault();
        this.props.addToUsersSubmit(this.state);
        this.setState({
            recipName: "",
            ingredients: "",
            description: "",
            directions: "",
            url:""
        });
        console.log(this.state.ingredients);
    }

    render() {
        return (
            <div>
            
            <div className='row'>
            
            
            <div className="col-md-6">
            <form onSubmit={this.formSubmit}>
                <div className="form-group">
                    <label>Recipe Name</label>
                    <input value={this.state.recipName} value={this.state.recipName} onChange={this.onRecipNameChange} type="text" className="form-control" placeholder="ex: Nonna's lasagna..." />
                </div>
                <div className="form-group">
                    <label>Ingredients</label>
                    <textarea className="form-control" rows="5" value={this.state.ingredients} onChange={this.onIngredientsChange} type="text" placeholder="Please enter each ingredient item on a new line"></textarea>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" rows="5" value={this.state.description} onChange={this.onDescriptionChange} type="text" placeholder="Tell us about your recipe!"></textarea>
                </div>
                <div className="form-group">
                    <label>Directions</label>
                    <textarea className="form-control" rows="5" value={this.state.directions} onChange={this.onDirectionsChange} type="text" placeholder="Please number your steps."></textarea>
                </div>
                <div className="form-group">
                    <label>Upload a Picture</label>
                    <input  type="text" className="form-control" value={this.state.url} onChange={this.onUrlChange} />
                </div>

                <button type="submit" className="btn btn-primary float-right" >Buonissimo!</button>
            </form>
            </div>
            
            <UsersSubmit 
                usersSubmit={this.props.usersSubmit}
                deleteRecipe={this.props.deleteRecipe}
                ingredients={this.state.ingredients}/>
            </div>
            </div>
        );
    }

            }

export default SubmitRecip;

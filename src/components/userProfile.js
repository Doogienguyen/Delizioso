import React, {Component} from 'react';
// import {HOME, USERPROFILE } from '../constants'

class UserProfile extends Component {
    render(){
        return(
            <div>
                {
            this.props.goodLogin && <h1>hello {this.props.username}</h1>
                }
            </div>
        )
    }


}
export default UserProfile;
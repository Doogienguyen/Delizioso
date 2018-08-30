import React, {Component} from 'react';
import { HOME, USERPROFILE } from '../constants'


<<<<<<< HEAD
class Forms extends Component {
   
    
=======
class LogIn extends Component {
state={
    userName:"",
    password: ""
}
onUserNameChange = e => {
    this.setState({
        userName: e.target.value
    })
}
onPasswordChange = e => {
    this.setState({
        Password: e.target.value
    })
}
buttonClicked = e => {
    e.preventDefault();
    this.props.login(this.state)
    this.props.changePath(USERPROFILE);
    this.setState({
        userName: "",
        password: "",
        
    });
}






>>>>>>> 16b26ab70515e431af6f02d821749ead526de047
}

export default LogIn;
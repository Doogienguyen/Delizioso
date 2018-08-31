import React, {Component} from 'react';
import {HOME, USERPROFILE } from '../constants'


class UserProfile extends Component {
    render () {
        return(
    <div>
    <div className="container">
        <div className="row profile">
            <div className="col-md-3">
                <div className="profile-sidebar">
                    
                    <div className="profile-userpic">
                        <img src="http://cerveceria-harmony.com/wp-content/uploads/2017/11/Cerveceria-Harmony-cookies.jpg"  />
                    </div>
                    
                    <div className="profile-usertitle">
                        
                        <div className="profile-usertitle-name">
                        {
                                this.props.goodLogIn && <p>Hello, {this.props.userName}</p>
                                }
                        </div>
                        <div className="profile-usertitle-job">
                           Iron Chef
                        </div>
                    </div>
                    
                    <div className="profile-userbuttons">
                        <button type="button" className="btn btn-success btn-sm">Follow</button>
                        <button type="button" className="btn btn-danger btn-sm">Message</button>
                    </div>
                    {/* <!-- END SIDEBAR BUTTONS -->
                    <!-- SIDEBAR MENU --> */}
                    <div className="profile-usermenu">
                        <ul className="nav">
                            
                            <li>
                                <a href="#">
                                <i className="glyphicon glyphicon-user"></i>
                                Account Settings </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                <i className="glyphicon glyphicon-ok"></i>
                                Favorite Recipes  </a>
                            </li>
                            <li>
                                <a href="#">
                                <i className="glyphicon glyphicon-flag"></i>
                                My Recipes  </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- END MENU --> */}
                </div>
            </div>
            <div className="col-md-9">
                <div className="profile-content">
                    
                </div>
            </div>
        </div>
    </div>
    
    </div>
    
    
    
    
        )
    }
    
    
    
    }
    
    export default UserProfile;

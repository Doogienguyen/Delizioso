import React, { Component } from 'react';
import { HOME, USERPROFILE } from '../constants'
import UsersSubmit from './usersSubmit'

class UserProfile extends Component {
    render() {
            return (
                <div>
                    <div className="container">
                        <div className="row profile">
                            <div className="col-md-3">
                                <div className="profile-sidebar">
                                    <div className="profile-userpic">
                                        <img src="http://cerveceria-harmony.com/wp-content/uploads/2017/11/Cerveceria-Harmony-cookies.jpg" />
                                    </div>
                                    <div className="profile-usertitle">
                                        <div className="profile-usertitle-name">
                                            {
                                                this.props.goodLogIn && <p>Hello, {this.props.userName}</p>
                                            }
                                        </div>
                                        <div className="profile-usertitle-job">
                                            {
                                                this.props.goodLogIn &&
                                                <p>Iron Chef</p>}
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
                                        </ul>
                                    </div>
                                    {/* <!-- END MENU --> */}
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="profile-content">
                                    <div class="row">
                                        <div class="column">
                                            <h2 class="favorites-text">Favorite Recipes</h2>
                                            <div class="list-group">
                                                <button type="button" className="list-group-item list-group-item-action">Pesto Pasta</button>
                                                <button type="button" className="list-group-item list-group-item-action">Lemon Chicken Pasta with Garlic Sauce</button>
                                                <button type="button" className="list-group-item list-group-item-action">Lemon Gelato</button>
                                                <button type="button" className="list-group-item list-group-item-action">Lasagna</button>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <h2 class="favorites-text">My Recipes</h2>
                                            <div class="list-group">
                                                <button type="button" className="list-group-item list-group-item-action">Tiramisu</button>
                                                <button type="button" className="list-group-item list-group-item-action">Mushroom risotto</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                     </div> </div>
                
                )
                }   
                
            }
                
            
export default UserProfile;

import React, {Component} from 'react';

class HeaderNav extends Component {
    render() {
        return(
            <navbar>
                <nav>
                    
                    <navItem className="btn btn-link" eventKey={1} href="#">
                        Home
                    </navItem>
                    <navItem  className= "btn btn-link" eventKey={2} href="#">
                        Browse recipes
                    </navItem>
                    <navItem>
                        <input type="text" placeholder="search a recipe"/>
                    </navItem>
                    <navItem>

                        <div className="btn-group float-right">
                            <button type="button" className="btn btn-info dropdown-toggle " data-toggle="dropdown" >
                                Log In <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="inputEmail1" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-default" >Sign in</button>
                                    </div>
                                </form>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">New around here? Sign up</a>
                                <a class="dropdown-item" href="#">Forgot password?</a>
                            </ul>
                        </div>

                 </navItem>      
                </nav>
                </navbar>
        )
    }










}

export default HeaderNav;
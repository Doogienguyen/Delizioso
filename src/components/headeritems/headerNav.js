import React, {Component} from 'react';

class HeaderNav extends Component {
    render() {
        return(
            <navbar>
                <nav>
                    <navItem className="btn btn-link" eventKey={1} href="#">
                        Home
                    </navItem>
                    <navItem  className= "btn btn-link" eventKey={1} href="#">
                        Browse recipes
                    </navItem>
                </nav>
                </navbar>
        )
    }










}

export default HeaderNav;
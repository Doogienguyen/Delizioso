import React, { Component } from 'react';
// import {HOME, USERPROFILE} from '../constants'

class HomePage extends Component {
    render(){
        return(
            <div>
            <div className="col-md-6">
            <div className="recipes">
              <p>Recipes of the day:</p>
              <div className="row">
                 <div class="popular"><img href="" src="https://www.eatwell101.com/wp-content/uploads/2017/05/Cilantro-Lime-Shrimp-with-Zucchini-Noodles.jpg"></img>Popular</div>
                 <div class="popular">Healthy</div>
        
              <div className="row">
              <div class="popular">User Submitted</div>
              <div class="popular">Desserts</div>
            </div>
         </div>
        </div>
        </div>
        </div>
        )
    }


}

export default HomePage;
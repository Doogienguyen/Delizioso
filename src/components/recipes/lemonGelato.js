import React, { Component } from 'react';
class LemonGelato extends Component {

    render() {
        return (
            <div className="row">
                <div className="col" >
                    <h2 class="ingredients-header">Lemon Gelato<button type="button" class="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                        Favorite </button></h2>

                    <div>
                        Gelato is ice cream made in the Italian style. This tangy lemon gelato is perfect for a summers day.

                        </div>
                    <h3 className="ingredients-header">Ingredients</h3>
                    <ul>
                        <li>1 cup milk</li>
                        <li>1 cup sugar</li>
                        <li>5 egg yolks, lightly beaten</li>
                        <li>3 tablespoons grated lemon peel</li>
                        <li>3/4 cup lemon juice</li>
                        <li>2 cups heavy whipping cream</li>
                    </ul>

                    <div>
                        <h3 className="ingredients-header">Directions</h3>
                        <ol>
                            <li>In a small heavy saucepan, heat milk to 175°; stir in sugar until dissolved. Whisk a small amount of hot mixture into egg yolks. Return all to the pan, whisking constantly. Add lemon peel. Cook over low heat until mixture is just thick enough to coat a metal spoon and a thermometer reads at least 160°, stirring constantly. Do not allow to boil.</li>
                            <li>Remove immediately from heat; stir in lemon juice and cream. Place in a bowl. Press plastic wrap onto surface of custard; refrigerate several hours or overnight.</li>
                            <li>Fill cylinder of ice cream freezer two-thirds full; freeze according to the manufacturer’s directions. (Refrigerate remaining mixture until ready to freeze.) Transfer ice cream to freezer containers, allowing headspace for expansion. Freeze 2-4 hours or until firm. Repeat with remaining mixture.</li>
                        </ol>
                    </div>

                </div>

                <div className="col" id="ingredients-box">

                    <img className="recipe-picture" src="https://www.tasteofhome.com/wp-content/uploads/2018/02/EXPS_35621_TH1195008D7_RMS-1-696x696.jpg"></img>
                </div>

            </div>


        )
    }
}


export default LemonGelato;
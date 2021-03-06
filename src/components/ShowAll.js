import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';

import FoodDetails from './FoodDetails'
import CocktailDetails from './CocktailDetails'

 class ShowAll extends Component {

     render() {
         return (
             <div>
                 <FoodDetails/>
                 <CocktailDetails/>
             </div>
         )
     }


}

export default ShowAll



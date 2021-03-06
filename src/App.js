import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

import Food from './components/Food'
import FoodDetails from './components/FoodDetails';
import Cocktail from './components/Cocktail';
import CocktailDetails from './components/CocktailDetails'
import ShowAll from './components/ShowAll'



class App extends React.Component {
  render(){
    return(
      <>
    hello
      <Switch>

        <Route
            exact
            path="/food"
            render={(props) => <Food {...props} />}
          />

       <Route
            exact
            path="/food/:id"
            render={(props) => <FoodDetails  {...props} />}
          />


         <Route
            exact
            path="/cocktail"
            render={(props) => <Cocktail  {...props} />}
          /> 

         <Route
            exact
            path="/cocktail/:id"
            render={(props) => <CocktailDetails  {...props}/>}
          />   

        <Route
            exact
            path="/showall"
            render={(props) => <ShowAll  {...props} />}
          />   

      </Switch>

    

      </>
    )
  }
}

export default App;

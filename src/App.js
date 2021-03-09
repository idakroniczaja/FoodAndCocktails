import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

import Food from './components/Food'
import FoodDetails from './components/FoodDetails';
import Cocktail from './components/Cocktail';
import CocktailDetails from './components/CocktailDetails'




class App extends React.Component {
  render(){
    return(
      <div className="App">
    
    <h1 class="site-heading text-center text-white d-none d-lg-block">
       <span class="site-heading-upper text-primary mb-3">Pair your meal  with a cocktail </span>
       <span class="site-heading-lower">food and cocktails</span>
    </h1>

    
    <Link to={'/food'}>What are you hungry for?</Link>



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

  

      </Switch>

    

      </div>
    )
  }
}

export default App;

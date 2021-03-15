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
      <div >
    
    <h1 class="site-heading text-center text-white d-none d-lg-block">
       <span class="site-heading-upper text-primary mb-3">Pair your meal  with a cocktail </span>
       <span class="site-heading-lower">food and cocktails</span>
    </h1>
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div class="container">
      <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start your search</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active px-lg-4">
            <Link to={'/food'} className="nav-link text-uppercase text-expanded" >What are you hungry for?
              <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


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

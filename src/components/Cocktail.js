import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import CocktailDetails from "./CocktailDetails";

export class Cocktail extends Component {
  state = {
    cocktail: [],
  };

  search = (e) => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`
      )
      .then((response) => {
        console.log(response.data.drinks);
        this.setState({
          cocktail: response.data.drinks,
        });
      });
  };

  allCocktails = () => {
    return this.state.cocktail.map((each) => {
      return (
        <Link to={`/cocktail/${each.idDrink}`}>
          <li>{each.strDrink}</li>
        </Link>
      );
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.search}
          name="drink"
          placeholder="your cocktail, please"
          type="text"
        />

        <h1>Cocktails:</h1>
       <div>
         {this.allCocktails()}
       </div> 


      </div>
    );
  }
}

export default Cocktail;

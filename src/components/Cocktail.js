import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import CocktailDetails from "./CocktailDetails";

export class Cocktail extends Component {
  state = {
    cocktail: [],
    drink:{}
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
        <button onClick={()=>this.setState({drink:each})}>
        {each.strDrink}
        </button>




// <Link to={`/cocktail/${each.idDrink}`}>
//   <li>{each.strDrink}</li>
// </Link>
);
});
};

render() {
  console.log(this)
  return (
      <div>
        <h1>Cocktails:</h1>
        <br></br>
        <input
          onChange={this.search}
          name="drink"
          placeholder="your cocktail, please"
          type="text"
        />

       <div>
         {this.allCocktails()}
       </div> 

       {this.state.drink.strDrink}
    <CocktailDetails id={this.state.drink.idDrink}/>


      
       

  
      </div>
    );
  }
}

export default Cocktail;

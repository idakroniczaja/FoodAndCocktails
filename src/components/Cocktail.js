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
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

        <button className='coctailButton' onClick={()=>this.setState({drink:each})}>
        {each.strDrink}
        </button>

        </div>





);
});
};

render() {
  return (
      <div className='site-heading-lower' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1 className="text-uppercase text-expanded" style={{color: "#d69d18"}}>Cocktails:</h1>
        <br></br>
        <input style={{marginBottom:'5vh'}}
          onChange={this.search}
          name="drink"
          placeholder="your cocktail, please"
          type="text"
        />

       <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'85vw'}}>
         {this.allCocktails()}
       </div> 

  
    <CocktailDetails id={this.state.drink.idDrink}/>
      </div>
    );
  }
}

export default Cocktail;

import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import Cocktail from "./Cocktail";
import CocktailDetail from "./CocktailDetails";

export default class FoodDetails extends Component {
  state = {
    foodDetails: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?apiKey=c40a678376e24366886a26ba00de5aab`
      )
      .then((response) => {
        console.log(response.data, this.props);
        this.setState({
          foodDetails: response.data,
        });
      });
  }

  showDetails = () => {
    return (
      <>


  <section className="page-section">
  <div className="container">
    <div className="product-item">
      <div className="product-item-title d-flex">
        <div className="bg-faded p-5 d-flex ml-auto rounded">
          <h2 className="section-heading mb-0">
            <span className="section-heading-upper">Your chosen recipe</span>
            <span className="section-heading-lower">{this.state.foodDetails.title}</span>
          </h2>
        </div>
      </div>
      <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={this.state.foodDetails.image} alt={this.state.foodDetails.title}/>
      <div className="product-item-description d-flex mr-auto">
        <div className="bg-faded p-5 rounded">
        <h2 class="section-heading mb-0">
          <span class="section-heading-upper">Instructions:</span>
          </h2>

          <p className="mb-0" dangerouslySetInnerHTML={{
            __html: this.state.foodDetails.instructions,
          }}></p>

        </div>
      </div>


      <div class="product-item-description d-flex mr-auto">
          <ol class="bg-faded p-5 rounded">
          <h2 class="section-heading mb-0">
          <span class="section-heading-upper">Ingredients:</span>
          </h2>
          {this.state.foodDetails.extendedIngredients?.map(each=>{
            return <li>{each.name.charAt(0).toUpperCase()+each.name.slice(1)}</li>
          })}
     
          </ol>
        </div>
    </div>
  </div>
</section>


      </>
    );
  };








  render() {
    return (
      <>
        <div>
          {this.showDetails()}
        </div>

        <div>
          <Cocktail />
        </div>

        <br></br>

        <button type="button" onClick={this.props.history.goBack}>
          Wanna search more?
        </button>
      </>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";


class Food extends Component {
  state = {
    food: [],
    name: "",
  };

  search = (e) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=ea78a6619ab541c4bd2f63c9a56b443f&query=${e.target.value}`
      )
      .then((response) => {
        this.setState({
          food: response.data.results,
        });
      });
  };

  

  allFood = () => {
    return this.state.food.map((each) => {
      return (
        <Link to={`/food/${each.id}`}>
          <li className="list-unstyled-item list-hours-item d-flex">
            {each.title}
          </li>
        </Link>
      );
    });
  };

  render() {
    return (
      <div className='foodSearch'>

      <div>
        <input 
          onChange={this.search}
          name="name"
          placeholder="search"
          type="text"
        />
      </div>

        <section className="page-section cta">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <div className="cta-inner text-center rounded">
                  <h2 className="section-heading mb-5">
                    <span className="section-heading-upper">Recipe for</span>
                    <span className="section-heading-lower">{this.state.name}</span>
                  </h2>
                  <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                    {this.allFood()}
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Food;

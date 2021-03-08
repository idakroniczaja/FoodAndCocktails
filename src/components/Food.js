import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';


export class Food extends Component {

    state={
        food:[]
      }

      search = (e)=> {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c40a678376e24366886a26ba00de5aab&query=${e.target.value}`)
        .then(response=>{
          console.log(response.data.results)


  this.setState({
    food:response.data.results
  })
        })
      }

      allFood = () => {
          return this.state.food.map(each => {
              return (
                  <div>
                      <Link to={`/food/${each.id}`}><h2>{each.title}</h2></Link>
                  </div>
              )
          })
      }





    render() {
      return (
        <div>
        

        <input 
          onChange={this.search}
          name="name"
          placeholder="search"
          type="text"
        />
        

        <div>{this.allFood()}</div>

        </div>
      );
    }
  }
  
  export default Food;
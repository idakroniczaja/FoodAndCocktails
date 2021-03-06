import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Cocktail from './Cocktail';
import CocktailDetail from './CocktailDetails'


export default class FoodDetails extends Component {
state = {
    foodDetails: {}
}

componentDidMount(){
    axios.get(`https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?apiKey=74655840ee6247938738e3747cddf842`)
    .then(response=>{
        console.log(response.data, this.props)
        this.setState({
            foodDetails: response.data
        })
    })
}


showDetails = () =>{
    return (
        <>
        <img src={this.state.foodDetails.image}/>
        <div>{this.state.foodDetails.instructions}</div>

        </>
    )
}



 render(){
     return(
         <>
         <div> 
            <h1>{this.state.foodDetails.title}</h1>
            {this.showDetails()}
         </div>

         <div>
            <Cocktail/>
        </div>


  
    

        <button type="button" onClick={this.props.history.goBack}>
                  Go back to search page
     </button> 

         </>

     )
 }

}



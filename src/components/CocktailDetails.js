import React, { Component } from 'react';
import axios from 'axios';



export default class CocktailDetails extends Component {
state = {
    cocktailDetails:[]

}

componentWillReceiveProps(props){
    console.log(props)
   if (props.id){

       axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`)
       .then(response=>{
         
           this.setState({
               cocktailDetails: response.data.drinks
           })
       })
   }
}
showDetails = () =>{
    return this.state.cocktailDetails.map(each=>{
        return (
            <>
            <h2>{each.strInstructions}</h2>
            <img width='300vw' src={each.strDrinkThumb} alt={each.strDrink}/>
            </>
        )
    })

 
}

render(){
    return(
        <div>
            {this.showDetails()}
        </div>
    )
}



}
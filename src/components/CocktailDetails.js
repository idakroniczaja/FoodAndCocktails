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
            <h3>List of ingredients:</h3>
        <ul>
            <li>{each.strIngredient1}</li>
            <li>{each.strIngredient2}</li>
            <li>{each.strIngredient3}</li>
            <li>{each.strIngredient4}</li>
            <li>{each.strIngredient5}</li>
            <li>{each.strIngredient6}</li>
            <li>{each.strIngredient7}</li>
            <li>{each.strIngredient8}</li>
            <li>{each.strIngredient9}</li>
            <li>{each.strIngredient10}</li>
            <li>{each.strIngredien11}</li>
            <li>{each.strIngredien12}</li>
            <li>{each.strIngredien13}</li>
            <li>{each.strIngredien14}</li>
            <li>{each.strIngredien15}</li>
        </ul>

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
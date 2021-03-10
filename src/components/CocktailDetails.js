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
            {/* <h2>{each.strInstructions}</h2>
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

            <img width='300vw' src={each.strDrinkThumb} alt={each.strDrink}/> */}




            <section class="page-section">
    <div class="container">
      <div class="product-item">
        <div class="product-item-title d-flex">
          <div class="bg-faded p-5 d-flex mr-auto rounded">
            <h2 class="section-heading mb-0">
              <span class="section-heading-upper">Cocktail you chose</span>
              <span class="section-heading-lower">{each.strDrink}</span>
            </h2>
          </div>
        </div>
        <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={each.strDrinkThumb} alt={each.strDrink}/>
        <div class="product-item-description d-flex ml-auto">
          <div class="bg-faded p-5 rounded">
          <h2 class="section-heading mb-0">
          <span class="section-heading-upper">Instructions:</span>
          </h2>
            <p class="mb-0">{each.strInstructions}</p>
          </div>
        </div>

        <div class="product-item-description d-flex mr-auto">
          <ol class="bg-faded p-5 rounded">
          <h2 class="section-heading mb-0">
          <span class="section-heading-upper">Ingredients:</span>
          </h2>
            <li class="mb-0">{each.strIngredient1}</li>
            <li class="mb-0">{each.strIngredient2}</li>
            <li class="mb-0">{each.strIngredient3}</li>
            <li class="mb-0">{each.strIngredient4}</li>     
            <li class="mb-0">{each.strIngredient5}</li>
            <li class="mb-0">{each.strIngredient6}</li>
      
          </ol>
        </div>

      </div>
    </div>
  </section>

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
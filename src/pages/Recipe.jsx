import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import mealdb from '../mealdb-api'
import { RecipeIngredients } from '../components/RecipeIngratients'
import { RecipeInstructions } from '../components/RecipeInstructions'

export const Recipe = ({ match }) => {
    const [recipe, setRecipe] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchRecipe = async () => {
        try {
            const data  = await mealdb.getRecipe(match.params.recipeId)
            console.log(data);
            setRecipe(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setRecipe(null)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchRecipe()
    }, [])

    if (isLoading) {
        return <div className="message">Cargando...</div>
    }
    else if (recipe == null) {
        return <div className="message">Hubo un problema :(</div>
    }

    return <div className="Recipe">
    <Helmet>
      <title>{ recipe.name }</title>
    </Helmet>

    <div className="hero" style={{ backgroundImage: `url(${recipe.thumbnail})` }} />
    
    <div className="title">
      <div className="info">
        <h1>{ recipe.name }</h1>
        <p>{ recipe.origin }</p>
      </div>
      <div>
      </div>
    </div>


    <RecipeIngredients ingredients={ recipe.ingredients } />

    <RecipeInstructions instructions={ recipe.instructions } />

  </div>
}
import React from 'react'

export const RecipeIngredients = ({ ingredients }) => {
    return <div className="ingredients">
    <h2>Ingredients</h2>
    <ul>
      { ingredients.map((i, ix) => (
        <li key={ix}>{ i.ingredient }: { i.measure }</li>
      )) }
    </ul>
  </div>
}
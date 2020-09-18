import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"

import mealdb from '../mealdb-api'

export const Home = () => {
    const [recipes, setRecipes] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchMeal = async () => {
        try {
            const data = await mealdb.getLatest()
            console.log(data)
            setRecipes(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setRecipes(null)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMeal()
    }, [])

    if (isLoading) {
        return <div className="message">Cargando...</div>
    }

    return <>
        <Helmet>
            <title>Recetas</title>
        </Helmet>

        <div className="recipes">
            {recipes && recipes.map((recipe) => (
                <Link to={`/recipe/${recipe.id}`} className="recipe" key={recipe.id}>
                    <span className="bg" style={{ backgroundImage: `url(${recipe.thumbnail})` }}></span>
                    <span className="info">
                        <h2>{recipe.name}</h2>
                    </span>
                </Link>
            ))}
        </div>
    </>
}
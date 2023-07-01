import { useParams } from "react-router-dom"

export function ReceipeDetails () {
    const {recipeId} = useParams()
    return(
        <div>Details: {recipeId}</div>
    )
}
import { useState } from 'react'
import './App.css'
import RecipeDescription from './components/discription'
import RecipeIngredients from './components/Ingredients'
import RecipePhoto from './components/photo'

function App() {

  return (
    <>
      <div className="App">
        <div className="recipePhotoBLock">
        <RecipePhoto />
        <div>
          <RecipeDescription />
          <RecipeIngredients />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { ReceipeDetails } from './pages/RecipeDetails/RecipeDetails';

function App() {
  return (
    <div className="App">
      <h1>Cook Book</h1>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:recipeId' element={<ReceipeDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

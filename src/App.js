import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import { Home } from './pages/Home.jsx'
import { Recipe } from './pages/Recipe.jsx'
import { Timer } from './pages/Timer.jsx'
import { IfOffline } from './components/IfOffline'
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div>
          <header>
            <Link to="/">Recetas <IfOffline>Offline</IfOffline></Link>
          </header>

          <main>
            <Route exact path="/" component={Home} />
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route path="/timer" component={Timer} />
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App;

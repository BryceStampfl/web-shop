import React from 'react';


import ROUTES from "./_utils/routes"
import Header from './components/header/Header'
import RenderRoutes from "./components/RenderRoutes";


//Clears the local storage if app if refreshed
window.onbeforeunload = function() {
  localStorage.clear();
}

function App() {
  return (
    <div className="App">
      <Header />
      <RenderRoutes routes={ROUTES} />
    </div>

  );
}

export default App;
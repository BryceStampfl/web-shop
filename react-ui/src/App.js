import React from 'react';

import ROUTES from "./_utils/routes"
import Header from './components/header/Header'
import RenderRoutes from "./components/routing/RenderRoutes";
import CategoriesBar from "./components/header/CategoriesBar"

function App() {

  return (
    <div id="App" style={{backgroundColor: "rgb(248,249,250)"}}>
      <Header />
      <CategoriesBar />
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
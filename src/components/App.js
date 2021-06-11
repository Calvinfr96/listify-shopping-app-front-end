import React from "react";
import Header from "./Header";
import ShoppingContainer from "./ShoppingContainer";
import NewItemForm from "./NewItemForm"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NewItemForm />
      <ShoppingContainer />
    </div>
  );
}

export default App;


import './App.css';
import React, { Component } from 'react'
import { Switch , Route , Link } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';

// const HomePage = (props) => {

//   console.log(props);

//   return(
//     <div>
//       <h1>HOME PAGE</h1>
//     </div>

//   )


// }


const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}




export default App;
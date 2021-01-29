
import './App.css';
import React, { Component } from 'react'
import { Switch , Route , Link } from "react-router-dom";
// import React from 'react'
// import { Switch , Route  } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx';
import Header from './component/header/header.jsx';

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
     <h1>HOME PAGE </h1>
     <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}




export default App;
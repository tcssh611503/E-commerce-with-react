
import './App.css';
import React, { Component } from 'react'
// import HomePage from './pages/homepage/homepage.component';
import { Switch , Route , Link } from "react-router-dom";


const HomePage = (props) => {

  console.log(props);

  return(
    <div>
    <button onClick={()=> props.history.push('/topics')} >Topics Button</button>
    <Link to='/topics'>Topics</Link>
    <h1>HOME PAGE</h1>
  </div>

  )


}




const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>

)

const TopicsList = (props) => {
  console.log(props);
  return(
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to ={ `${props.match.url}/13`  }>TO TOPIC 13</Link>
      <Link to ={ `${props.match.url}/17`  }>TO TOPIC 17</Link>
      <Link to ={ `${props.match.url}/21`  }>TO TOPIC 21</Link>
    </div>
  );
};


const TopicDetail = (props) => {
  console.log(props);
  return(

  <div>
    <h1>TOPIC DETAIL PAGE  {props.match.params.topicId} </h1>
  </div>

  )



}


function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

//exact path 要路徑完全一樣才match
//沒有exact 路徑都會match顯示
//<Switch> 只顯示match符合路徑的第一個，之後符合的不顯示
// function App() {
//   return (
//     <div>
//       <Switch>
//         <Route exact path='/' component={HomePage} />
//         <Route path='/hats' component={HatsPage} />
//         <Route path='/topics' component={TopicsList} />
//         <Route path='/topics/:topicId' component={TopicDetail} />
//       </Switch>
//     </div>
//   );
// }

// 未使用Router
// function App() {
//   return (
//     <div>
//       <HomePage />
//     </div>
//   );
// }


export default App;
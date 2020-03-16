import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Review from './component/Review/Review';
import Manage from './component/Manage/Manage';
import Notfound from './component/Notfound/Notfound';
import Productdetails from './component/Prouctdetails/Productdetails';

function App() {
  return (
    <div>
     <Header></Header>
     <Router>
       <Switch>
         <Route  path="/shop">
           <Shop></Shop>
         </Route>
         <Route path="/manage">
           <Manage></Manage>
         </Route>
         <Route path="/review">
           <Review></Review>
         </Route>
         <Route path="/product/:productKey">
           <Productdetails></Productdetails>
         </Route>
         <Route exact path="/">
           <Shop></Shop>
         </Route>
         <Route path="*">
           <Notfound></Notfound>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

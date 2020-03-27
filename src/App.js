import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './back/api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './front/home';
import News from './back/news';
import Animals from './front/animals';
import Cats from './back/cats';
import Dogs from './back/dogs';



function App() {
  return (
    <div className="container-fluid">
    <Router>
    <nav class="navbar">
      <span class="navbar-brand mb-0 h1"><Link to={'/'}>Random World</Link></span>
      <ul class="list-group list-group-horizontal bg-dark-gray">
      <li class="list-group-item"><Link to={'/memes'}><button type="button" class="btn btn-outline-success">MEMES</button></Link></li>
      <li class="list-group-item"><Link to={'/news'}><button type="button" class="btn btn-outline-success">News</button></Link></li>
      <li class="list-group-item"><Link to={'/animals'}><button type="button" class="btn btn-outline-success">Animals</button></Link></li>
    </ul>
    </nav>
<br/>

<Switch>
 <Route exact path='/' component={Home} />
 <Route path='/memes' component={Data} />
 <Route path='/news' component={News} />
 <Route path='/animals' component={Animals} />
 <Route path='/cats' component={Cats} />
 <Route path='/dogs' component={Dogs} />
</Switch>
</Router>
</div>
  );
}

export default App;

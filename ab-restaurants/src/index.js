import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './header/header';
import Menu from './menu/menu';
import Home from './home/home';
import Contact from './contact/contact';
import Footer from './footer/footer';
import PageNotFound from './PageNotFound/PageNotFound';
const routing = (
  <BrowserRouter>
  <Header></Header>
  <Switch>    
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/Menu" component={Menu} />
      <Route path="/contact" component={Contact} />    
      <Route path="**" component={PageNotFound} />
  </Switch>
  <Footer></Footer>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


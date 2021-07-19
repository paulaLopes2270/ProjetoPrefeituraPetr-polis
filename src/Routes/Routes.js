import React from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'; 


// Pages
import { Home } from "../pages"

export const Routes = () => {
  return (
   
    <BrowserRouter>
       <Switch>
          <Route path='/' exact component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}



import React from 'react'
import HomePage from "./components/pages/home-page/HomePage";
import Layout from "./components/common/layout/Layout";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PricePage from "./components/pages/price-page/PricePage";

function App() {
  return (
   <Router>
       <div className="App">
           <Layout>
               <Switch>
                   <Route exact path={'/'}><HomePage /></Route>
                   <Route exact path={'/price'}><PricePage /></Route>
               </Switch>
           </Layout>
       </div>
   </Router>
  );
}

export default App;

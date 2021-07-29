import React from 'react'
import HomePage from "./components/pages/home-page/HomePage";
import Layout from "./components/common/layout/Layout";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PricePage from "./components/pages/price-page/PricePage";
import AboutPage from "./components/pages/about-page/AboutPage";
import ServicesPage from "./components/pages/services-page/ServicesPage";
import BlogPage from "./components/pages/blog-page/BlogPage";
import ContactPage from "./components/pages/contact-page/ContactPage";
import DashboardPage from "./components/pages/dashboard-page/Dashboard";

function App() {
  return (
   <Router>
       <div className="App">
           <Layout>
               <Switch>
                   <Route exact path={'/'}><HomePage /></Route>
                   <Route path={'/price'}><PricePage /></Route>
                   <Route path={'/about'}><AboutPage /></Route>
                   <Route path={'/services'}><ServicesPage/></Route>
                   <Route path={'/blog'}><BlogPage /></Route>
                   <Route path={'/contact'}><ContactPage /></Route>
                   <Route path={'/dashboard'}><DashboardPage /></Route>
               </Switch>
           </Layout>
       </div>
   </Router>
  );
}

export default App;

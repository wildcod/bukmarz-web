import React, {useEffect} from 'react'
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
import {initializeApp} from './redux/reducers/appReducer'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Alerts from '../src/components/common/alerts/Alerts'
import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const alertOptions = {
    timeout: 5000,
    position: 'bottom center'
}

function App({ initializeApp, auth }) {

  useEffect(() => {
      initializeApp()
  }, [])

  return (
   <Router>
       <div className="App">
           <AlertProvider template={AlertTemplate} {...alertOptions}>
               <Layout>
                   <Alerts />
                   <Switch>
                       <Route exact path={'/'}><HomePage /></Route>
                       <Route path={'/price'}><PricePage /></Route>
                       <Route path={'/about'}><AboutPage /></Route>
                       <Route path={'/services'}><ServicesPage/></Route>
                       <Route path={'/blog'}><BlogPage /></Route>
                       <Route path={'/contact'}><ContactPage /></Route>
                       <Route path={'/dashboard'}><DashboardPage auth={auth}/></Route>
                   </Switch>
               </Layout>
           </AlertProvider>
       </div>
   </Router>
  );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp})
)(App)

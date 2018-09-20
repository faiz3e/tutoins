import React from "react";
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from "./PublicRoutes";
import { Route,Redirect } from "react-router-dom";
import PublicHome  from "../components/publicRoutes/PublicHome";
import PublicAbout from "../components/publicRoutes/PublicAbout";
import PrivateAbout from "../components/privateRoutes/PrivateAbout";
import PrivateHome from "../components/privateRoutes/PrivateHome";

import Packages from "../components/privateRoutes/container/Packages";
import Performances from "../components/privateRoutes/container/Performances";
import Profile from "../components/privateRoutes/container/Profile";
import Results from "../components/privateRoutes/container/Results";
import Review from "../components/privateRoutes/container/Review";
import Syllabus from "../components/privateRoutes/container/Syllabus";



class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* AT EMPTY ROUTE */}
        <Route  exact path="/" render={() => (<Redirect to="/publicHome" />)} />

        {/* PUBLIC ROUTES */}
        <PublicRoutes exact path='/' component ={PublicHome}/>
        <PublicRoutes path='/publicHome' component ={PublicHome}/>
        <PublicRoutes path='/publicAbout' component ={PublicAbout}/>

        {/* PRIVATE ROUTES */}
        <PrivateRoutes path="/privateHome" component={PrivateHome} />
        <PrivateRoutes path="/Packages" component={Packages} />
        <PrivateRoutes path="/Performances" component={Performances} />
        <PrivateRoutes path="/Results" component={Results} />
        <PrivateRoutes path="/Review" component={Review} />
        <PrivateRoutes path="/Profile" component={Profile} />
        <PrivateRoutes path="/Syllabus" component={Syllabus} />

        {/* any wrong routes */}
        {/* <Route path="/*" render={() => (<Redirect to="/publicHome" />)} /> */}
      </React.Fragment>
    );
  }
}

export default ReactRouter;

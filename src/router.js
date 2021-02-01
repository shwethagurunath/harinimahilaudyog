import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import feedbackComponent from "./components/feedbackComponent";
import history from "./history";
import AboutComponent from "./pages/about/aboutPage";
import ContactComponent from "./pages/contact/contactUs";
import HomeComponent from "./pages/home/homePage";
import ParipoornaComponent from "./pages/paripoornaproducts/paripoornaproducts";
import ProductsComponent from "./pages/products/products";

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={HomeComponent}></Route>
                <Route path="/products" exact component={ProductsComponent}></Route>
                <Route path="/paripoorna" exact component={ParipoornaComponent}></Route>
                <Route path="/about" exact component={AboutComponent}></Route>
                <Route path="/contact" exact component={ContactComponent}></Route>
                <Route path="/feedback" exact component={feedbackComponent}></Route>
            </Switch>
        </Router>
    );
}

export default Routes;

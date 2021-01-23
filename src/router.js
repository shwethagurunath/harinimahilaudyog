import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import history from "./history";
import HomeComponent from "./pages/home/homePage";
import ProductsComponent from "./pages/products/products";
import ParipoornaComponent from "./pages/paripoornaproducts/paripoornaproducts";
import AboutComponent from "./pages/about/aboutPage";
import ContactComponent from "./pages/contact/contactUs";

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={HomeComponent}></Route>
                <Route path="/products" exact component={ProductsComponent}></Route>
                <Route path="/paripoorna" exact component={ParipoornaComponent}></Route>
                <Route path="/about" exact component={AboutComponent}></Route>
                <Route path="/contact" exact component={ContactComponent}></Route>
            </Switch>
        </Router>
    );
}

export default Routes;

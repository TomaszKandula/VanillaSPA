"use strict";

import { Route } from "./route";
import { Router } from "./router";

const initialize = () =>
{
    let router = new Router([
        new Route("home", "home.html", true),
        new Route("about", "about.html")
    ]);
    console.log(router);
};

initialize();

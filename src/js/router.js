"use strict";

export class Router
{
    constructor(routes)
    {
        if (!routes) throw "Error: 'routes' argument is mandatory.";

        this.routes = routes;
        this.rootApp = document.querySelector("#app");
        this.initialize();
    }

    initialize()
    {
        let routes = this.routes;

        ((scope, routes) =>
        {
            window.addEventListener("hashchange", () => scope.hasChanged(scope, routes));
        })(this, routes);

        this.hasChanged(this, routes);
    }

    goToRoute(htmlName)
    {
        ((scope) =>
        {
            let url = htmlName; 
            let xhttp = new XMLHttpRequest();

            xhttp.open("GET", url, true);
            xhttp.send();

            xhttp.onreadystatechange = () =>
            {
                if (xhttp.readyState === 4 && xhttp.status === 200) scope.rootApp.innerHTML = xhttp.responseText;
            };
        })(this);
    }

    hasChanged(scope, routes)
    {
        if (window.location.hash.length > 0)
        {
            for (let index = 0, length = routes.length; index < length; index++)
            {
                let route = routes[index];
                if (route.isActiveRoute(window.location.hash.substr(1))) scope.goToRoute(route.htmlName);
            }
            return;
        }

        for (let index = 0, length = routes.length; index < length; index++)
        {
            let route = routes[index];
            if (route.default) scope.goToRoute(route.htmlName);
        }
    }
}

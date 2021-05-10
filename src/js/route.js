"use strict";

export class Route
{
    constructor(name, htmlName, defaultRoute)
    {
        if (!name || !htmlName) throw "Error: 'name' and 'htmlName' arguments are mandatory.";

        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    }

    isActiveRoute(hashedPath)
    {
        return hashedPath.replace("#", "") === this.name;
    }
}

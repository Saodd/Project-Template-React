import * as React from "react";
import * as ReactDOM from "react-dom";

import {App} from "./app";

function main() {
    const d = document.createElement('div')
    document.body.appendChild(d)
    ReactDOM.render(<App/>, d)
}

main()

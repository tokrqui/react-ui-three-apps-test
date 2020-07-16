import React from "react";
import ReactDom from "react-dom";

import { ThemeContext, ThemeFactory, FLAT_THEME, DEFAULT_THEME, Button, Select } from "@skbkontur/react-ui";

window.setTimeout(() => { 
    ReactDom.render(
        <ThemeContext.Provider value={FLAT_THEME} className="header">
            <Button size='large' use="link" width='300px' height='42px'>default</Button>
        </ThemeContext.Provider>
        , document.getElementById("root-two")
    );
}, 1000)
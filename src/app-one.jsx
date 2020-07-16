import React from "react";
import ReactDom from "react-dom";

import { ThemeContext, ThemeFactory, FLAT_THEME, DEFAULT_THEME, Button, Select } from "@skbkontur/react-ui";

ReactDom.render(
    <ThemeContext.Provider value={FLAT_THEME} className="header">
        <Button size='large' use="" width='300px' height='42px'>default</Button>
        <Button size='large' use="primary" width='300px' height='42px'>primary</Button>
        <Button size='large' use="success" width='300px' height='42px'>success</Button>
        <Select size="large" width="300px" caption="" items={["one", "two"]} />
    </ThemeContext.Provider>
    , document.getElementById("root-one")
);

import React from "react";
import ReactDOM from "react-dom/client";


const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"heading_1"},"heading 1 ha autosave kaam kr rha hai"),
        React.createElement("h1",{id:"heading_1"},"heading 1 ha kr rha hai kr"),
    ]),
    
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
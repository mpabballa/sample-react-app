import React from 'react';
import ReactDOM from 'react-dom';

// const header = document.createElement("h1");
// header.innerHTML = "Hello Mahesh"
// const root = document.getElementById("root");
// root.appendChild(header);


const reactHeader = React.createElement('h1',{id: 'headerId', class:'headerClass'}, 'Hello React..!');
const reactdom = React.createElement('div',{id: 'divid', class:'headerClass'}, 
[ 'Main header content', React.createElement('h2',{id: 'h2Id', class:'childs'}, 
[React.createElement('h3',{id: 'h3Id', class:'childs'}, 'Child h3 - 1 content exaample'),
React.createElement('h3',{id: 'h3Id', class:'childs'}, 'Child h3 - 2 content exaample'),
React.createElement('h3',{id: 'h3Id', class:'childs'}, 'Child h3 - 3 content exaample'),]),
React.createElement('h3',{id: 'h3Id', class:'childs'}, 'Child h3 content exaample'), 
'Test data', ' test data here.']);

const mainRoot = ReactDOM.createRoot(document.getElementById("root"));
mainRoot.render(reactdom);
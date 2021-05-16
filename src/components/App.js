import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
const name=[{id:"relativeListItem1",k:"gourav"},
            {id:"relativeListItem2",k:"vinay"}];
  const listitem=name.map((names)=>
  <li key={names.id}>{names.k}</li>
  );
        return(
            <div id="main">
               {/* Do not remove the main div */}
             <ol key={name.id}>{listitem}</ol>
             <ol key={"relativeList"}>{listitem}</ol>
            </div>
        )
    }
}


export default App;
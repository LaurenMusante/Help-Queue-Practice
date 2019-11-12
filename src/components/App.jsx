import React from "react";
import Header from "./Header";
import TicketList from "./TicketList"; //so that we can render our TicketList within the parent App component.


function App(){
  return (
    <div>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;


// export default App;

//, we can only render a single React element at a time, but that element may contain limitless children. So anytime we want to render multiple elements we need to enclose them in a single parent,

import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

//the above lets us declare what DT our props need to be, thanks for importing PropTypes after installing in Terminal.
export default Ticket;

//the above is after adding the actual props to TicketList.jsx


// import React from "react";
//
// function Ticket(){
//   return (
//       <div>
//         <h3>3A - Thato & Haley</h3>
//         <p><em>Firebase entries not saving!</em></p>
//         <hr/>
//       </div>
//    );
// }
//
// export default Ticket;

//Because each ticket should look and function similarly, we house their code in this component.

//We ove the JSX for hard-coded tickets from App.jsx into Ticket.jsx

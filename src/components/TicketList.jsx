import React from "react";
import Ticket from "./Ticket";

function TicketList(){
  return (
    <Ticket
          location="3A"
          names="Thato and Haley"
          issue="Firebase will not save record!"/>
      );
    }

export default TicketList;

//This component will render the list of tickets in the queue. Each ticket will be represented by yet another React component.

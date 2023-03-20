import React, { useState } from "react";
import {
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";


export default function ShiftBox (){
  
    const [signedUpAppointments] = useState([]);
    const appointmentContent = ({ data }) => {
      const isSignedUp = signedUpAppointments.some(
        (appointment) => appointment.id === data.id
      );
      const color = isSignedUp ? "green" : "black";
      return <div style={{ backgroundColor: color, color: "white" }}>{data.title}</div>;
    };
  
    return (

        <Appointments appointmentContentComponent={appointmentContent} />

    );
  };
  
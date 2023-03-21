import React from "react";
import {
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

export default function ShiftBox2 ({signedUpAppointments, appointment}){

    const appointmentContent = ({ data }) => {
      const isSignedUp = signedUpAppointments.some(
        (appointment) => appointment.id === data.id
      );
      const color = isSignedUp ? "#7ec699" : "grey";
      return <div style={{ backgroundColor: color, color: "white" }}>{data.title}</div>;
    };
  
    return (
        <Appointments appointmentComponent={appointment} appointmentContentComponent={appointmentContent} />
    );
  };
  
import React from "react";
import {
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

export default function ShiftBox ({signedUpAppointments, appComp}){

    const appointmentContent = ({ data }) => {
      const isSignedUp = signedUpAppointments.some(
        (appointment) => appointment.id === data.id
      );
      const color = isSignedUp ? "#7ec699" : "grey";
      return <div style={{ backgroundColor: color, color: "white" }}>{data.title}</div>;
    };
  
    return (
        <Appointments appointmentContentComponent={appointmentContent} appointmentComponent={appComp} />
    );
  };
  
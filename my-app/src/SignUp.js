import React, { useState } from "react";
import {
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import CustomAppointmentTooltip from "./customTooltip";
import {appointments} from './demodata/appointments'

export default function ShiftBox (){
  
    const [signedUpAppointments] = useState([]);
    const handleSignUp = (appointmentData) => {
      // perform sign-up logic
      const signedUpAppointment = appointments.find((appointment) => appointment === appointmentData);
      signedUpAppointments.push(signedUpAppointment);

    };
  
    return (

        <AppointmentTooltip
        contentComponent={(props) => (
          <CustomAppointmentTooltip {...props} onSignUp={handleSignUp} />
        )}
      />

    );
  };
  
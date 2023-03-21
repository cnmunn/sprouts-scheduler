import React from "react";
import {
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import CustomAppointmentTooltip from "./customTooltip";
import {appointments} from './demodata/appointments'

export default function SignUp ({signedUpAppointments, setSignedUpAppointments}){
  
    const handleSignUp = (appointmentData) => {
      // perform sign-up logic
      const signedUpAppointment = appointments.find((appointment) => appointment.id === 1);
      setSignedUpAppointments((prev) => {
          return [...prev, signedUpAppointment];
      })
    };
  
    return (

        <AppointmentTooltip
        contentComponent={(props) => (
          <CustomAppointmentTooltip {...props} onSignUp={handleSignUp} signedUpAppointments={signedUpAppointments} />
        )}
      />

    );
  };
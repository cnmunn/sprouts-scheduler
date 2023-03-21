import React from "react";
import {
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import CustomAppointmentTooltip2 from "./customTooltip2";
import {appointments} from './demodata/appointments2'

export default function SignUp2 ({signedUpAppointments, setSignedUpAppointments}){
  
    const handleSignUp = (appointmentData) => {
      console.log(appointments)
      console.log(appointmentData)
      const signedUpAppointment = appointments.find((appointment) => appointment.id === appointmentData.id);
      console.log(signedUpAppointment)
      // ^ this is returning undefined idk why
      setSignedUpAppointments((prev) => {
          return [...prev, signedUpAppointment];
      })
    };


    console.log(signedUpAppointments)
  
    return (

        <AppointmentTooltip
        contentComponent={(props) => (
          <CustomAppointmentTooltip2 {...props} onSignUp={handleSignUp} signedUpAppointments={signedUpAppointments} />
        )}
      />

    );
  };
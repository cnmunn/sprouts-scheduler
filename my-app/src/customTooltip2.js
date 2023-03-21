import React, { useState, useEffect } from "react";
import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import Button from "@mui/material/Button";

const CustomAppointmentTooltip2 = ({
  appointmentData,
  onSignUp,
  signedUpAppointments,
  ...restProps
}) => {
  const isSignedUp = signedUpAppointments.find((appointment) => appointment.id === appointmentData.id);
  
  const handleSignUp = () => {
    onSignUp(appointmentData);
  };
  

  const tooltipStyle = {
    backgroundColor: isSignedUp ? "#7ec699" : "#e4f0f6",
    color: isSignedUp ? "#fff" : "#333",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
  };

  return (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <div style={tooltipStyle}>
        {!isSignedUp ? (
          <div>
            <div>{appointmentData.title}</div>
            <div>{appointmentData.startDate}</div>
            <div>{appointmentData.endDate}</div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSignUp()}
            >
              Sign Up
            </Button>
          </div>
        ) : (
          <div>
            <div>{appointmentData.title}</div>
            <div>You have successfully signed up!</div>
          </div>
        )}
      </div>
    </AppointmentTooltip.Content>
  );
};

export default CustomAppointmentTooltip2;
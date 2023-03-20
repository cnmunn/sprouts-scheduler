import React, { useState } from "react";
import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import Button from "@mui/material/Button";

const CustomAppointmentTooltip = ({
  appointmentData,
  onSignUp,
  ...restProps
}) => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    // perform sign-up logic
    console.log("hello");
    onSignUp(appointmentData);
    setIsSignedUp(true);
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
            <div>{appointmentData.startDate.toLocaleString()}</div>
            <div>{appointmentData.endDate.toLocaleString()}</div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSignUp}
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

export default CustomAppointmentTooltip;

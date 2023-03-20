import React, { useState } from "react";
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentTooltip
} from "@devexpress/dx-react-scheduler-material-ui";
import CustomAppointmentTooltip from "./customTooltip";

const appointments = [
  {
    id: 1,
    startDate: new Date(2023, 3, 1, 10, 0),
    endDate: new Date(2023, 3, 1, 11, 0),
    title: "Meeting"
  },
  {
    id: 2,
    startDate: new Date(2023, 3, 2, 14, 0),
    endDate: new Date(2023, 3, 2, 15, 0),
    title: "Lunch"
  }
];

const App = () => {
  const [signedUpAppointments] = useState([]);

  const appointmentContent = ({ data }) => {
    const isSignedUp = signedUpAppointments.some(
      (appointment) => appointment.id === data.id
    );
    const color = isSignedUp ? "green" : "blue";
    return <div style={{ backgroundColor: color }}>{data.title}</div>;
  };

  const handleSignUp = (appointmentData) => {
    // perform sign-up logic
    const signedUpAppointment = appointments.find((appointment) => appointment === appointmentData);
    signedUpAppointments.push(signedUpAppointment);
  };

  return (
    <Scheduler data={appointments}>
      <MonthView />
      <Appointments appointmentContentComponent={appointmentContent} />
      <AppointmentTooltip
        contentComponent={(props) => (
          <CustomAppointmentTooltip {...props} onSignUp={handleSignUp} />
        )}
      />
    </Scheduler>
  );
};

export default App;

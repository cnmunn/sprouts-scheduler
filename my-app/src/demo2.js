import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import Room from '@mui/icons-material/Room';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import classNames from 'clsx';
import NavBar from "./NavBar"
import Logo from "./Logo"
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import { Button } from '@mui/material';
import BasicList from './selected_shifts'
import ShiftBox2 from './ShiftBox2'
import SignUp2 from './SignUp2'
import {appointments as appointmentData} from './demodata/appointments2.js';

const dayScaleCell = ({ startDate, endDate, today }) => (
  <TableCell>
    <span style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    }}>
      {Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(startDate)}
    </span>
  </TableCell>
);

const PREFIX = 'Demo';

const classes = {
  icon: `${PREFIX}-icon`,
  textCenter: `${PREFIX}-textCenter`,
  firstRoom: `${PREFIX}-firstRoom`,
  secondRoom: `${PREFIX}-secondRoom`,
  thirdRoom: `${PREFIX}-thirdRoom`,
  fourthRoom: `${PREFIX}-fourthRoom`,
  header: `${PREFIX}-header`,
  commandButton: `${PREFIX}-commandButton`,
};

const StyledAppointmentTooltipHeader = styled(AppointmentTooltip.Header)(() => ({
  [`${classes.firstRoom}`]: {
    background: `./demodata/imgs/Cafe.png`,
  },
  [`&.${classes.secondRoom}`]: {
    background: './demodata/imgs/Fridge.png',
  },
  [`&.${classes.thirdRoom}`]: {
    background: './demodata/imgs/Distro.png',
  },
  [`&.${classes.fourthRoom}`]: {
    background: './demodata/imgs/Eats.png',
  },
  [`&.${classes.header}`]: {
    height: '0px', //260px
    backgroundSize: 'cover',
  },
  
}));

const StyledIconButton = styled(IconButton)(() => ({
  [`&.${classes.commandButton}`]: {
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
}));

const StyledGrid = styled(Grid)(() => ({
  [`&.${classes.textCenter}`]: {
    textAlign: 'center',
  },
}));

const StyledRoom = styled(Room)(({ theme: { palette } }) => ({
  [`&.${classes.icon}`]: {
    color: palette.action.active,
  },
}));

const StyledAppointmentTooltipCommandButton = styled(AppointmentTooltip.CommandButton)(() => ({
  [`&.${classes.commandButton}`]: {
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
}));



const getClassByLocation = (location) => {
  if (location === 'Cafe') return classes.firstRoom;
  if (location === 'Fridge') return classes.secondRoom;
  if (location === 'Distro') return classes.thirdRoom
  return classes.fourthRoom;
};

const Header = (({
  children, appointmentData, ...restProps
}) => (
  <StyledAppointmentTooltipHeader
    {...restProps}
    className={classNames(getClassByLocation(classes, appointmentData.location), classes.header)}
    appointmentData={appointmentData}
  >
    <StyledIconButton
      /* eslint-disable-next-line no-alert */
      onClick={() => alert("Shift Leader: Jess")}
      className={classes.commandButton}
      size="large"
    >
      <MoreIcon />
    </StyledIconButton>
  </StyledAppointmentTooltipHeader>
));

const Content = (({
  children, appointmentData, ...restProps
}) => {
  const handleSignUpClick = () => {
    handleShiftSignup(appointmentData);
  };

return (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
    <Grid container alignItems="center">
    <StyledGrid item xs={2} className={classes.textCenter}>
        <StyledRoom className={classes.icon} />
      </StyledGrid>
      <Grid item xs={10}>
        <Button variant="outlined" onClick={handleSignUpClick}>Sign-Up</Button>
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
)});

const CommandButton = (({
  ...restProps
}) => (
  <StyledAppointmentTooltipCommandButton {...restProps} className={classes.commandButton} />
));

const handleShiftSignup = ({ appointmentData }) => {
  console.log(appointmentData);

  if (appointmentData.selected) {
    appointmentData.selected = false;
  } else {
    appointmentData.selected = true;
  }
  alert("Signed Up!");
};


const getColorByLocation = (location) => {
    if (location === 'Cafe') return '#81D1FF';
    if (location === 'Fridge') return '#ED81FF';
    if (location === 'Distro') return '#FFC83A';
    return '#4DD84A';
  };

const Appointment = ({
    children, data, style, ...restProps
  }) => (
    <Appointments.Appointment
      {...restProps}
      data={data}
      style={{
        ...style,
        backgroundColor: getColorByLocation(data.location),
      }}
    >
      {children}
    </Appointments.Appointment>
  );
export default function Demo () {
  const [data, setData] = useState(appointmentData);
  const [signedUpAppointments, setSignedUpAppointments] = useState([]);

    return (
      <Paper>
         <Logo></Logo>
         <NavBar></NavBar>
        <BasicList></BasicList>
        <Button onClick={() => {
          alert('Submitted!');}}
          style={{marginLeft: "25px", marginBottom: "25px", background: "black"}} variant="contained" endIcon={<SendIcon />}>
          SUBMIT SHIFTS
        </Button>

      <Scheduler data={data} height={1000}>
          <WeekView
            name="Cafe"
            startDayHour={9}
            endDayHour={20}
            dayScaleCellComponent={dayScaleCell}
          />
          
          <ShiftBox2 signedUpAppointments={signedUpAppointments} appointment={Appointment}></ShiftBox2>
          <SignUp2 signedUpAppointments={signedUpAppointments} setSignedUpAppointments={setSignedUpAppointments}></SignUp2>

        </Scheduler>
      </Paper>
    );
  }


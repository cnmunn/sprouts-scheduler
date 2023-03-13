import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import Room from '@mui/icons-material/Room';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import classNames from 'clsx';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import { Button } from '@mui/material';

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
    background: 'url(https://random.dog/d4145aec-cb32-444b-8ea9-3e64b2076b60.jpg)',
  },
  [`&.${classes.secondRoom}`]: {
    background: './demo-data/imgs/Fridge.png',
  },
  [`&.${classes.thirdRoom}`]: {
    background: './demo-data/imgs/Distro.png',
  },
  [`&.${classes.fourthRoom}`]: {
    background: './demo-data/imgs/Eats.png',
  },
  [`&.${classes.header}`]: {
    height: '0px', // 260px
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
      onClick={() => alert(JSON.stringify(appointmentData))}
      className={classes.commandButton}
      size="large"
    >
      <MoreIcon />
    </StyledIconButton>
  </StyledAppointmentTooltipHeader>
));

const Content = (({
  children, appointmentData, ...restProps
}) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
    <Grid container alignItems="center">
    <StyledGrid item xs={2} className={classes.textCenter}>
        <StyledRoom className={classes.icon} />
      </StyledGrid>
      <Grid item xs={10}>
        <span>{appointmentData.location}</span>
      </Grid>
      <Grid item xs={10}>
        <Button variant="outlined" onClick={handleShiftSignup(appointmentData)}>Sign-Up</Button>
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
));

const CommandButton = (({
  ...restProps
}) => (
  <StyledAppointmentTooltipCommandButton {...restProps} className={classes.commandButton} />
));

const handleShiftSignup = (({
  appointmentData
}) => (
  console.log(appointmentData)
));

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.shiftTimes,
      parentCallback: this.props.shiftTimesCallback
    };
  };

  render() {
    const { data } = this.state;
    const {parentCallback} = this.state;

    return (
      <Paper>
      <Scheduler data={data} height={1000}>
          <WeekView
            name="Cafe"
            startDayHour={9}
            endDayHour={20}
            dayScaleCellComponent={dayScaleCell}
          />
          
          <Appointments/>
          <AppointmentTooltip
          contentComponent={Content}
          headerComponent={Header}
          commandButtonComponent={CommandButton}
          showCloseButton
          />
        </Scheduler>
      </Paper>
    );
  }
}

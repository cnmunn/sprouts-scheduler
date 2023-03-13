import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import Room from '@mui/icons-material/Room';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
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

const Content = (({
  children, appointmentData, ...restProps
}) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
    <Grid container alignItems="center">
      <Grid item xs={10}>
        <span>{appointmentData.location}</span>
      </Grid>
      <Grid item xs={10}>
        <Button variant="outlined" onClick={handleShiftSignup(appointmentData)}>Sign-Up</Button>
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
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
            endDayHour={16}
            dayScaleCellComponent={dayScaleCell}
          />
          
          <Appointments />
          <AppointmentTooltip
          contentComponent={Content}
          showCloseButton
          />
        </Scheduler>
      </Paper>
    );
  }
}

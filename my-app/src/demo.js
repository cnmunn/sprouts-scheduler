import * as React from 'react';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from './demo-data/today-appointments';

const ExternalViewSwitcher = ({
  currentViewName,
  onChange,
}) => (
  <RadioGroup
    aria-label="Views"
    style={{ flexDirection: 'row' }}
    name="views"
    value={currentViewName}
    onChange={onChange}
  >
    <FormControlLabel value="Cafe" control={<Radio />} label="Cafe" />
    <FormControlLabel value="Eats" control={<Radio />} label="Eats" />
    <FormControlLabel value="Distro" control={<Radio />} label="Distro" />
    <FormControlLabel value="Fridge" control={<Radio />} label="Fridge" />
  </RadioGroup>
);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      currentViewName: 'Cafe',
      currentDate: '2023-03-01',
    };

  this.commitChanges = this.commitChanges.bind(this);

  this.currentViewNameChange = (e) => {
  this.setState({ currentViewName: e.target.value });
  };
}

commitChanges({ added, changed, deleted }) {
  this.setState((state) => {
    let { data } = state;
    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      data = [...data, { id: startingAddedId, ...added, tab: this.state.currentViewName }];
    }
    if (changed) {
      data = data.map(appointment => (
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
    }
    if (deleted !== undefined) {
      data = data.filter(appointment => appointment.id !== deleted);
    }
    return { data };
  });
}



  render() {
    const { data, currentViewName, currentDate } = this.state;

    return (
      <React.Fragment>
        <ExternalViewSwitcher
          currentViewName={currentViewName}
          onChange={this.currentViewNameChange}
        />
      <Paper>
      <Scheduler
  data={data.filter(appointment => appointment.tab === currentViewName)}
  height={1000}
>
          <ViewState
              defaultCurrentDate="2023-03-01"
              currentDate={currentDate}
              currentViewName={currentViewName}
            />

          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <IntegratedEditing />
          <WeekView
            name="Cafe"
            startDayHour={9}
            endDayHour={19}
          />

          <WeekView
              name="Eats"
              startDayHour={9}
              endDayHour={19}
            />

          <WeekView
            name="Distro"
            startDayHour={9}
            endDayHour={19}
          />

          <WeekView
            name="Fridge"
            startDayHour={9}
            endDayHour={19}
          />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm/>
        </Scheduler>
      </Paper>
      </React.Fragment>
    );
  }
}

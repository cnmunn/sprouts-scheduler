import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Resources,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from './demo-data/today-appointments';

const StyledDiv = styled('div')(({ theme }) => ({
    [`&.${classes.container}`]: {
      display: 'flex',
      marginBottom: theme.spacing(2),
      justifyContent: 'flex-end',
    },
    [`& .${classes.text}`]: {
      ...theme.typography.h6,
      marginRight: theme.spacing(2),
    },
  }));

  const ResourceSwitcher = (
    ({
      mainResourceName, onChange, resources,
    }) => (
      <StyledDiv className={classes.container}>
        <div className={classes.text}>
          Main resource name:
        </div>
        <Select
          variant="standard"
          value={mainResourceName}
          onChange={e => onChange(e.target.value)}
        >
          {resources.map(resource => (
            <MenuItem key={resource.fieldName} value={resource.fieldName}>
              {resource.title}
            </MenuItem>
          ))}
        </Select>
      </StyledDiv>
    )
  );

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      mainResourceName: 'Initiative',
      currentDate: '2023-03-01',
      resources: [{
        fieldName: 'location',
        title: 'Location',
        instances: [
          { id: 'Cafe', text: 'Cafe' },
          { id: 'Eats', text: 'Eats' },
          { id: 'Distro', text: 'Distro' },
          { id: 'Fridge', text: 'Fridge' },
        ],
      },],
    };

  this.commitChanges = this.commitChanges.bind(this);

  this.currentViewNameChange = (e) => {
  this.setState({ currentViewName: e.target.value });
  };

  this.changeMainResource = this.changeMainResource.bind(this);
  }

  changeMainResource(mainResourceName) {
    this.setState({ mainResourceName });
  }


commitChanges({ added, changed, deleted }) {
  this.setState((state) => {
    let { data } = state;
    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      data = [...data, { id: startingAddedId, ...added }];
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
    const { data, currentViewName, currentDate, mainResourceName } = this.state;

    return (
      <React.Fragment>

        <ResourceSwitcher
          resources={resources}
          mainResourceName={mainResourceName}
          onChange={this.changeMainResource}
        />

        <ExternalViewSwitcher
          currentViewName={currentViewName}
          onChange={this.currentViewNameChange}
        />
      <Paper>
        <Scheduler
          data={data}
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
            startDayHour={9}
            endDayHour={19}
          />

          <Resources
              data={resources}
              mainResourceName={mainResourceName}
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

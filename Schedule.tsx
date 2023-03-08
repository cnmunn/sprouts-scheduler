import * as React from 'react';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

interface Appointment {
  title: string;
  startDate: Date;
  endDate: Date;
}

interface AppState {
  data: Appointment[];
  currentDate: string;
}

const appointments: Appointment[] = [
  {
    title: 'Meeting with Tom',
    startDate: new Date(2023, 2, 7, 10, 0),
    endDate: new Date(2023, 2, 7, 11, 0),
  },
  {
    title: 'Lunch with Susan',
    startDate: new Date(2023, 2, 7, 12, 0),
    endDate: new Date(2023, 2, 7, 13, 0),
  },
  {
    title: 'Call with John',
    startDate: new Date(2023, 2, 8, 14, 0),
    endDate: new Date(2023, 2, 8, 15, 0),
  },
];

class App extends React.PureComponent<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      data: appointments,
      currentDate: '2023-03-07',
    };
  }

  render() {
    const { data, currentDate } = this.state;

    return (
      <Scheduler data={data} height={660}>
        <ViewState currentDate={currentDate} />
        <WeekView
          startDayHour={8}
          endDayHour={18}
          intervalCount={1}
          dayScaleLayoutComponent={() => null}
        />
        <Appointments />
        <AppointmentTooltip showCloseButton />
      </Scheduler>
    );
  }
}

export default App;

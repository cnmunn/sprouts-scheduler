import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Demo from './demo';
import Container from '@mui/material/Container';

import {appointments as cafeShiftTimes} from './demodata/appointments.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const shiftTimesCallback = (childData) => {
    alert(childData);
  }

  return (
    <Container maxWidth="md">
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Café" {...a11yProps(0)} />
          <Tab label="Fridge" {...a11yProps(1)} />
          <Tab label="Distro" {...a11yProps(2)} />
          <Tab label="Community Eats" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Demo shiftTimes={cafeShiftTimes.filter(l => l.location === 'Cafe')} shiftTimesCallback={shiftTimesCallback}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Demo shiftTimes={cafeShiftTimes.filter(l => l.location === 'Fridge')} shiftTimesCallback={shiftTimesCallback}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Demo shiftTimes={cafeShiftTimes.filter(l => l.location === 'Distro')} shiftTimesCallback={shiftTimesCallback}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Demo shiftTimes={cafeShiftTimes.filter(l => l.location === 'Eats')} shiftTimesCallback={shiftTimesCallback}/>
      </TabPanel>
    </Box>
    </Container>
  );
}
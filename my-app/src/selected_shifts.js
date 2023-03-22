import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function BasicList({ signedUpAppointments }) {
  return (
    <Box sx={{ margin: '15px', padding: '15px', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="title">
        <List>
          <ListItem disablePadding>
            <ListItemText primary="Selected Shifts" />
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="selected_shifts">
        <List>
          {signedUpAppointments.map((appointment) => (
            <ListItem key={appointment.id} disablePadding>
              <ListItemText primary={appointment.location + ": " + appointment.startDate} />
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
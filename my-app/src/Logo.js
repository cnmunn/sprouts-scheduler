import * as React from "react";
  
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "@mui/icons-material/Image"
  
export default function Logo() {
  return (
      <AppBar style={{ background: '#7f7f7f' }} position="static">
        <Toolbar>
         <Image
            style={{ width: 50, height: 50, padding: 20}}
            source={{uri:'/demo-data/imgs/Logo.png'}}
            />
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Sprouts Scheduler
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}
import * as React from "react";
  
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "@mui/icons-material/Image"
  
export default function NavBar() {
  return (
      <AppBar style={{ background: '#D9D9D9', border: "solid", borderWidth: "1px", borderColor: "black" }} position="static">
        <Toolbar>
         {/* <Image
            style={{ width: 50, height: 50, padding: 20}}
            source={{src:require('./demodata/imgs/Logo.png')}}
            /> */}
          <Typography style={{color: "black"}} variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            USER'S CALENDAR
          </Typography>
          <Button style={{color: "black "}}color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
  );
}


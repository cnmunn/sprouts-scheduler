import * as React from "react";
  
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "@mui/icons-material/Image"

export default function Logo() {
    return (
      <AppBar style={{background: '#ffffff' }} position="static">
          <Image
            img src={require('./demo-data/imgs/Logo.png')} alt="logo"
            height={100}
            width={100}
            style={{ alignSelf: 'center' }}
            />
        {/* <img style={{display: "flex", width: "100px", height: "100px",}}src={require('./demo-data/imgs/Logo.png')} /> */}
      </AppBar>
  );
  }
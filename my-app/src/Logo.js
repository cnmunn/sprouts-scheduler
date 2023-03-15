import * as React from "react";
  
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "@mui/icons-material/Image"

export default function Logo() {
    return (
      <AppBar style={{background: '#ffffff' }} position="static">
       <div style={{ display: "flex", justifyContent: "center" }}>
  <img
    style={{ width: "100px", height: "100px" }}
    src={require("./demodata/imgs/Logo.png")}
    alt="Logo"
  />
</div>
        {/* <img style={{display: "flex", justifyContent: "center", width: "100px", height: "100px",}}src={require('./demodata/imgs/Logo.png')} /> */}
      </AppBar>
  );
  }
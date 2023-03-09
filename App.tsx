import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import Demo from './Schedule';
import Container from '@mui/material/Container';
import { AppRegistry, Platform } from 'react-native';
import {name as appName} from './app.json';


ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Container maxWidth="md">    
         <Demo />
</Container>
    </StyledEngineProvider>
  </React.StrictMode>
);

AppRegistry.registerComponent(appName, () => Demo);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById(appName);
    AppRegistry.runApplication(appName, { rootTag });
}
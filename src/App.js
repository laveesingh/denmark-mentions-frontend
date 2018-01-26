import React, { Component } from 'react';
import { 
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Home from './components/home'
import {
  createMuiTheme,
  MuiThemeProvider
} from 'material-ui/styles'
import {
  green, purple, red, white
} from 'material-ui/colors'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Times New Roman',
    textColor: 'white',
  },
  palette: {
    primary: {
      ...green,
      500: '#37a000'
    },
    secondary: {
      ...purple,
      A400: '#00e677'
    },
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path='/' render={
              props => <Home {...props} />
            } />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;

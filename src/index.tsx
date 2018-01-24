import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, } from 'react-router-redux';
import {
   Route,
  //  Redirect
   } from 'react-router';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import './index.css';

import { store, history } from './store/store';

console.debug('🦄  Transmute  🦄');

import HomePage from './components/Home/HomePage';
import LegalPage from './components/Legal/LegalPage';


import lightBaseTheme from './theme'

const lightMuiTheme = getMuiTheme(lightBaseTheme);

ReactDOM.render(
  <MuiThemeProvider muiTheme={lightMuiTheme}>
  <Provider store={store}>
    <ConnectedRouter history={history}>
   
        <div style={{ height: '100%' }}>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/legal" component={LegalPage} />
        </div>
     
    </ConnectedRouter>
  </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);

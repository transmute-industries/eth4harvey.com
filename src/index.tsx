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
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles';
import './index.css';

import { store, history } from './store/store';

console.debug('🦄  Transmute  🦄');

import HomePage from './components/Home/HomePage';
import DonatePage from './components/Donate/DonatePage'
import { getAccounts } from './store/transmute/actions';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

store.dispatch(getAccounts());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div style={{ height: '100%' }}>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/donate" component={DonatePage} />
        </div>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
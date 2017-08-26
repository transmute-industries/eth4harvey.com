import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import KeyBoardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyBoardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';

import { push } from 'react-router-redux';

import { store } from '../../../store/store';

// var QRCode = require('qrcode.react');

// import TransmuteFramework from '../../../transmute';

import TransmuteSnackbar from '../Snackbar/Snackbar';

import Web3SettingsForm from '../Web3SettingsForm/Web3SettingsForm';

// import {
//   // createEventStore,
//   UNSAFE_updateLightWallet
// } from '../../../actions/transmute';


class Login extends React.Component {
  static muiName = 'FlatButton';
  render() {
    return (
      <FlatButton
        {...this.props}
        label="Login"
        onTouchTap={() => {
          store.dispatch({
            type: 'LOGOUT',
            payload: {}
          });
        }}
      />
    );
  }
}

class TransmuteAppBar extends React.Component<any, any> {
  state = {
    logged: true,
    open: false,
    settingsOpen: false,
    isQRCodeDisplayed: false,
    isSelectEventStoreDialogOpen: false
  };
  handleChange = (event: any, logged: any) => {
    this.setState({ logged: logged });
  }
  handleToggle = () => this.setState({ open: !this.state.open });

  handleTitleTouch = () => {
    // do nothing
  }
  render() {
    return (
      <div>
        <AppBar
          title="Hurricane Harvey Relief"
          onTitleTouchTap={this.handleTitleTouch}
          iconElementLeft={<IconButton onTouchTap={this.handleToggle}><Menu /></IconButton>}
          iconElementRight={this.state.logged ? <IconMenu

            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem
              primaryText="Sign out"
              onTouchTap={() => {
                store.dispatch({
                  type: 'LOGOUT',
                  payload: {}
                });
              }}
            />
            <MenuItem
              primaryText="QR Transmute"
              onTouchTap={() => {
                this.setState({
                  isQRCodeDisplayed: true
                })
              }}
            />
          </IconMenu> : <Login />}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })}>
          <MenuItem
            onTouchTap={() => {
              store.dispatch(push('/hurricane-harvey-ico'));
            }}
          >
            Home
          </MenuItem>

          <MenuItem
            onTouchTap={() => {
              store.dispatch(push('/hurricane-harvey-ico/donate'));
            }}
          >
            Donate
          </MenuItem>

          <MenuItem
            onTouchTap={() => {
              store.dispatch(push('/hurricane-harvey-ico/about'));
            }}
          >
            About
          </MenuItem>

          <MenuItem
            rightIcon={(this.state.settingsOpen ? <KeyBoardArrowDown /> : <KeyBoardArrowUp />)}
            onTouchTap={() => {
              this.setState({ settingsOpen: !this.state.settingsOpen })
            }}
          >
            Advanced Settings
          </MenuItem>
          {
            this.state.settingsOpen &&
            <div style={{ padding: '16px' }}>
              <Web3SettingsForm />
            </div>
          }
         
        </Drawer>
        <Dialog
          title={'Transmute Firebase JWT'}
          actions={[]}
          modal={false}
          open={this.state.isQRCodeDisplayed}
          onRequestClose={() => {
            this.setState({ isQRCodeDisplayed: false });
          }}
        >
          <div>
            {/* <QRCode value="http://facebook.github.io/react/" size={256} /> */}
          </div>
        </Dialog>
        <TransmuteSnackbar />
      </div>
    );
  }
}

export default connect((state: any) => ({
  transmute: state.transmute
}))(TransmuteAppBar);


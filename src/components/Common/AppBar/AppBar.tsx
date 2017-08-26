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
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { store } from '../../../store/store';
import TransmuteSnackbar from '../Snackbar/Snackbar';
import Web3SettingsForm from '../Web3SettingsForm/Web3SettingsForm';
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
              primaryText="Habitat Texas"
              onTouchTap={() => {
                window.location.href = "http://habitattexas.org/";
              }}
            />
            <MenuItem
              primaryText="Get MetaMask Wallet"
              onTouchTap={() => {
                window.location.href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en";
              }}
            />
            <MenuItem
              primaryText="View Habitat Wallet"
              onTouchTap={() => {
                window.location.href = "https://etherscan.io/address/0xeD81c9058C78e28886E5411A2d55b42eB515f6E0";
              }}
            />
            <MenuItem
              primaryText="Open Source"
              onTouchTap={() => {
                window.location.href = "https://github.com/transmute-industries/eth4harvey.com";
              }}
            />
          </IconMenu> : <Login />}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })}>
          <MenuItem
            onTouchTap={() => {
              store.dispatch(push('/'));
            }}
          >
            Home
          </MenuItem>

          <MenuItem
            onTouchTap={() => {
              store.dispatch(push('/donate'));
            }}
          >
            Donate
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
        <TransmuteSnackbar />
      </div>
    );
  }
}

export default connect((state: any) => ({
  transmute: state.transmute
}))(TransmuteAppBar);


import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { store } from '../../../store/store';
import TransmuteSnackbar from '../Snackbar/Snackbar';

class TransmuteAppBar extends React.Component<any, any> {
  state = {
    open: false,
    settingsOpen: false,
    isQRCodeDisplayed: false,
    isSelectEventStoreDialogOpen: false
  };
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
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })}>
          <MenuItem
            primaryText="Home"
            onTouchTap={() => {
              store.dispatch(push('/'));
            }}
          />
          <MenuItem
            primaryText="Habitat Texas Site"
            onTouchTap={() => {
              window.location.href = "http://habitattexas.org/";
            }}
          />
          <MenuItem
            primaryText="Habitat Wallet"
            onTouchTap={() => {
              window.location.href = "https://etherscan.io/address/0xeD81c9058C78e28886E5411A2d55b42eB515f6E0";
            }}
          />
          <MenuItem
            primaryText="Get MetaMask Wallet"
            onTouchTap={() => {
              window.location.href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en";
            }}
          />
          <MenuItem
            primaryText="Open Source"
            onTouchTap={() => {
              window.location.href = "https://github.com/transmute-industries/eth4harvey.com";
            }}
          />
          <MenuItem
            primaryText="Terms And Conditions"
            onTouchTap={() => {
              store.dispatch(push('/legal'));
            }}
          />
        </Drawer>
        <TransmuteSnackbar />
      </div>
    );
  }
}

export default connect((state: any) => ({
  transmute: state.transmute
}))(TransmuteAppBar);

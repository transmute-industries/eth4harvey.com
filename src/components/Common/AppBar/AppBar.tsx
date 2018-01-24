import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
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
          title="ETH 4 Harvey"
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
        
          <Divider />
          <Subheader>Habitat For Humanity</Subheader>
          <MenuItem
            primaryText="Texas Site"
            onTouchTap={() => {
              window.location.href = "http://habitattexas.org/";
            }}
          />
          <MenuItem
            primaryText="Public Wallet"
            onTouchTap={() => {
              window.location.href = "https://etherscan.io/address/0xfcBFcC2395BD2ad0811a246883Eb969d4D9442cD";
            }}
          />
          <Divider />
          <Subheader>Resources</Subheader>
          <MenuItem
            primaryText="Website Source"
            onTouchTap={() => {
              window.location.href = "https://github.com/transmute-industries/eth4harvey.com";
            }}
          />
          <Divider />
          <Subheader>Legal</Subheader>
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

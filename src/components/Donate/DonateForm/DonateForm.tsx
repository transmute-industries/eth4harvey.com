import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
    TextField,
} from 'redux-form-material-ui';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { sendEther } from '../../../store/transmute/actions';
import './DonateForm.css'

import {
    store
} from '../../../store/store';


import TransmuteFramework from '../../../transmute'
import { getAccounts } from '../../../store/transmute/actions';

if (TransmuteFramework.web3){
    store.dispatch(getAccounts());
}

export class FormComponent extends React.Component<any, any> {

    state = {
      open: false,
    };

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

    render() {
      const actions = [
        <FlatButton
          label="Close"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Install Metamask"
          primary={true}
          keyboardFocused={true}
          onClick={() => window.location.href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"}
        />,
      ];

        return (
            <div>
              <form className='DonateForm' style={{ width: '100%' }}>
                <h4>Your Wallet Address</h4>
                <Field name="fromAddress" style={{ width: '100%' }} component={TextField} hintText="From Address" />
                <br />
                <h4>Habitat Texas Relief Fund Wallet</h4>
                <Field name="toAddress" disabled style={{ width: '100%' }} component={TextField} hintText="To Address" />
                <br />
                <h4>Donation Amount in ETH</h4>
                <Field name="donationAmount" style={{ width: '100%' }} component={TextField} hintText="Donation Amount" />
                <br />
                <RaisedButton
                    secondary={true}
                    label="Donate"
                    onTouchTap={() => {
                        if (!TransmuteFramework.web3 || !this.props.transmute.addresses.length) {
                            this.handleOpen();
                        } else {
                            this.props.handleSubmit();
                        }
                    }}
                    style={{ float: 'right' }}
                />
              </form>
              <Dialog
                title="Metamask Required"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                ETH4Harvey requires Metamask to donate through the site. 
                After unlocking your Metamask account, you should see your address in the donation form.
                <br/>
                <br/>
                Donations can also be made by sending ETH to <a href="https://etherscan.io/address/0xfcBFcC2395BD2ad0811a246883Eb969d4D9442cD">0xfcBFcC2395BD2ad0811a246883Eb969d4D9442cD</a>
              </Dialog>
            </div>
        );
    }
}

const form = reduxForm({
    form: 'example',
    enableReinitialization: true
})(FormComponent);

let fromAddress: string;

if (TransmuteFramework.web3) {
    fromAddress = TransmuteFramework.web3.eth.accounts[0]
}

export default connect(
    ({ transmute }) => ({
        transmute: transmute,
        initialValues: {
            fromAddress: fromAddress,
            toAddress: '0xfcBFcC2395BD2ad0811a246883Eb969d4D9442cD',
            // https://etherscan.io/address/0xfcBFcC2395BD2ad0811a246883Eb969d4D9442cD
            donationAmount: .1,
            provider: transmute.provider,
        },
        onSubmit: (formData: any) => {
            store.dispatch(sendEther(formData.fromAddress, formData.toAddress, formData.donationAmount));
        }
    }),
)(form) as any;

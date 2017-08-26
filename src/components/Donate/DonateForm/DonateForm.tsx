import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
    TextField,
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { sendEther } from '../../../store/transmute/actions';
import './DonateForm.css'
import Paper from 'material-ui/Paper'
import {
    store
} from '../../../store/store';


import TransmuteFramework from '../../../transmute'

export class FormComponent extends React.Component<any, any> {

    render() {

        return (
            <Paper>
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
                            this.props.handleSubmit();
                        }}
                    />
                </form>
            </Paper>
        );
    }
}

const form = reduxForm({
    form: 'example',
    enableReinitialization: true
})(FormComponent);

export default connect(
    ({ transmute }) => ({
        transmute: transmute,
        initialValues: {
            fromAddress: TransmuteFramework.web3.eth.accounts[0],
            toAddress: '0xeD81c9058C78e28886E5411A2d55b42eB515f6E0',
            // https://etherscan.io/address/0xeD81c9058C78e28886E5411A2d55b42eB515f6E0
            donationAmount: .1,
            provider: transmute.provider,
        },
        onSubmit: (formData: any) => {
            store.dispatch(sendEther(formData.fromAddress, formData.toAddress, formData.donationAmount));
        }
    }),
)(form) as any;

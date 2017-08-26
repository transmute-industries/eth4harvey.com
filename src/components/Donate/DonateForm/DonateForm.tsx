import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import { RadioButton } from 'material-ui/RadioButton'
// import MenuItem from 'material-ui/MenuItem';
// import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
    //   AutoComplete,
    //   Checkbox,
    //   DatePicker,
    //   TimePicker,
    //   RadioButtonGroup,
    // SelectField,
    //   Slider,
    TextField,
    //   Toggle
} from 'redux-form-material-ui';

import RaisedButton from 'material-ui/RaisedButton';
import {
     store
} from '../../../store/store';

import { sendEther } from '../../../store/transmute/actions';

import './DonateForm.css'
export class FormComponent extends React.Component<any, any> {

    render() {

        return (
            <form className='DonateForm'>
                <Field name="fromAddress" component={TextField} hintText="From Address" />
                <Field name="toAddress" component={TextField} hintText="To Address" />
                <Field name="donationAmount" component={TextField} hintText="Donation Amount" />
                <br />
                <RaisedButton
                    secondary={true}
                    label="Donate"
                    onTouchTap={() => {
                        this.props.handleSubmit();
                    }}
                />
            </form>
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
            defaultAddress: transmute.defaultAddress,
            fromAddress: transmute.addresses[0],
            toAddress: transmute.addresses[1],
            donationAmount: 1,

            provider: transmute.provider,
        },
        onSubmit: (formData: any) => {
            // console.debug('submit donaton!!!!', formData)
            store.dispatch(sendEther(formData.fromAddress, formData.toAddress, formData.donationAmount));
        }
    }),
)(form) as any;

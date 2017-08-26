import * as React from 'react';
import './DonatePage.css';

import AppBar from '../Common/AppBar/AppBar'

import DonateForm from './DonateForm/DonateForm'

export default class DonatePage extends React.Component<any, any> {

    render() {
        return (
            <div className="donate-container">
                <AppBar/>
                <DonateForm/>
            </div>
        );
    }
}

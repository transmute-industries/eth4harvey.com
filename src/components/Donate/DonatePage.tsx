import * as React from 'react';
import './DonatePage.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from '../Common/AppBar/AppBar'
import DonateForm from './DonateForm/DonateForm'
const logo = require('../../images/harvey/habitat.png');
// import Paper from 'material-ui/Paper'
export default class DonatePage extends React.Component<any, any> {
    render() {
        return (
            <div className="donate-container">
                <AppBar />
                <Grid fluid={true} style={{ padding: '32px' }}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <img className="habitat-logo" src={logo} />
                        </Col>
                        <Col xs={12} sm={8} style={{paddingLeft: '8px', paddingRight: '8px', paddingTop: '0px'}}>
                        Habitat for Humanity is active in long-term recovery efforts after disasters.
                        Other agencies offer immediate support in the hours after a disaster.
                        Habitat is on the ground for weeks and months afterward.
                        Habitat Texas serves as the state-level contact to interface with
                        relief agencies and to assist affiliates in developing disaster response programs.
                        We also coordinate the Texas affiliate response with the affected affiliates.
                        Of course, planning is the best defense, so we help teach resilient building
                        techniques and offer disaster planning help.
                        </Col>
                    </Row>
                    <Row style={{paddingTop: '20px'}}>
                        <Col xs={12} sm={12}>
                            <DonateForm />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

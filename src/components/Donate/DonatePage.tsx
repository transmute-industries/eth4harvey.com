import * as React from 'react';
import './DonatePage.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from '../Common/AppBar/AppBar'
import DonateForm from './DonateForm/DonateForm'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';

var QRCode = require('qrcode.react');

export default class DonatePage extends React.Component<any, any> {
    render() {
        return (
            <div >
                <AppBar />
                <Grid fluid={true} style={{ padding: '32px' }}>
                  <Card>
                    <CardTitle title="Habitat for Humanity" subtitle="Hurricane Harvey Donation Form" />
                    <CardText>
                    Habitat for Humanity is active in long-term recovery efforts after disasters.
                Other agencies offer immediate support in the hours after a disaster.
                Habitat is on the ground for weeks and months afterward.
                Habitat Texas serves as the state-level contact to interface with
                relief agencies and to assist affiliates in developing disaster response programs.
                We also coordinate the Texas affiliate response with the affected affiliates.
                Of course, planning is the best defense, so we help teach resilient building
                techniques and offer disaster planning help.
                    </CardText>
                    <CardActions>
                    <Row middle="xs" >
                    <Col xs={12} sm={4}>
                        <div style={{ 'text-align': 'center'}}>
                          <QRCode value="0xeD81c9058C78e28886E5411A2d55b42eB515f6E0" size={256} />
                          <br/>
                          <p style={{ 'font-size' : 14 }}>Habitat For Humanity Texas Wallet</p>
                          <p style={{ 'font-size' : 10 }}>0xeD81c9058C78e28886E5411A2d55b42eB515f6E0</p>
                        </div>
                    </Col>
                        <Col xs={12} sm={8}>
                            <DonateForm />
                        </Col>
                    </Row>
                    </CardActions>
                  </Card>
                </Grid>
            </div>
        );
    }
}

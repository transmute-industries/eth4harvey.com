import * as React from 'react';
import { Particle } from '../Common/Particle/Particle';
import './HomePage.css';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'react-router-redux';
import { store } from '../../store/store';

import { Grid, Row, Col } from 'react-flexbox-grid';
const transmuteLogo = require('../../images/logo-white.png');
const habitatLogo = require('../../images/harvey/habitat.png');

export default class HomePage extends React.Component<any, any> {
    launchDemo(path: string) {
        console.debug(path);
        store.dispatch(push(path));
    }
    render() {
        return (
            <Particle>
                <div className="cta-c">
                    <Grid fluid={true} >
                        <Row middle="xs" >
                            <Col xs={12} sm={12}>
                                <img className="habitatLogo" src={habitatLogo} style={{marginTop: '32px'}}/>
                                <h3>ETH Relief for Hurricane Harvey Victims</h3>
                                <h5>ETH4Harvey Campaign Open Aug. 26 - Sept. 25</h5>
                                <p className="blurb">
                                    Habitat for Humanity Texas is now accepting donations in Ether (ETH).
                                    Use your ETH to help rebuild the communities and lives affected by Hurricane Harvey.
                                    100% of the proceeds are donated directly to Habitat for Humanity Texas to
                                    fund their long term disaster relief efforts in Harvey's aftermath.
                                </p>
                                <RaisedButton
                                    secondary={true}
                                    label="Donate ETH"
                                    onTouchTap={() => {
                                        this.launchDemo('/donate');
                                    }}
                                />
                                <a href="https://transmute.industries" target="_blank">
                                    <img className="transmuteLogo" src={transmuteLogo} />
                                </a>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Particle>
        );
    }
}

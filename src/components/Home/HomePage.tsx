import * as React from 'react';
import { Particle } from '../Common/Particle/Particle';
import './HomePage.css';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'react-router-redux';
import { store } from '../../store/store';

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
                    <img className="habitatLogo" src={habitatLogo} />
                    <p>
                    Habitat for Humanity is active in long-term recovery efforts after disasters. 
                    Other agencies offer immediate support in the hours after a disaster. 
                    Habitat is on the ground for weeks and months afterward. 
                    Habitat Texas serves as the state-level contact to interface with relief 
                    agencies and to assist affiliates in developing disaster response programs. 
                    </p>
                    <div className="btn-c">
                        <RaisedButton
                            secondary={true}
                            label="Donate ETH"
                            onTouchTap={() => {
                                this.launchDemo('/hurricane-harvey-relief/donate');
                            }}
                        />
                    </div>
                </div>
                <img className="logo" src={transmuteLogo} />
            </Particle>
        );
    }
}

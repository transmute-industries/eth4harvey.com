import * as React from 'react';
import { Particle } from '../Common/Particle/Particle';
import './HomePage.css';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'react-router-redux';
import { store } from '../../store/store';
const logo = require('../../images/logo-white.png');

export default class HomePage extends React.Component<any, any> {
    launchDemo(path: string) {
        console.debug(path);
        store.dispatch(push(path));
    }
    render() {
        return (
            <Particle>
                <div className="logo-c">
                    <img className="logo" src={logo} />
                </div>
                <div className="cta-c">
                    <div className="cta">
                        <h4>Hurricane Harvey Relief ICO</h4>
                        <div className="btn-c">
                            <div className="material-btn">
                                <RaisedButton
                                    secondary={true}
                                    label="Donate"
                                    onTouchTap={() => {
                                        this.launchDemo('/hurricane-harvey-ico/donate');
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Particle>
        );
    }
}

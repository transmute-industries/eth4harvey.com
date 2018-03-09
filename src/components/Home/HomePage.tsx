import * as React from 'react';
import { Particle } from '../Common/Particle/Particle';
import './HomePage.css';

// import { push } from "react-router-redux";
// import { store } from "../../store/store";

import AppBar from '../Common/AppBar/AppBar';

const transmuteLogo = require('../../images/logo-white.png');
const habitatLogo = require('../../images/harvey/habitat.png');

import { CopyToClipboard } from 'react-copy-to-clipboard';

import RaisedButton from 'material-ui/RaisedButton';

import { ContentContentCopy } from 'material-ui/svg-icons';

const iconStyles = {
  marginRight: 24
};

import Tweet from '../Common/Tweet/Tweet';

export default class HomePage extends React.Component<any, any> {
  state = {
    value: '',
    copied: false
  };

  render() {
    return (
      <div>
        <AppBar />
        <div className="main-text">
          <div className="intro">
            <h1>
              Habitat for Humanity Texas is now accepting donations in Ether
              (ETH) and Bitcoin (BTC).
            </h1>

            <h2>
              Help rebuild the communities and lives affected by Hurricane
              Harvey. 100% of the proceeds are donated directly to Habitat for
              Humanity Texas to fund their long term disaster relief efforts in
              Harvey's aftermath.
            </h2>
            <h2>
              <a
                style={{ color: '#CCFF90' }}
                href="http://habitattexas.org/2018/03/cryptocurrency-donation-tax-recognition-form-ethereum-bitcoin-hbtx501c3/"
                rel="noopener noreferrer"
              >
                Cryptocurrency Donation Tax Recognition Form
              </a>
            </h2>
          </div>
          <h3>Ethereum:</h3>
          <div className="donate-addresses">
            <span
              style={{
                width: '30%',
                paddingLeft: '10px',
                fontSize: '1.2em',
                color: '#CCFF90'
              }}
            >
              0xfcBFcC2395BD2ad0811a246883Eb969d4D9442cD
            </span>
            <CopyToClipboard
              className="copy-eth"
              text={'0xfcBFcC2395BD2ad0811a246883Eb969d4D9442cD'}
              onCopy={(value: any) => {
                this.setState({ value, copied: true });
              }}
            >
              <RaisedButton
                label="Copy Ethereum Address"
                labelPosition="after"
                secondary={true}
                icon={<ContentContentCopy style={iconStyles} color={'white'} />}
              />
            </CopyToClipboard>
          </div>
          <h3>Bitcoin</h3>
          <div className="donate-addresses">
            <span
              style={{
                paddingLeft: '10px',
                fontSize: '1.2em',
                color: '#CCFF90'
              }}
            >
              1P4q7ZhN2wBFwt4YXxfmmfg3fCQWCDUd6G
            </span>
            <CopyToClipboard
              className="copy-btc"
              text={'1P4q7ZhN2wBFwt4YXxfmmfg3fCQWCDUd6G'}
              onCopy={(value: any) => {
                this.setState({ value, copied: true });
              }}
            >
              <RaisedButton
                label="Copy Bitcoin Address"
                labelPosition="after"
                secondary={true}
                icon={<ContentContentCopy style={iconStyles} color={'white'} />}
              />
            </CopyToClipboard>
          </div>
          <h3 style={{ color: '#fff000' }}>
            {this.state.copied ? <span>Copied: {this.state.value}</span> : null}
          </h3>
          <Tweet />
          <h5>Updates:</h5>
          January 23rd 2018
          <p>New ETH and BTC addresses for Habitat Texas.</p>
          <br />
          August 28, 2017
          <p>Deployed Ethereum Donation Site.</p>
          <Particle>
            <a href="http://habitattexas.org/" target="_blank">
              <img className="habitatLogo" src={habitatLogo} />
            </a>
            <a href="https://tranmsute.industries" target="_blank">
              <img className="transmuteLogo" src={transmuteLogo} />
            </a>
          </Particle>
        </div>
      </div>
    );
  }
}


import TransmuteFramework from '../../transmute';
import * as _ from 'lodash';

import { sendEth } from './middleware'

export const getAccounts = () => (dispatch: any) => {
    TransmuteFramework.web3.eth
        .getAccounts((err: any, addresses: string[]) => {
            if (err) { throw err; }
            dispatch({
                type: 'TRANSMUTE_WEB3_ACCOUNTS_RECEIVED',
                payload: addresses
            });
            if (addresses.length) {
                // let fromAddress = addresses[0];
                // dispatch(getFactoryReadModel(fromAddress));
            }
        });
};


const updateLocalStorage = (formModel: any) => {
    _.forEach(formModel, (v: any, k: any) => {
        localStorage.setItem(k, v);
    });
};

export const updateWeb3Settings = (formModel: any) => (dispatch: any) => {
    updateLocalStorage(formModel);
    window.location.href = window.location.href;
    dispatch({
        type: 'WEB3_SETTINGS_UPDATED',
        payload: formModel
    });
};

export const sendEther = (fromAddress: string, toAddress: string, amountEth: number) =>
    async (dispatch: any) => {
        let tx = await sendEth(fromAddress, toAddress, amountEth);
        dispatch({
            type: 'ETHER_SENT',
            payload: tx
        });
    };



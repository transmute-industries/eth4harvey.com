

import TransmuteFramework from '../../transmute';


export const sendEth = async (fromAccount: string, toAccount: string, amountEth: number) => {
    return new Promise((resolve, reject) => {
        TransmuteFramework.web3.eth.sendTransaction({
            from: fromAccount,
            to: toAccount,
            value: TransmuteFramework.web3.toWei(amountEth, 'ether'), 
            // gasLimit: 21000, 
            // gasPrice: 20000000000
        }, (err: any, tx:string) => {
            if (err) {
                reject(err);
            }
            console.log(tx);
            resolve(tx)
        })
    })
}
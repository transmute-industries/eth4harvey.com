
// Don't use localStorage in production!
// https://stackoverflow.com/questions/37398427/redux-testing-referenceerror-localstorage-is-not-defined
let localStorage: any = window.localStorage || (function () {
  var store = {};
  return {
    getItem: function (key: string) {
      return store[key];
    },
    setItem: function (key: string, value: any) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key: string) {
      delete store[key];
    }
  };
})();

//   import TransmuteFramework from '../../transmute';

const handlers = {
  ['TRANSMUTE_WEB3_ACCOUNTS_RECEIVED']: (state: any, action: any) => {
    let defaultAddress = action.payload[0];
    return {
      ...state,
      defaultAddress: defaultAddress,
      addresses: action.payload,
    };
  },
  ['ETHER_SENT']: (state: any, action: any) => {
    setTimeout(() => {
      let url = 'https://docs.google.com/forms/d/e/1FAIpQLSczLRDFvxfjSrZBGTqeZLffrbuXPjX8dnkzQ4hVaxRFr4EsRA/viewform?';
      url += `entry.1595606292&entry.536290352&entry.1838465892=${action.payload.amountEth}&entry.1973467202=${action.payload.tx}`
      window.location.href = url;
    }, 3 * 1000);
    return {
      ...state,
      snackbarMessage: action.payload.tx,
    };
  },
};

export const reducer = (state: any, action: any) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return {
    defaultAddress: localStorage.getItem('defaultAddress') || null,
    addresses: [],
    provider: localStorage.getItem('provider') || 'testrpc',
    ...state
  };
};

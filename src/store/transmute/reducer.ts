
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
  };
  
  export const reducer = (state: any, action: any) => {
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }
    return {
      defaultAddress: localStorage.getItem('defaultAddress') || null,
      addresses: null,
      provider: localStorage.getItem('provider') || 'testrpc',
      ...state
    };
  };
  
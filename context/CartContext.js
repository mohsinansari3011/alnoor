import React from 'react';

export const CartContext = React.createContext({
    paymentmethod : '',
    paymentmethod_title : '',
    items: [],
    customerinfo: [],
    user : [],
    addCustomerinfo: () => {},
    addItem: () => {},
    removeItem: () => {},
    addPayM: () => {},
    LoginUser: () => {},
    LogoutUser: () => {},
    SignupUser : () =>{},
});
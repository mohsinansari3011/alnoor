import React from 'react';

export const CartContext = React.createContext({
    paymentmethod : 'cod',
    paymentmethod_title : 'Cash on Delivery',
    items: [],
    customerinfo: [],
    addCustomerinfo: () => {},
    addItem: () => {},
    removeItem: () => {},
    addPayM: () => {},
});
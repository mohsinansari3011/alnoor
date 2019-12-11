import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { CartContext } from '../../context/CartContext';

export default class Cart extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };
  
  state = {
    subtotal: 0,
  };

render() {

    const { subtotal } = this.state;
  return (
    <CartContext.Consumer>
        
      {cart => {
        if (cart.items && cart.items.length > 0) {
            var total = 0;
            const sub = cart.items.map((item) =>{
                total += parseInt(item.price);
                return item.price
            })
            this.setState ({
                subtotal : total
            })
          const Items = <FlatList contentContainerStyle={styles.list}
            data={cart.items}
            keyExtractor={ item => item.id.toString() }
            renderItem={({ item }) =>
              <View style={styles.lineItem} >
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.quantity} x Rs {item.price}</Text>
                <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => cart.removeItem(item)}><Entypo name="cross" size={30} /></TouchableOpacity>
              </View>
            }
          />;
          return (
            <View style={styles.container}>
            <View> Sub total :  </View>
            <View> Delivery Charges :  { subtotal }</View>
            <View> {Items} </View>            
            <View> Proced to check out </View>
            </View>
          )
        } else {
          return (
            <View style={styles.container}>
              <Text>Cart is empty!</Text>
            </View>
          )
        }
      }}
    </CartContext.Consumer>
  );
}
}

const styles = StyleSheet.create({
lineItem: {
  flexDirection: 'row'
},
list: {
  flexDirection: 'column'
},
image: {
  width: 50,
  height: 50
},
container: {
  flex: 1,
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'center',
},
text: {
  fontSize: 20,
  padding: 5
}
});
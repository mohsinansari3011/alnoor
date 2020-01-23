import React from 'react';
import { Button, ScrollView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';


import axios from 'axios';
import WooApi from '../../components/config/wooapi';  
import { CartContext } from '../../context/CartContext';


export default class Paymentgateways extends React.Component {
  static navigationOptions = {
    title: 'Payment Gateway',
  };


    state = {
        payment_gateways : [],
     }
  

  listofpayment_gateways = () => {
    const url = `${WooApi.url.wc}payment_gateways?consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
    
    console.log(url);
    axios.get(url)
    .then(response => 
        //console.log('shipping_methods',response.data)
        this.setState({ payment_gateways: response.data })
        )
    .catch(error => console.log('error',error));

 }


   filterGateway(){
       const {payment_gateways} = this.state;
       const gateway = payment_gateways.map((item) =>{
           return item.enabled ? <View><Text>{item.title}</Text></View> : <View></View>
       })

       return gateway;
   } 
 componentWillMount(){
    this.listofpayment_gateways();
}


render() {
  return (
    <CartContext.Consumer>
        
      {cart => {
        if (cart.items && cart.items.length > 0) {

            subtotal = 0;
            cart.items.map((item) => {
                return subtotal += (parseFloat(item.price) * parseFloat(item.quantity))
            })
            
          
          return (
            <View style={styles.container}>
           
             {this.state.payment_gateways ? this.filterGateway() : <View></View>}
           
            <View style={{ marginTop: 20 , marginBottom: 10 }} >
                <Text>Total Amount ----  Rs {subtotal} </Text>
                <Button title="CONTINUE" onPress={()=>{this.props.navigation.navigate("Checkout") }}></Button>
            </View>  
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
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: 'gray',
       borderWidth: 1,
       padding:10,
    },
    submitButton: {
       backgroundColor: 'blue',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })
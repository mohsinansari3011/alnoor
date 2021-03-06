import React from 'react';
import { Button, ScrollView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity,Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

import axios from 'axios';
import WooApi from '../../components/config/wooapi';  
import { CartContext } from '../../context/CartContext';

import designVars from '../../components/config/design_variables';  
const { width: screenWidth } = Dimensions.get('window')

export default class Paymentgateways extends React.Component {
  static navigationOptions = {
    title: 'Payment Gateway',
  };


    state = {
        payment_gateways : [],
        value : ''
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


//  <RadioButton.Group
//         onValueChange={value => this.setState({ value })}
//         value={this.state.value}
//       >
//         <View>
//           <Text>First</Text>
//           <RadioButton value="first" />
//         </View>
//         <View>
//           <Text>Second</Text>
//           <RadioButton value="second" />
//         </View>
//       </RadioButton.Group>


   filterGateway(){
       const {payment_gateways} = this.state;
       const gateway = payment_gateways.map((item) =>{
           return (
            item.enabled ? <View key={item.id}>
                <Text>{item.title}</Text>
                <RadioButton value={`${item.id},${item.title}`} />
                </View> : <View></View>
           )
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
            
            //console.log('cart.paymentmethod   ',cart.paymentmethod);
            //console.log('cart.paymentmethod_title   ',cart.paymentmethod_title);
          return (
            <View style={styles.container}>
           
            <RadioButton.Group
                    onValueChange={value => cart.addPayM(value)}
                    value={cart.paymentmethod} >
                {this.state.payment_gateways ? this.filterGateway() : NULL}
            </RadioButton.Group>
            
           
             

            <View style={{ marginTop: 20 , marginBottom: 10 }} >
            <View style={{ marginTop: 5, width: screenWidth }} >
              {/* <View style={styles.totalContainer} >
               <Text style={styles.totalText}>Subtotal : Rs {subtotal}</Text>
               
               </View> */}
               <View style={styles.totalContainer} >
               
               <Text style={styles.totalText}>Total Amount : Rs {subtotal} </Text>
               </View>
            </View> 
            

                {/* <Button title="CONTINUE" onPress={()=>{this.props.navigation.navigate("Checkout") }}></Button> */}
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Checkout") }}  >
                    <Text style={{ color: '#fff', fontSize:20 }}> CONTINUE </Text>
                </TouchableOpacity>
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
    button: {
      alignItems: 'center',
      backgroundColor: designVars.primary_color,
      // padding: 10,
      width: screenWidth,
      height: 40,
      marginLeft: 20,
      // borderBottomLeftRadius: 17,
      // borderBottomRightRadius: 17,
      // borderTopLeftRadius: 17,
      // borderTopRightRadius: 17,
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
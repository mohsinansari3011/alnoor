import React from 'react';
import { Button, ScrollView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity ,Dimensions} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { CartContext } from '../../context/CartContext';

const { width: screenWidth } = Dimensions.get('window')
import designVars from '../../components/config/design_variables';  

import {
  NavigationActions , StackActions
} from 'react-navigation';


export default class Thankyou extends React.Component {
  static navigationOptions = {
    title: 'Order Completed',
  };

  constructor(props) {
    super(props);
    //const Categoryid = props.navigation.state.params.Categoryid;
    //console.log('---myprops',props.navigation.state.params.data.first_name);
    // state = {
    //   userinfo : props.navigation.state.params.data
    // }
    //data
}
  

render_dashboad(){
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Dashboard'})],
    key: null,
  });
  this.props.navigation.dispatch(resetAction);

}
render() {

  const userinfo = this.props.navigation.state.params.data;

  console.log('userinfo',userinfo)
 //this.props.navigation.navigate("Dashboard")

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
            
             
           


            <View style={{ marginTop: 20 , marginBottom: 10 }} >

                <Text> USERNAME : {userinfo.user.username}</Text>
                <Text> EMAIL:     {userinfo.user.email}</Text>
                <Text>Total Amount : Rs {subtotal} </Text>
                <Text style={{color: designVars.primary_color}}>Thank You!! Your Order has been Received Successfully!</Text>
                
                <TouchableOpacity style={styles.button} onPress={() => cart.nullcart(this.props)} >
                   <Text style={{ color: '#fff', fontSize:20 }}> Proceed to Dashboard </Text>
               </TouchableOpacity>

                
            </View>  
            </View>
          )
        } else {
          return (
            <View style={styles.container}>
            <Text>Alnoor-{Math.round(Math.random() * 1000)}  Your Order has been completed Successfully </Text>
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
},
button: {
  alignItems: 'center',
  backgroundColor: designVars.primary_color,
  // padding: 10,
  width: screenWidth,
  height: 70,
  justifyContent: 'center',
  // marginLeft: 20,
  // borderBottomLeftRadius: 17,
  // borderBottomRightRadius: 17,
  // borderTopLeftRadius: 17,
  // borderTopRightRadius: 17,
},
});
import React from 'react';
import { Button, ScrollView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import designVars from '../../components/config/design_variables';  

import { CartContext } from '../../context/CartContext';
const { width: screenWidth } = Dimensions.get('window')


export default class Cart extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };

state = {
  isuserCheck : true,
  isUser : false,
}

getuser(cart){

  //console.log('empty--cart---',cart.user);

  if(cart.user.email !== undefined) {
    this.setState({  isUser : true })
  }else{
    this.setState({  isUser : false })
  }
    this.setState({  isuserCheck : false })
}


redirect(props){

const { isUser } = this.state;

console.log('redirect ----',isUser);

if(isUser){
  this.props.navigation.navigate("Checkout");
}else{
  this.props.navigation.navigate("Login", { route: "Checkout" })
}

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
            
          
          this.state.isuserCheck ? this.getuser(cart) : ""

          const Items = <FlatList contentContainerStyle={styles.list}
            data={cart.items}
            keyExtractor={ item => item.id.toString() }
            renderItem={({ item }) =>
            
              <View style={styles.lineItem} >
                <Image style={styles.image} source={{ uri: item.image }} />
                <View>
                  
                   <Text style={styles.cartItemText}  numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                   <Text style={styles.cartItemQtyPrice}>{item.quantity} x Rs {item.price}</Text>
                   
                </View>
                <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => cart.removeItem(item)}><Entypo name="cross" size={30} /></TouchableOpacity>
              </View>
            }
          />;
          return (
            <View style={styles.container}>
            
             
            <ScrollView>
            <View style={{ marginTop: 5, width: screenWidth }} >
              
            </View>
              {Items}
              </ScrollView>
            
            <View style={{ marginTop: 5, width: screenWidth }} >
              <View style={styles.totalContainer} >
               <Text style={styles.totalText}>Subtotal : Rs {subtotal}</Text>
               
               </View>
               <View style={styles.totalContainer} >
               
               <Text style={styles.totalText}>Total Amount : Rs {subtotal} </Text>
               </View>
            </View> 
            

            <View >
                
                {/* <Button title="CHECKOUT1" style={{ width:10, backgroundColor: 'red' }} ></Button> */}
                {/* this.props.navigation.navigate("Checkout") */}
                <TouchableOpacity style={styles.button} onPress={()=>{this.redirect(this.props) }}  >
                    <Text style={{ color: '#fff', fontSize:20 }}> CHECKOUT </Text>
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
lineItem: {
  flexDirection: 'row',
  borderRadius: 2,
  borderColor: "#CCC",
  borderWidth: 1,
  // height: 90
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
cartItemText: {
  fontSize: 16,
  marginTop: 5,
  marginLeft: 2
},
cartItemQtyPrice: {
  fontSize: 15,
  marginBottom: 5,
  marginTop: 2,
  marginLeft: 2,
  color : 'red'

},

totalContainer: {
  backgroundColor: "rgba(230, 230, 230,1)", 
  marginBottom: 2, 
  height: 50
},
totalText: {
  fontSize: 26,
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
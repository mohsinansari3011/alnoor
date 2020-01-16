import React , {Component} from 'react'
//import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { TextInput, KeyboardAvoidingView,  Button, ScrollView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
//import { ScrollView } from 'react-native';

import axios from 'axios';
import WooApi from '../../components/config/wooapi';  
import { CartContext } from '../../context/CartContext';
import { Header } from 'react-navigation-stack';


class Checkout extends Component {
    static navigationOptions = {
        title: 'Checkout',
      };


      state = {
        email: '',
        password: '',
        first_name:'',
        last_name:'',
        username:'',
        address_1:'',
        city:'',
        state:'',
        postcode:'',
        country:'',
        phone:'',
        cart:[],
        itemdetails:''
          


     }






    postCustomer = () => {
    const {
    email,
    password ,
    first_name,
    last_name,
    username,
    address_1,
    city,
    state,
    postcode,
    country,
    phone, } = this.state;

    const customer = `{
        "email": "${email}",
        "first_name": "${first_name}",
        "last_name": "${last_name}",
        "username": "${username}",
        "billing": {
          "first_name": "${first_name}",
          "last_name": "${last_name}",
          "company": "",
          "address_1": "${address_1}",
          "address_2": "",
          "city": "${city}",
          "state": "${state}",
          "postcode": "${postcode}",
          "country": "${country}",
          "email": "${email}",
          "phone": "${phone}"
        },
        "shipping": {
          "first_name": "${first_name}",
          "last_name": "${last_name}",
          "company": "",
          "address_1": "${address_1}",
          "address_2": "",
          "city": "${city}",
          "state": "${state}",
          "postcode": "${postcode}",
          "country": "${country}"
        }
      }`;


    const url = `${WooApi.url.wc}customers?consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
    console.log(url);
    axios.post(url,customer)
    .then(response => 
        console.log('postCustomer',response.data)
        //this.setState({ products: response.data })
        )
    .catch(error => console.log('error',error));
    }



    postOrder = (props) => {
        const { navigate } = props.navigation;
        const {
        email,
        password ,
        first_name,
        last_name,
        username,
        address_1,
        city,
        state,
        postcode,
        country,
        phone, 
        itemdetails,
        } = this.state;
    
        const objOrder = `{
            "payment_method": "bacs",
            "payment_method_title": "Direct Bank Transfer",
            "set_paid": true,
            "billing": {
            "first_name": "${first_name}",
            "last_name": "${last_name}",
            "company": "",
            "address_1": "${address_1}",
            "address_2": "",
            "city": "${city}",
            "state": "${state}",
            "postcode": "${postcode}",
            "country": "${country}",
            "email": "${email}",
            "phone": "${phone}"
            },
            "shipping": {
            "first_name": "${first_name}",
            "last_name": "${last_name}",
            "company": "",
            "address_1": "${address_1}",
            "address_2": "",
            "city": "${city}",
            "state": "${state}",
            "postcode": "${postcode}",
            "country": "${country}"
            },
            "line_items": [${itemdetails}],
            "shipping_lines": [
              {
                "method_id": "flat_rate",
                "method_title": "Flat Rate",
                "total": 10
              }
            ]
          }`;
    
    
        const url = `${WooApi.url.wc}customers?consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
        console.log(url);
        axios.post(url,objOrder)
        .then(response => {
            //this.postCustomer();
            
            console.log('postobjOrder',response.data)
            navigate("Thankyou")
            //this.setState({ products: response.data })
            })
        .catch(error => console.log('error',error));
        }



    handleEmail = (text) => {
    this.setState({ email: text })
    }
    handleFirst_name = (text) => {
        this.setState({ first_name: text })
        }
    handleLast_name = (text) => {
        this.setState({ last_name: text })
        }
    handleUsername = (text) => {
        this.setState({ username: text })
        }
    handleAddress_1 = (text) => {
        this.setState({ address_1: text })
        }
    handleCity = (text) => {
        this.setState({ city: text })
        }
    handleState = (text) => {
        this.setState({ state: text })
        }   
    handlePostcode = (text) => {
        this.setState({ postcode: text })
        }
    handleCountry = (text) => {
        this.setState({ country: text })
        }
    handlePhone = (text) => {
        this.setState({ phone: text })
        }   

    handlePassword = (text) => {
    this.setState({ password: text })
    }



    
     
    getCartdata(cart){
        cart.items.map((item) => {
            this.state.itemdetails +=`{
                "product_id": ${item.id.toString()},
                "quantity": ${item.quantity}
                },`
        })
                console.log('cart---', this.state.itemdetails);
    }



     
render(){

    

    

    return(

        <KeyboardAvoidingView keyboardVerticalOffset = {Header.HEIGHT + 30} style={styles.container} behavior="padding" enabled>
        
        <ScrollView>
        

        <CartContext.Consumer>
            {cart => {
                if (cart.items && cart.items.length > 0) {
                    this.getCartdata(cart);
                } 
            }}
        </CartContext.Consumer>

        <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "firstname"
               autoCapitalize = "none"
               onChangeText = {this.handleFirst_name}/>
     <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "lastname"
               autoCapitalize = "none"
               onChangeText = {this.handleLast_name}/>    

        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "username"
               autoCapitalize = "none"
               onChangeText = {this.handleUsername}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               secureTextEntry={true}
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               autoCapitalize = "none"
               onChangeText = {this.handleAddress_1}/>
               
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "City"
               autoCapitalize = "none"
               onChangeText = {this.handleCity}/>
               
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "State"
               autoCapitalize = "none"
               onChangeText = {this.handleState}/>

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "PostCode"
               autoCapitalize = "none"
               onChangeText = {this.handlePostcode}/>

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Country"
               autoCapitalize = "none"
               onChangeText = {this.handleCountry}/>

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone"
               autoCapitalize = "none"
               keyboardType = "number-pad"
               onChangeText = {this.handlePhone}/>

           
               <Button title="Submit" onPress={()=>{this.postOrder(this.props) }}></Button>
            
         </View>
         </ScrollView>
         </KeyboardAvoidingView>
    )

}
}

export default Checkout


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
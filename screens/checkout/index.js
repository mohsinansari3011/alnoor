import React , {Component} from 'react'
//import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { TextInput, KeyboardAvoidingView,  Button, ScrollView, View, Text, StyleSheet, 
    FlatList, Image, TouchableOpacity,Dimensions  } from 'react-native';
import { Entypo } from '@expo/vector-icons';
//import { ScrollView } from 'react-native';

import axios from 'axios';
import WooApi from '../../components/config/wooapi';  
import { CartContext } from '../../context/CartContext';
import { Header } from 'react-navigation-stack';
import designVars from '../../components/config/design_variables';  
const { width: screenWidth } = Dimensions.get('window')

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
        itemdetails:'',
        shipping_methods :[],
        itemupdated : true,
        payment_method : '',
        payment_method_title : '',
        user : [],

     }




     listofshippingzones = () => {
        //const url = `${WooApi.url.wc}shipping/zones?consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
        const url = `${WooApi.url.wc}shipping/zones/1/locations?consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
        
        console.log(url);
        axios.get(url)
        .then(response => 
            console.log('listofshippingzones',response.data)
            //this.setState({ products: response.data })
            )
        .catch(error => console.log('error',error));

     }


     listofshipping_methods = () => {
        //const url = `${WooApi.url.wc}shipping/zones?consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
        const url = `${WooApi.url.wc}shipping/zones/1/methods?consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
        
        console.log(url);
        axios.get(url)
        .then(response => 
            //console.log('shipping_methods',response.data)
            this.setState({ shipping_methods: response.data })
            )
        .catch(error => console.log('error',error));

     }

    

     componentWillMount(){
         
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
        // email,
        // password ,
        // first_name,
        // last_name,
        // username,
        address_1,
        // city,
        // state,
        // postcode,
        // country,
        phone, 
        itemdetails,
        payment_method,
        payment_method_title,
        user
        } = this.state;
    
        const objOrder = `{
            "customer_id": ${user.id},
            "status":"on-hold",
            "payment_method": "${payment_method}",
            "payment_method_title": "${payment_method_title}",
            "set_paid": false,
            "billing": {
            "first_name": "${user.username}",
            "last_name": "",
            "company": "",
            "address_1": "${address_1}",
            "address_2": "",
            "city": "",
            "state": "",
            "postcode": "",
            "country": "PK",
            "email": "${user.email}",
            "phone": "${phone}"
            },
            "shipping": {
            "first_name": "${user.username}",
            "last_name": "",
            "company": "",
            "address_1": "${address_1}",
            "address_2": "",
            "city": "",
            "state": "",
            "postcode": "",
            "country": "PK"
            },
            "line_items": [${itemdetails}],
            "shipping_lines": [
              {
                "method_id": "flat_rate",
                "method_title": "Flat Rate",
                "total": "100"
              }
            ]
          }`;
    
    
        const url = `${WooApi.url.wc}orders?consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
        console.log(url);
        console.log(objOrder);

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };

        axios.post(url,objOrder , axiosConfig)
        .then(response => {
            //this.postCustomer();
            
            console.log('postobjOrder',response.data)
            navigate("Thankyou", {data: this.state})
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

        itemd = [];
        cart.items.map((item) => {
            itemd.push(`{
                "product_id": ${item.id.toString()},
                "quantity": ${item.quantity}
                }`)

            // this.state.itemdetails +=`{
            //     "product_id": ${item.id.toString()},
            //     "quantity": ${item.quantity}
            //     },`
        })

        console.log('empty--cart---',cart);

        //console.log('cart---',cart.paymentmethod);
        // cart.paymentmethod ? cart.paymentmethod.map((item) =>{
        //     this.setState({
        //         payment_method : item.id,
        //         payment_method_title : item.title
        //     })
        // }) : console.log('empty--cart---',cart.paymentmethod);

             this.setState({
                itemdetails : itemd,
                payment_method : cart.paymentmethod,
                payment_method_title : cart.paymentmethod_title,
            })

        this.setState({  itemupdated : false , user : cart.user})

                //console.log('cart---',cart.paymentmethod ,this.state.itemdetails);
    }



     
render(){

    

   

    return(

        
        
        <KeyboardAvoidingView keyboardVerticalOffset = {Header.HEIGHT + 30} style={styles.container} behavior="padding" enabled>
        
        <ScrollView>
        

        <CartContext.Consumer>
            {cart => {
                if (cart.items && cart.items.length > 0) {
                   this.state.itemupdated ? this.getCartdata(cart) : ""
                } 
            }}
        </CartContext.Consumer>

        <View style = {styles.container}>
            {/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/> */}
            
        {/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "firstname"
               autoCapitalize = "none"
               onChangeText = {this.handleFirst_name}/> */}
     {/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "lastname"
               autoCapitalize = "none"
               onChangeText = {this.handleLast_name}/>     */}

        {/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "username"
               autoCapitalize = "none"
               onChangeText = {this.handleUsername}/> */}

            {/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               secureTextEntry={true}
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/> */}
            

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               autoCapitalize = "none"
               onChangeText = {this.handleAddress_1}/>
               
               {/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "City"
               autoCapitalize = "none"
               onChangeText = {this.handleCity}/> */}
               
               {/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "State"
               autoCapitalize = "none"
               onChangeText = {this.handleState}/> */}

               {/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "PostCode"
               autoCapitalize = "none"
               onChangeText = {this.handlePostcode}/> */}

               {/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Country"
               autoCapitalize = "none"
               onChangeText = {this.handleCountry}/> */}

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone"
               autoCapitalize = "none"
               keyboardType = "number-pad"
               onChangeText = {this.handlePhone}/>

               

               {/* <Button title="Submit" onPress={()=>{this.postOrder(this.props) }}></Button> */}
               <TouchableOpacity style={styles.button} onPress={()=>{this.postOrder(this.props) }}  >
                    <Text style={{ color: '#fff', fontSize:20 }}> PROCEED </Text>
                </TouchableOpacity>
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
    button: {
        alignItems: 'center',
        backgroundColor: designVars.primary_color,
        // padding: 10,
        width: screenWidth,
        height: 40,
        // marginLeft: 20,
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
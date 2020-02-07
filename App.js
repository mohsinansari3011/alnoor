import React, { Component } from 'react';
import { StyleSheet, ToastAndroid , Text, View , Button ,Image , ScrollView, Dimensions , 
  TouchableOpacity, AsyncStorage 
} from 'react-native';

import { Platform } from 'react-native';
import {
  NavigationActions, StackActions

} from 'react-navigation';

import { CartContext } from '../alnoor/context/CartContext';
import axios from 'axios';
import WooApi from '../alnoor/components/config/wooapi';  


import Appcontain from '../alnoor/navigators/index'

class App extends Component {

 
 state = {
  items: [],
  paymentmethod : 'cod',
  paymentmethod_title : 'Cash on Delivery',
  customerinfo: [],
  userData : [],
  user : [],
  route : '',
  navigation : [],
  islogin: false,
  Navigator:0,
  cartcount : 0
};

  addPayM = (item) =>{
    this.setState({
      paymentmethod : item,
    })
  }

  nullcart = (props) =>{
    this.setState({
        items: [],
    });

    //props.navigation.navigate('Dashboard');

      const resetAction = StackActions.reset({
        index: 0,
        key: "DashboardStackNavigator", // <-- this
        actions: [NavigationActions.navigate({ routeName: "Dashboard" })]
    })
    props.navigation.dispatch(resetAction)
    // console.log('nulcart props',props);
    // props.navigation.navigate('Dashboard');
  }

  LoginUser = (username,password,props) =>{
   
    const url = `${WooApi.url.wplogin}?username=${username}&password=${password}`;
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Basic ${WooApi.auth.base64}`,
            "Access-Control-Allow-Origin": "*",
        }
      };

     // console.log(url);
    axios.get(url, axiosConfig)
    .then(response => {
      let loginData = response.data;
       try {
        if(loginData.ID != undefined){

          let userDataR = {
            "id": loginData.ID,
            "first_name": "",
            "last_name": "",
            "name": loginData.data.user_nicename,
            "nickname": loginData.data.user_nicename,
            "email": loginData.data.user_email,
            "username": loginData.data.user_login,
          }

          //console.log(JSON.stringify(userData));
              try {
            AsyncStorage.setItem('userData', JSON.stringify(userDataR)).then(response => {
              ToastAndroid.show(`${userDataR.username} has been Loggedin!!...`, ToastAndroid.SHORT);
              
              //console.log('11====',userDataR);

              this.setState({
                userData : userDataR,
                user : userDataR,
              })

              
              
            //  if(props.navigation.state.params.route == "Checkout"){
            //   console.log('route--Lofgin',props.navigation.state.params.route );
            //   props.navigation.navigate("Cart")
            //  }
              //navigate("Dashboard")

            }).catch(error => console.log('error AsyncStorage',error));

          } catch (error) {
          }

            
          


        }
      } catch (error) {
        // Error saving data
      }


        })
    .catch(error => console.log('error Signup',error));
    }

  LogoutUser =() => {

    try {
      AsyncStorage.removeItem('userData').then(response => {
          console.log('removeItem',response);
          this.setState({
            userData : {},
            user : [],
          })
      }).catch(error => console.log('removeItem  AsyncStorage',error));
    } catch (error) {
    }
    

  }
  
  SignupUser = (username,email,password) => {

    const objRegister = `{"username" : "${username}", "email": "${email}", "password": "${password}"}`;
    const url = `${WooApi.url.wp}users`;
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Basic ${WooApi.auth.base64}`,
            "Access-Control-Allow-Origin": "*",
        }
      };

    axios.post(url,objRegister , axiosConfig)
    .then(response => {
      let userData = response.data;
       try {
        AsyncStorage.setItem('userData', JSON.stringify(userData)).then(response => {
          console.log('signup response----', response); 
          ToastAndroid.show(`${userData.username} has been registerd...`, ToastAndroid.SHORT);

          this.setState({
            userData : userData,
            user : userData
          })


         // navigate("Dashboard")

        }).catch(error => console.log('error AsyncStorage',error));

      } catch (error) {
        // Error saving data
      }


        })
    .catch(error => console.log('error Signup',error));
    }


  onAddItem = (item) => {

    this.setState(state => {
      var exists = false;
      const newState = state.items.map(currentItem => {
        if (currentItem.id === item.id) {
          exists = true;
          return {
            ...currentItem,
            quantity: currentItem.quantity + item.quantity
          }
        } else {
          return currentItem
        }
      });
      if(exists) {
        return {
          items: newState
        }
      } else {
        return {
          items: [
            ...state.items,
            item
          ]
        }
      }
    });

    try {
      AsyncStorage.setItem('cart_count', (this.state.items.length + 1).toString()).then(response => {
        console.log('userid response----', this.state.items.length); 
     
      }).catch(error => console.log('error AsyncStorage',error));

    } catch (error) {
      // Error saving data
    }

    
    ToastAndroid.show(`${item.name} ${this.state.items.length} added to cart`, ToastAndroid.SHORT);
  }
  
  onRemoveItem = (item) => {
    this.setState(state => {
      const remainingItems = [
        ...state.items.filter(i => i.id !== item.id)
      ]
      return {
        items: remainingItems
      }
    });
  }


  componentDidMount(){

    //console.log('app.js componentDidMount');
    try {
      AsyncStorage.getItem('userData').then(response => {
        console.log('response----',response); 
        if(response != null){

          const userData = JSON.parse(response);
          // console.log('userid get response----', userData.id); 
          // console.log('userid get response----', userData.username); 
          // console.log('userid get response----', userData.name); 
          // console.log('userid get response----', userData.email); 

          this.setState({
            userData ,
            user :userData,
          })
          ToastAndroid.show(`${userData.username} has been already logged...`, ToastAndroid.SHORT);
            //this.props.navigate.navigate("Dashboard")

        }
        
        
          

      }).catch(error => { console.log('errorget  AsyncStorage',error)
      this.setState({
        userData : {},
        user : [],
      })
    });

    } catch (error) {
      // Error saving data
    }


  }


  


  render() {
    return (<CartContext.Provider
    value={{
      items: this.state.items,
      paymentmethod:this.state.paymentmethod,
      user : this.state.user,
      paymentmethod_title:this.state.paymentmethod_title,
      addItem: this.onAddItem,
      removeItem: this.onRemoveItem,
      addPayM: this.addPayM,
      LoginUser: this.LoginUser,
      LogoutUser : this.LogoutUser,
      SignupUser : this.SignupUser,
      nullcart : this.nullcart,
    }}
  >
    
     {this.state.userData && this.state.userData.username  != undefined ? <Appcontain/> : <Appcontain/>}

   
  </CartContext.Provider>);
  }
}
export default App;














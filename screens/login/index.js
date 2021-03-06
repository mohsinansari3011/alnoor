import React , {Component} from 'react'
//import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { TextInput, KeyboardAvoidingView,  Button, ScrollView, View, Dimensions, StyleSheet, 
    FlatList, Image, TouchableOpacity , Text  } from 'react-native';

import { CartContext } from '../../context/CartContext';
import { Header } from 'react-navigation-stack';
const { width: screenWidth } = Dimensions.get('window')
import designVars from '../../components/config/design_variables';  



export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    
    //const route = props.navigation.state.params.route;
    console.log('Login route', props);
  }

  state = {
    username: '',
    password: '',
    
    

 }


  handlePassword = (text) => {
    this.setState({ password: text })
    }

    handleUsername = (text) => {
      this.setState({ username: text })
      }

    //  onLogin = () => {
    //   const { navigate } = this.props.navigation;
    //   const {
    //   password ,
    //   username,
    //   } = this.state;
  
      
  
    //   //const Userurl = `${WooApi.url.wp}users/12`;
    //   const url = `${WooApi.url.wplogin}?username=${username}&password=${password}`;
    //   const axiosConfig = {
    //       headers: {
    //           'Content-Type': 'application/json;charset=UTF-8',
    //           'Authorization': `Basic ${WooApi.auth.base64}`,
    //           "Access-Control-Allow-Origin": "*",
    //       }
    //     };

    //    // console.log(url);
    //   axios.get(url, axiosConfig)
    //   .then(response => {
    //     let loginData = response.data;
    //      try {


    //      // console.log('Login id',loginData.ID);

    //       if(loginData.ID != undefined){

    //         let userData = {
    //           "id": loginData.ID,
    //           "first_name": "",
    //           "last_name": "",
    //           "name": loginData.data.user_nicename,
    //           "nickname": loginData.data.user_nicename,
    //           "email": loginData.data.user_email,
    //           "username": loginData.data.user_login,
    //         }

    //         //console.log(JSON.stringify(userData));
    //             try {
    //           AsyncStorage.setItem('userData', JSON.stringify(userData)).then(response => {
    //             ToastAndroid.show(`${userData.username} has been registerd...`, ToastAndroid.SHORT);
                
               

    //             console.log(userData);

               
    //             //navigate("Dashboard")

    //           }).catch(error => console.log('error AsyncStorage',error));

    //         } catch (error) {
    //         }

              
            


    //       }
    //     } catch (error) {
    //       // Error saving data
    //     }


    //       })
    //   .catch(error => console.log('error Signup',error));
    //   }

    render() {
      //const route = props.navigation.state.params.route;
      return (
      
        
        <KeyboardAvoidingView keyboardVerticalOffset = {Header.HEIGHT + 30} style={styles.container} behavior="padding" enabled>
        <ScrollView>
       <View style = {styles.container}>

      

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
               


            
              

                 <CartContext>
                 {cart=>{
                   
                   return  <TouchableOpacity style={styles.button} onPress={() => cart.LoginUser(this.state.username,this.state.password,this.props)}  >
                   <Text style={{ color: '#fff', fontSize:20 }}> Login </Text>
               </TouchableOpacity>
              
                 }}
                 </CartContext>
               
               </View>

               </ScrollView>
               </KeyboardAvoidingView>
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
 })
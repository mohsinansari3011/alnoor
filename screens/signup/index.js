import React , {Component} from 'react'
//import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { TextInput, KeyboardAvoidingView,  Button, ScrollView, View, ToastAndroid, StyleSheet, 
    FlatList, Image, TouchableOpacity , AsyncStorage  } from 'react-native';
import { Entypo } from '@expo/vector-icons';
//import { ScrollView } from 'react-native';

import axios from 'axios';
import WooApi from '../../components/config/wooapi';  
import { CartContext } from '../../context/CartContext';
import { Header } from 'react-navigation-stack';







export default class Signup extends Component {
  static navigationOptions = {
    title: 'Register an account',
  };


  state = {
    email: '',
    password: '',
    username:'',


 }


  handlePassword = (text) => {
    this.setState({ password: text })
    }

    handleEmail = (text) => {
      this.setState({ email: text })
      }

      handleUsername = (text) => {
        this.setState({ username: text })
        }


        getUser = () =>{
          //const { navigate } = this.props.navigation;

          try {
            AsyncStorage.getItem('userData').then(response => {

              if(response != null){
                const userData = JSON.parse(response);
                console.log('userid get response----', userData); 
                // console.log('userid get response----', userData.id); 
                // console.log('userid get response----', userData.username); 
                // console.log('userid get response----', userData.name); 
                // console.log('userid get response----', userData.email); 

                ToastAndroid.show(`${userData.username} has been registerd...`, ToastAndroid.SHORT);
                  //navigate("Dashboard")
              }
              

            }).catch(error => console.log('errorget  AsyncStorage',error));

          } catch (error) {
            // Error saving data
          }

        }




         postRegister = () => {
          const { navigate } = this.props.navigation;
          const {
          email,
          password ,
          username,
          } = this.state;
      
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
                //console.log('userid response----', response); 
                ToastAndroid.show(`${userData.username} has been registerd...`, ToastAndroid.SHORT);
                navigate("Dashboard")

              }).catch(error => console.log('error AsyncStorage',error));

            } catch (error) {
              // Error saving data
            }


              })
          .catch(error => console.log('error Signup',error));
          }

          


    render() {
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
               placeholder = "Email"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
       
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               secureTextEntry={true}
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
               


              


               <Button title="Submit" onPress={this.postRegister }></Button>
               <Button title="GetUser---Submit" onPress={this.getUser }></Button>
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
    }
 })
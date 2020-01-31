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







export default class Register extends Component {
  static navigationOptions = {
    title: 'Login / Register an account',
  };


    render() {

        //console.log(this.props.navigation);
      return (
      
        <KeyboardAvoidingView keyboardVerticalOffset = {Header.HEIGHT + 30} style={styles.container} behavior="padding" enabled>
        <ScrollView>
       <View style = {styles.container}>

               <Button title="Login" onPress={() => this.props.navigation.navigate("Login")} ></Button>
               <Button title="Signup" onPress={() => this.props.navigation.navigate("Signup")}></Button>
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
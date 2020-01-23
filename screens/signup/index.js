
import React , {Component} from 'react'
//import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { TextInput, KeyboardAvoidingView,  Button, ScrollView, View, Text, StyleSheet, 
    FlatList, Image, TouchableOpacity , RadioButton } from 'react-native';
import { Entypo } from '@expo/vector-icons';
//import { ScrollView } from 'react-native';

import axios from 'axios';
import WooApi from '../../components/config/wooapi';  
import { CartContext } from '../../context/CartContext';







export default class DashboardScreen extends Component {

    render() {
      return (
       <View><Text>Signup</Text></View>
      );
    }
  }
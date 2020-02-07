import React, { Component } from 'react';
import { StyleSheet, ToastAndroid , Text, View , Button ,Image , ScrollView, Dimensions , 
  TouchableOpacity, AsyncStorage , I18nManager
} from 'react-native';

import { Platform } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  DrawerNavigator,
  NavigationActions, StackActions

} from 'react-navigation';


import DrawerContent from './../screens/order/appdrawer';
import ProductList from '../screens/productsList';
import SingleProduct from '../screens/singleProduct';
import ProductListCategory from '../screens/productlistbycategory';
import Cart from '../screens/cart';
import Checkout from '../screens/checkout';
import Thankyou from '../screens/thankyou';
import Location from '../screens/location';

import Paymentgateway from '../screens/paymentgateways';
import DashboardScreen from '../screens/dashboard'
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import RegisterScreen from '../screens/register';

import LogoutScreen from '../screens/logout'
import Homesreen from '../screens/homescreen';
import Homeslider from '../components/explore/Homeslider';
import HomeCategories from '../components/explore/HomeCategories';
import HomeLatestProducts from '../components/explore/HomeLatestProducts';
import LatestProduct from '../components/explore/LatestProduct';


import CartIcon from '../screens/order';





const navigationOptions = navigator => ({
    
    headerStyle: {
        //backgroundColor: '#f55130',
    },
    
    headerTitle: (
  
        <View style={{ flexDirection: 'row', flex: 1}} >
  
        
            <Image
                source={require('../assets/images/al-noor.png')}
                width={20}
                height={20}
                resizeMode="contain"
                style={{  width: 60, height: 40, alignSelf: 'center', flex: 1 }}
            />
            
           
            
            <CartIcon productcount={this}
            onPress={() => navigator.navigation.navigate('Cart')} />
        </View>
  
    ),headerLeft: (
      <TouchableOpacity
          onPress={() => {
              navigator.navigation.toggleDrawer();
          }}>
  
          <Icon
          style={[styles.headerLeftIconStyle, { height: 30, width: 30 }]}
          name="md-menu"
          size={30}/>
         
  
      </TouchableOpacity>
  ),
    //headerRight : (  ),
    drawerLockMode: 'locked-open',
  })

  


const CartStackNavigator = createStackNavigator({

    Cart: {
      screen: Cart,
      navigationOptions: navigationOptions
    },
    Location: {
      screen: Location,
      navigationOptions: navigationOptions
    },
    Checkout: {
      screen: Checkout,
      navigationOptions: navigationOptions
    },
    Thankyou: {
      screen: Thankyou,
      navigationOptions: navigationOptions
    },
    Paymentgateway: {
      screen: Paymentgateway ,
      navigationOptions: navigationOptions
    },
  
  })
  
  const RegisterStackNavigator = createStackNavigator({
  
    Register: {
      screen: RegisterScreen,
      navigationOptions: navigationOptions
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: navigationOptions
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: navigationOptions
    },
    
    
   },{
    initialRouteName: "Register"
  })
  
  const DashboardStackNavigator = createStackNavigator({
      Dashboard : {
        screen : DashboardScreen,
        navigationOptions: navigationOptions
  
      },
      Products: {
        screen : ProductList,
        navigationOptions: navigationOptions
      },
      Product: {
        screen : SingleProduct,
        navigationOptions: navigationOptions
      },
      CatProducts: {
        screen : ProductListCategory,
        navigationOptions: navigationOptions
      },
    },{
      initialRouteName: "Dashboard"
    }
  );
  
  
  
  

const DrawerNavigation = createDrawerNavigator (
    {
        Dashboard: {
            screen: DashboardStackNavigator,
        },
        Cart: {
            screen: CartStackNavigator
        },
        Register: { screen: RegisterStackNavigator },
        
        Settings: { screen: Settings }
        
  
  
    },
    {
        contentComponent: DrawerContent,
        //drawerPosition: I18nManager.isRTL ? 'right' : 'left',
        drawerWidth: 300,
  
    }
  );
  
  
  const MainStack = createStackNavigator(
    {
        DrawerNavigation: DrawerNavigation,
        //Congratulation: { screen: Congratulation }
    },
    {
        headerMode: 'none'
    }
  );


  const AppNavigator = createSwitchNavigator({
    MainStack: { screen: MainStack },
  })
  
  
  const Appcontain = createAppContainer(AppNavigator);

  export { Appcontain} ;
import React, { Component } from 'react';
import { StyleSheet, ToastAndroid , Text, View , Button ,Image , ScrollView, Dimensions , 
  TouchableOpacity, AsyncStorage
} from 'react-native';

import { Platform } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,

  NavigationActions, StackActions

} from 'react-navigation';

//import { Input } from 'react-native-elements';
//import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
//import { Carousel } from 'react-responsive-carousel';
//import Carousel from "react-multi-carousel";
//import 'react-multi-carousel/lib/styles.css';
//import AliceCarousel from 'react-alice-carousel'
//import 'react-alice-carousel/lib/alice-carousel.css'

const { width: screenWidth } = Dimensions.get('window')

//import TabBarIcon from '../components/TabBarIcon';

import ProductList from '../alnoor/screens/productsList';
import SingleProduct from '../alnoor/screens/singleProduct';
import ProductListCategory from '../alnoor/screens/productlistbycategory';
import Cart from '../alnoor/screens/cart';
import Checkout from '../alnoor/screens/checkout';
import Thankyou from '../alnoor/screens/thankyou';
import Location from '../alnoor/screens/location';
import Homeslider from './components/explore/Homeslider';
import HomeCategories from './components/explore/HomeCategories';
import HomeLatestProducts from './components/explore/HomeLatestProducts';
import Paymentgateway from '../alnoor/screens/paymentgateways';
import LatestProduct from './components/explore/LatestProduct';

import LoginScreen from '../alnoor/screens/login';
import SignupScreen from '../alnoor/screens/signup';
import LogoutScreen from '../alnoor/screens/logout'
import RegisterScreen from '../alnoor/screens/register';
import Homesreen from '../alnoor/screens/homescreen';

import { CartContext } from '../alnoor/context/CartContext';
import axios from 'axios';
import WooApi from '../alnoor/components/config/wooapi';  
import designVars from '../alnoor/components/config/design_variables';  


class App extends Component {

  // constructor(props) {
  //   super(props);
  //   console.log('app.js----------',this.props.navigation);
  // }
 state = {
  items: [],
  paymentmethod : 'cod',
  paymentmethod_title : 'Cash on Delivery',
  customerinfo: [],
  userData : [],
  user : [],
  route : '',
  navigation : [],
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
        key: null, // <-- this
        actions: [NavigationActions.navigate({ routeName: "Cart" })]
    })
    props.navigation.dispatch(resetAction)

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

    ToastAndroid.show(`${item.name} added to cart`, ToastAndroid.SHORT);
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
    
     {this.state.userData && this.state.userData.username  != undefined ? <AppContainer1/> : <AppContainer/>}
  </CartContext.Provider>);
  }
}
export default App;



class DashboardScreen extends Component {

  state = {
    loader: false,
    slider : false,
    product : false,
    category : false,
    
  }


  fetchsliderImages = () => {
    const url = `${WooApi.url.wp}posts?filter[category_name]=app-main-slider`;
  
    const axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Basic ${WooApi.auth.base64}`,
          "Access-Control-Allow-Origin": "*",
      }
    };
  
    //console.log('slider',url);
    axios.get(url,axiosConfig)
    .then(response => {
      this.setState({ sliderImages: response.data })
      //this.generateSliderImages(); 
    })
    .catch(error => console.log('slider error',error));
    }



    

  render() {

    //console.log('this.state.sliderImages', this.state.sliderImages);
    return (
      this.state.loader ?   <View style={{textAlign:'center'}}>
      <Image source={ require('./assets/images/cart-loading.gif') }/>
      </View> :  <ScrollView>
  
      <Homeslider /> 


      <View style={{marginTop:5}}>
      <View >
        <Text style={{ textAlign: 'center',}}>Latest Products</Text></View>
        {/* <Button color={designVars.primary_color} title="View More" onPress={() => this.props.navigation.navigate("Products")} /> */}
      </View>
      <LatestProduct navigation = {this.props.navigation}/>
      <View style={{marginBottom:10, marginTop:5}}>
        <Button color="rgba(100,177,12,1)" title="View More" onPress={() => this.props.navigation.navigate("Products")}  />
      </View>
      
      <HomeCategories navigation = {this.props.navigation}/>

      
      </ScrollView>
      

     


      );
  }
}


class Settings extends Component {

  constructor(props) {
    super(props);
  
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is Settings Page </Text>
        <Button color={designVars.primary_color} title="Dashboard" onPress={() => this.props.navigation.navigate("Dashboard")} />
      </View>
    );
  }
}

class Profile extends Component {
  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is Profile Page</Text>
        <Button color={designVars.primary_color} title="Dashboard" onPress={() => this.props.navigation.navigate("Dashboard")} />
      </View>
    );
  }
}


class NavigationDrawerStructure extends Component {
  // toggleDrawer = () => {
  //   this.props.navigationProps.toggleDrawer();
  // };
  render() {
    return (
      <TouchableOpacity style={{ padding: 15, color: 'black' }}
        onPress={() => { this.props.navigation.navigate('Cart') }}
      >
      <Icon
      style={{ paddingRight: 10 }}
      name={Platform.OS === 'ios' ? `ios-cart` : 'md-cart'}
      size={30}
    />
      </TouchableOpacity>
    );
  }
}



// const DashboardTabNavigator = createBottomTabNavigator(
//   {
//     Feed,
//     Profile,
//     Settings
//   },
//   {
//     navigationOptions: ({ navigation }) => {
//       const { routeName } = navigation.state.routes[navigation.state.index];
//       return {
//         headerTitle: routeName
//       };
//     }
//   }
// );



const CartStackNavigator = createStackNavigator({

  Cart: {
    screen: Cart
  },
  Location: {
    screen: Location
  },
  Checkout: {
    screen: Checkout
  },
  Thankyou: {
    screen: Thankyou
  },
  Paymentgateway: {
    screen: Paymentgateway 
  },

})

const RegisterStackNavigator = createStackNavigator({

  Register: {
    screen: RegisterScreen
  },
  Signup: {
    screen: SignupScreen
  },
  Login: {
    screen: LoginScreen
  },
  
  
 },{
  initialRouteName: "Register"
})

const DashboardStackNavigator = createStackNavigator({
    Dashboard : DashboardScreen,
    Products: {
      screen : ProductList
    },
    Product: {
      screen : SingleProduct
    },
    CatProducts: {
      screen : ProductListCategory
    },
    
    // Cart: {
    //   screen: Cart
    // },
    // Checkout: {
    //   screen: Checkout
    // },
    
  },
  {
    defaultNavigationOptions: ({ navigation,props }) => {
     return{
      headerStyle: {                                                                                        
        backgroundColor: 'light-grey',  
        height : 65                                                                         
      },
      headerTitleStyle : {
              alignSelf: 'center' ,
              textAlign: 'center',
              justifyContent: 'center',
              flex:1,
              width:screenWidth
      },
      headerTitle: (
      
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} >
        <Image  
        style={{ width: 280, height: 60 }} 
        source={require('./assets/images/al-noor.png')}/>
        
      </TouchableOpacity>
      
    ),
      headerLeft: (
        <Icon
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      ),
      headerRight: (
        <TouchableOpacity style={{ padding: 15, color: 'black' }}
        onPress={() => { navigation.navigate('Cart') }}
      >
      <Icon
      style={{ paddingRight: 10 }}
      name={Platform.OS === 'ios' ? `ios-cart` : 'md-cart'}
      size={30}
      //onPress={() => navigation.navigate('Cart')}
    />
        
        
        

      </TouchableOpacity>
       
      ),
      
      

    };
    }
  }
);





const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
  Cart : CartStackNavigator,
  
  Register : RegisterStackNavigator,
});

const AppDrawerNavigator1 = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
  
  Profile: {
    screen: Profile
  },
  Settings: {
    screen: Settings
  },
  Orders: {
    screen: Settings
  },
  Cart : CartStackNavigator,

  Logout : LogoutScreen,
});

const AppSwitchNavigator = createSwitchNavigator({
  //Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator },
});
const AppSwitchNavigator1 = createSwitchNavigator({
  //Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator1 },
});

const AppContainer = createAppContainer(AppSwitchNavigator);
const AppContainer1 = createAppContainer(AppSwitchNavigator1);

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container:{
    marginTop:50
  },  
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  sliderImage: {
    height: 180,
    width: 150
  },
  sliderImage2: {
    height: 120,
    width: 360
  }
});


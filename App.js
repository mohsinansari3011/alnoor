import React, { Component } from 'react';
import { StyleSheet, ToastAndroid , Text, View , Button ,Image , ScrollView, Dimensions , 
  TouchableOpacity,
} from 'react-native';

import { Platform } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
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
import Cart from '../alnoor/screens/cart';
import Checkout from '../alnoor/screens/checkout';
import Location from '../alnoor/screens/location';
import Homeslider from './components/explore/Homeslider';
import HomeCategories from './components/explore/HomeCategories';
import HomeLatestProducts from './components/explore/HomeLatestProducts';

import { CartContext } from '../alnoor/context/CartContext';


class App extends Component {


  state = {
    items: [],
    
  };


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

  render() {
    return (<CartContext.Provider
    value={{
      items: this.state.items,
      addItem: this.onAddItem,
      removeItem: this.onRemoveItem,
    }}
  >
      <AppContainer />
  </CartContext.Provider>);
  }
}
export default App;



class DashboardScreen extends Component {

  render() {
    return (
      <ScrollView>
  
      <Homeslider />
    
      <View style={{marginTop:5}}>
      <View ><Text style={{ textAlign: 'center',}}>Latest Products</Text></View>
      <Button color="#05a5d1" title="View More" onPress={() => this.props.navigation.navigate("Products")} />
      </View>

      <HomeLatestProducts navigation = {this.props.navigation}/>
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
        <Button color="#05a5d1" title="Dashboard" onPress={() => this.props.navigation.navigate("Dashboard")} />
      </View>
    );
  }
}

class Profile extends Component {
  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is Profile Page</Text>
        <Button color="#05a5d1" title="Dashboard" onPress={() => this.props.navigation.navigate("Dashboard")} />
      </View>
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

})
const DashboardStackNavigator = createStackNavigator(
  {
    Dashboard : DashboardScreen,
    Products: {
      screen : ProductList
    },
    Product: {
      screen : SingleProduct
    },
    // Cart: {
    //   screen: Cart
    // },
    // Checkout: {
    //   screen: Checkout
    // },
    
  },
  
  {
    defaultNavigationOptions: ({ navigation }) => {
     return{
      headerStyle: {                                                                                        
        //backgroundColor: '#298e82',  
        //height : 100                                                                         
      },
      headerTitleStyle : {
              alignSelf: 'center' ,
              textAlign: 'center',
              flex:1
      },
      headerTitle: (
      
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} >
        <Image  
        style={{ width: 220, height: 50 }} source={require('./assets/images/al-noor.png')}/>
        
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
        <Icon
          style={{ paddingRight: 10 }}
          name={Platform.OS === 'ios' ? `ios-cart` : 'md-cart'}
          size={30}
          onPress={() => navigation.navigate('Cart')}
        />
      ),
      
      

    };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
  
  Profile: {
    screen: Profile
  },
  Settings: {
    screen: Settings
  },
  Cart : CartStackNavigator 
});

const AppSwitchNavigator = createSwitchNavigator({
  //Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator },
  
  
});


const AppContainer = createAppContainer(AppSwitchNavigator);


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


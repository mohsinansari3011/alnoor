
import React, { Component } from 'react';
import { StyleSheet, ToastAndroid , Text, View , Button ,Image , ScrollView, Dimensions , 
  TouchableOpacity, AsyncStorage 
} from 'react-native';


import Homeslider from '../components/explore/Homeslider';
import HomeCategories from '../components/explore/HomeCategories';
import LatestProduct from '../components/explore/LatestProduct';
import axios from 'axios';
import WooApi from '../../components/config/wooapi';

export default class DashboardScreen extends Component {

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
    },
  
  
  
  
    headerLeftIconStyle: {
      marginLeft: 15,
  },
  searchInputContainer: {
      flex: 1,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#999',
      flexDirection: 'row',
      backgroundColor: 'white',
  },
  searchInputIconStyle: {
  
      marginLeft: 10
  }, badgeText: {
      fontSize: 11,
      paddingHorizontal: 0
  }, badge: {
      backgroundColor: 'black',
      borderWidth: 0
  },
  
  
  });
  
  
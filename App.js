import React, { Component } from 'react';
import { StyleSheet, Alert , Text, View , Button ,Image , ScrollView, Dimensions , 
  SafeAreaView,
  TouchableOpacity,
  FlatList } from 'react-native';

import { Platform } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import Prodcut_Hortizontal from './components/explore/Prodcut_Hortizontal'
import { SliderBox } from 'react-native-image-slider-box';
import Slideshow from 'react-native-image-slider-show';
//import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
//import { Carousel } from 'react-responsive-carousel';
//import Carousel from "react-multi-carousel";
//import 'react-multi-carousel/lib/styles.css';


//import AliceCarousel from 'react-alice-carousel'
//import 'react-alice-carousel/lib/alice-carousel.css'

const { width: screenWidth } = Dimensions.get('window')

//import TabBarIcon from '../components/TabBarIcon';


class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;


class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
      </View>
    );
  }
}

class DashboardScreen extends Component {

  constructor(props) {
    super(props);
    

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title Image 1',
          caption: 'Caption 1',
          url: 'https://source.unsplash.com/1024x768/?nature',
        }, {
          title: 'Title Image 2',
          caption: 'Caption 2',
          url: 'https://source.unsplash.com/1024x768/?water',
        }, {
          title: 'Title Image 3',
          caption: 'Caption 3',
          url: 'https://source.unsplash.com/1024x768/?girl',
        },
        , {
          title: 'Title Image 4',
          caption: 'Caption 4',
          url: 'https://source.unsplash.com/1024x768/?tree',
        },
      ],
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
      ],DATA : [
        {
          id: '1',
          title: 'Category First Item',
          image: 'https://source.unsplash.com/1024x768/?nature',
        },
        {
          id: '2',
          title: 'Category Second Item',
          image: 'https://source.unsplash.com/1024x768/?water',
        },
        {
          id: '3',
          title: 'Category Third Item',
          image: 'https://source.unsplash.com/1024x768/?girl',
        },
        {
          id: '2',
          title: 'Category Fourth Item',
          image: 'https://source.unsplash.com/1024x768/?tree',
        },
      ],
      
    };


  }


 

getslider(){

  return(<SliderBox
            
    images={this.state.images}
    sliderBoxHeight={200}
    onCurrentImagePressed={index =>
        console.warn(`image ${index} pressed`)
    }
/>)
};






componentWillUnmount() {
  clearInterval(this.state.interval);
}


componentWillMount() {
  this.setState({
    interval: setInterval(() => {
      this.setState({
        position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
      });
    }, 4000)
  });
}

  render() {

    const { DATA } = this.state;

    return (
     
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>DashboardScreen</Text>
      // </View>
      <ScrollView>

      

      <Slideshow 
        //scrollEnabled = {false}
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} 
        onPress={index =>
          Alert.alert(
            index.image.title
         )
          //console.warn(`image ${index} pressed`)
      }/>


      <View style={{height : 130, marginTop:5}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator ={false}
    >

      <Prodcut_Hortizontal uri={{ uri: 'https://woocommerce-store.on-its-way.com/wp-content/uploads/2018/02/tshirt.jpg' }}
      title={'Product 1'}
      />
      <Prodcut_Hortizontal uri={{ uri: 'https://woocommerce-store.on-its-way.com/wp-content/uploads/2018/02/polo.jpg' }}
      title={'Product 2'}
      />
      <Prodcut_Hortizontal uri={{ uri: 'https://woocommerce-store.on-its-way.com/wp-content/uploads/2018/02/cap.jpg' }}
      title={'Product 3'}
      />
      <Prodcut_Hortizontal uri={{ uri: 'https://woocommerce-store.on-its-way.com/wp-content/uploads/2018/02/sunglasses.jpg' }}
      title={'Product 4'}
      />

      
    </ScrollView>
    </View>

   
    <SafeAreaView>
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <TouchableOpacity style={{height:120, marginTop : 2 , backgroundColor: '#F5FCFF',}}  onPress = {()=> {
          Alert.alert(
            item.title
           )
        }}>
        <View style={{flex : 2}}>
            <Image source={{ uri: `${item.image}`}} style={{flex:1, width:130, height:null, resizeMode:'cover'}} />
            </View>

          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
     
    />
  </SafeAreaView>

                
        </ScrollView>
    );
  }
}

class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed</Text>
      </View>
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
class Cart extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
      <Text>This is Cart Page</Text>
      <Button color="#05a5d1" title="Dashboard" onPress={() => this.props.navigation.navigate("Dashboard")} />
      </View>
    );
  }
}

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle : {
                //color:"white",
                //fontFamily:"OpenSans",
                alignSelf: 'center' ,
                textAlign: 'center',
                flex:1
        },
        headerTitle: (
          <Image style={{ width: 220, height: 35 }} source={require('./assets/images/humlogo.png')}/>
      ),
        //title: 'Al-Noor Grocer',

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
  Settings: {
    screen: Settings
  },
  Profile: {
    screen: Profile
  },
  Cart: {
    screen: Cart
  }
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

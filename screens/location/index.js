import React , {Component} from 'react'
import { View,  Dimensions, StyleSheet , Text } from 'react-native';

//import { Constants, MapView, LinearGradient } from 'expo';
import MapView , { PROVIDER_GOOGLE } from 'react-native-maps';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO





class Location extends Component {


    static navigationOptions = {
        title: 'Select Your Location',
      };

      constructor() {
        super()
        this.state = {
            //mapRegion: {
            // latitude: 24.9634633,
            // longitude: 66.4521264,
            // latitudeDelta: 0.0922,
            // longitudeDelta: 0.0464,
         // },
        }
      }

    _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });

    //console.log(mapRegion);

    };

    componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
        }

        this.setState({mapRegion: initialRegion})
        //console.log(initialRegion);
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
    }


render(){
    const {mapRegion} = this.state;
    console.log('render() ',mapRegion);
    return(
        mapRegion ? <View style={styles.container}>
            
        <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
        //showsUserLocation
        region={mapRegion}
        onRegionChange={this._handleMapRegionChange}>
        <MapView.Marker
        coordinate={{latitude: mapRegion.latitude,
        longitude: mapRegion.longitude}}
        title={"title"}
        description={"description"}
     />
      </MapView>
            

        </View> : <Text>Loading....</Text>
    )

}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      //paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
    map: {
      //alignSelf: 'stretch',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
    
  });


export default Location
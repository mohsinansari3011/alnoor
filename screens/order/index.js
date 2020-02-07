import { StyleSheet, ToastAndroid , Text, View , Button ,Image , ScrollView, Dimensions , 
    TouchableOpacity, AsyncStorage , Platform
  } from 'react-native';

import Icon from '@expo/vector-icons/Ionicons';
import React, { Component } from "react";
import { Badge } from "react-native-elements";
const { screenWidth } = Dimensions.get('window');



export default class CartIcon extends Component {

    constructor(props) {
        super(props);
        
    }
    
    //state = { cart_count : 0}
  
   

    // _retrieveData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('cart_count');
    //       if (value !== null) {
    //         // We have data!!
    //         console.log('cart_count',value);
    //         this.setState({
    //             cart_count : value
    //         })
    //       }
    //     } catch (error) {
    //       // Error retrieving data
    //     }
    //   };


    render() {
       
       console.log('this.state.cart_count', this.props.productcount);

        return (
            
    <View style={{ flexDirection: 'row', position: 'absolute' , right: Platform.OS === 'ios' ? -50 : 15}} >
    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={this.props.onPress}>
    
        <View>
            <Icon
                name='md-cart'
                size={25}
                color="black"
                style={{ margin: 2 }}
            />

            <Badge
                status="success"
                value="0"
                textStyle={styles.badgeText}
                badgeStyle={styles.badge}
                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
            />

        </View>
            </TouchableOpacity>
   
</View>
  );
};
}

const styles = StyleSheet.create({
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

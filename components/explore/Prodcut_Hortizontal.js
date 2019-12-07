
import React, { Component } from "react";
import { Text, View , Image , TouchableOpacity , Alert} from 'react-native';

class Prodcut_Hortizontal extends Component {
    constructor(props) {
        super(props);
        //this.state = {  };
    }
    
 

    showAlert = (data) =>{
        Alert.alert(
            data
        )
     }


    render() {
        return (
        <TouchableOpacity onPress = {()=> {
            Alert.alert(
                this.props.title
             )
    }}>
        <View style={{height : 120, width:130 , marginLeft:10, borderWidth:0.5, borderColor: '#ddddddd'}}>

            <View style={{flex : 2}}>
            <Image source={this.props.uri} style={{flex:1, width:null, height:null, resizeMode:'cover'}} />
            </View>

                <View style={{flex : 1, paddingLeft:5, paddingTop:5 }}>
                <Text>{this.props.title}</Text>
                </View>
            </View>  
            </TouchableOpacity>
        );
    }
}

export default Prodcut_Hortizontal;
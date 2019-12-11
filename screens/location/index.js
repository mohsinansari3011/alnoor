import React , {Component} from 'react'
import { View, Text } from 'react-native';
class Location extends Component {
    static navigationOptions = {
        title: 'Select Your Location',
      };

render(){
    return(
        <View>
            <Text> This is Location Page </Text>
        </View>
    )

}
}

export default Location
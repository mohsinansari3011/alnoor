import React , {Component} from 'react'
import { Button, View, Text } from 'react-native';
class Checkout extends Component {
    static navigationOptions = {
        title: 'Checkout',
      };

render(){
    return(
        <View>
            <Text> This is Checkout Page </Text>
            <Button title="Checkout" onPress={()=>{this.props.navigation.navigate("Checkout") }}></Button>
        </View>
    )

}
}

export default Checkout
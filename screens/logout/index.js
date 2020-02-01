import React , {Component} from 'react'
import { TextInput, KeyboardAvoidingView,  Button, ScrollView, View, Text, StyleSheet, 
    FlatList, Image, TouchableOpacity , AsyncStorage  } from 'react-native';

    import { CartContext } from '../../context/CartContext';






export default class Register extends Component {
  static navigationOptions = {
    title: 'Logout',
  };



//   componentDidMount(){
//     try {
//       AsyncStorage.removeItem('userData').then(response => {
//           console.log('removeItem',response);
//           this.props.navigation.navigate("Dashboard");
//       }).catch(error => console.log('removeItem  AsyncStorage',error));

//     } catch (error) {
//         this.props.navigation.navigate("Dashboard");
//     }

//   }

// logout(){
//     try {
//         AsyncStorage.removeItem('userData').then(response => {
//             console.log('removeItem',response);
//             this.props.navigation.navigate("Dashboard");
//         }).catch(error => console.log('removeItem  AsyncStorage',error));
  
//       } catch (error) {
//           this.props.navigation.navigate("Dashboard");
//       }
// }

    render() {
      return (
       <View style = {styles.container}>
       <CartContext>
       {cart=>{
         
         return <Button title="Logout" onPress={() => cart.LogoutUser()}></Button>
       }}
       </CartContext>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: 'gray',
       borderWidth: 1,
       padding:10,
    },
    submitButton: {
       backgroundColor: 'blue',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })
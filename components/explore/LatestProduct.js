import React, { Component } from "react";
import { StyleSheet, ScrollView , View, Image, Text , FlatList, TouchableOpacity} from "react-native";
//import MaterialButtonDanger from "../material/Button";

import axios from 'axios';

import WooApi from '../../components/config/wooapi';  

class LatestProduct extends Component {
    state = {
        products: []
      }

    fetchProducts = () => {
    const url = `${WooApi.url.wc}products?per_page=5&consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
    //console.log(url);
    axios.get(url)
    .then(response => this.setState({ products: response.data }))
    .catch(error => console.log('error',error));
    }
    
    componentWillMount() {
        //this.fetchProducts();
      }
      componentDidMount(){
        this.fetchProducts();
      }

      renderItem = ({item}) => (
        <View style={[styles.container, styles.materialCardWithImageAndTitle1]}>
            <View style={styles.rect}>
              <Image
              source={{ uri: item.images[0].src }}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <View style={styles.rs1550Row}>
                <Text style={styles.rs1550}>Rs {item.price}</Text>
                <Text style={styles.rs15503}>Rs {(parseFloat(item.price) + 200)}</Text>
              </View>
              <Text style={styles.loremIpsum}>
              {item.name}
              </Text>
              <TouchableOpacity style={[stylesb.container, styles.materialButtonDanger]}
              onPress={() => this.props.navigation.navigate("Product", { product: item })}>
              <Text style={styles.caption}>Add</Text>
            </TouchableOpacity>
            </View>
          </View>

      )


    render() {
        return (
           

            <View style={{height : 200, marginTop:5}}>
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator ={false}
                
                style={{flexDirection:'row'}}>
                {
                    this.state.products.length ?
                    <FlatList
                    //contentContainerStyle={prostyles.list} 
                    numColumns={10}
                    data={this.state.products}
                    keyExtractor={ item => item.id.toString() }
                    renderItem={this.renderItem}
                    />
                    :
                    <View style={stylesb.loaderContainer}>
                    <Image
                        source={ require('../../assets/images/cart-loading.gif') }
                        style={stylesb.loaderImage}
                    />
                    </View>
                }
                </ScrollView>

                </View>

          
           
        );
    }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFF",
      flexWrap: "nowrap",
      elevation: 3,
      borderRadius: 2,
      borderColor: "#CCC",
      borderWidth: 1,
      shadowOffset: {
        height: 2,
        width: -2
      },
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      overflow: "hidden"
    },
    rect: {
      width: 107,
      height: 158,
      backgroundColor: "rgba(230, 230, 230,1)",
      marginTop: 1
    },
    image: {
      width: 71,
      height: 47,
      marginTop: 13,
      marginLeft: 13
    },
    rs1550: {
      color: "#121212",
      justifyContent: "space-between",
      fontSize: 9,
      //fontFamily: "roboto-700",
      lineHeight: 16,
      letterSpacing: 0,
      textAlign: "left"
    },
    rs15503: {
      color: "#121212",
      justifyContent: "space-between",
      fontSize: 9,
     // fontFamily: "roboto-regular",
      lineHeight: 16,
      letterSpacing: 0,
      textAlign: "left",
      //textDecoration: "line-through",
      textDecorationLine: 'line-through', textDecorationStyle: 'solid',
      marginLeft: 9,
      marginTop: 1
    },
    rs1550Row: {
      height: 17,
      flexDirection: "row",
      marginTop: 7,
      marginLeft: 10,
      marginRight: 22
    },
    loremIpsum: {
      color: "#121212",
      fontSize: 9,
      //fontFamily: "roboto-regular",
      lineHeight: 16,
      letterSpacing: 0,
      marginTop: 1,
      marginLeft: 10
    },
    materialButtonDanger: {
      width: 88,
      height: 26,
      marginTop: 7,
      marginLeft: 9
    },
    materialCardWithImageAndTitle1: {
        width: 108,
        height: 172,
        flex:1,
        padding : 5
      },

  });
  

  
const stylesb = StyleSheet.create({
    container: {
      backgroundColor: "#F44336",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: 16,
      paddingLeft: 16,
      elevation: 2,
      minWidth: 88,
      borderRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0
      },
      shadowColor: "#000",
      shadowOpacity: 0.35,
      shadowRadius: 5
    },
    caption: {
      color: "#fff",
      fontSize: 14,
      //fontFamily: "roboto-regular"
    },
    loaderContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
      },
      loaderImage: {
        width: 200,
        height: 200,
      },
  });

export default LatestProduct;
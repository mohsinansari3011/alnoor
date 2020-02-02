import React, { Component } from "react";
import { StyleSheet, ScrollView , View, Image, Text , FlatList, TouchableOpacity, Dimensions, ImageBackground  } from "react-native";
//import MaterialButtonDanger from "../material/Button";
const { width: screenWidth } = Dimensions.get('window')
import axios from 'axios';

import WooApi from '../../components/config/wooapi';  

class LatestProduct extends Component {
    state = {
        products: []
      }

    fetchProducts = () => {
    const url = `${WooApi.url.wc}products?per_page=10&consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
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


        <View style={styles_product.container}>
          <View style={styles_product.rect926322222}>

         
          <ImageBackground
              source={{ uri: item.images[0].src }}
                resizeMode="contain"
                style={styles_product.product_thumb}
              >
<View style={styles_product.rect946322222}>
              <Text style={styles_product.rs75003362}>Rs {item.price}</Text>
            </View>
                
              </ImageBackground>
              {/* { item.images[0].src ?  <Image
                  source={{ uri: item.images[0].src }}
                  resizeMode="contain"
                  style={styles_product.product_thumb}
                ></Image> :  <Image
                  source={require("../../assets/images/catimg.jpg")}
                  resizeMode="contain"
                  style={styles_product.product_thumb}
                ></Image>}
 */}


            
          </View>
          <View style={styles_product.rect936322222}>
            <Text style={styles_product.buy222}>VIEW</Text>
          </View>
      </View>


        // <View style={[styles.container, styles.materialCardWithImageAndTitle1]}>
        //     <View style={styles.rect}>
        //       <Image
        //       source={{ uri: item.images[0].src }}
        //         resizeMode="contain"
        //         style={styles.image}
        //       ></Image>
        //       <View style={styles.rs1550Row}>
        //         <Text style={styles.rs1550}>Rs {item.price}</Text>
        //         <Text style={styles.rs15503}>Rs {(parseFloat(item.price) + 200)}</Text>
        //       </View>
        //       <Text style={styles.loremIpsum}>
        //       {item.name}
        //       </Text>
        //       <TouchableOpacity style={[stylesb.container, styles.materialButtonDanger]}
        //       onPress={() => this.props.navigation.navigate("Product", { product: item })}>
        //       <Text style={styles.caption}>Add</Text>
        //     </TouchableOpacity>
        //     </View>
        //   </View>

      )


    render() {
        return (
           

            <View style={{width:screenWidth, height : 200, marginTop:5, marginLeft:4, marginBottom:5}}>
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator ={false}
                
                style={{flexDirection:'row'}}>
                {
                    this.state.products.length ?
                    <FlatList
                    //contentContainerStyle={prostyles.list} 
                    numColumns={5}
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

  const styles_product = StyleSheet.create({
    container: {
      width: 79,
      height: 99,
      marginRight: 5,
      marginBottom : 5,
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: "rgba(100,177,12,1)",
    },
    rect926322222: {
      width: 79,
      height: 72,
      backgroundColor: "#fff"
    },
    product_thumb:{
      width: 79,
      height: 72
    },
    rect946322222: {
      width: 79,
      height: 12,
      backgroundColor: "rgba(91,91,91,0.36)",
      marginTop: 60
    },
    rs75003362: {
      color: "rgba(0,0,0,1)",
      fontSize: 12,
      // fontFamily: "roboto-regular"
    },
    rect936322222: {
      width: 79,
      height: 28,
      backgroundColor: "rgba(100,177,12,1)",
      justifyContent: "center"
    },
    buy222: {
      color: "rgba(255,255,255,1)",
      fontSize: 18,
      // fontFamily: "roboto-700",
      alignSelf: "center"
    }
  });
  
  


export default LatestProduct;


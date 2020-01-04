import React, { Component } from 'react';
import { StyleSheet,  Text, View , Image , ScrollView,  
  
  TouchableOpacity,
  FlatList } from 'react-native';
import axios from 'axios';

import WooApi from '../../components/config/wooapi';  

  class HomeLatestProducts extends Component {
    state = {
        products: []
      }

    fetchProducts = () => {
    const url = `${WooApi.url.wc}products?per_page=5&consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
    console.log(url);
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
    <TouchableOpacity 
    style={{height:180, margin : 7 , backgroundColor: 'transparent', borderStyle:"solid"}}
      onPress={() => this.props.navigation.navigate("Product", { product: item })}
    >
      <View style={{flex : 2 }}>
        <Image style={{flex:1, width:null, height:null, resizeMode:'cover' }} source={{ uri: item.images[0].src }} />
      </View>
      <View style={{flex : 1, paddingLeft:5, paddingTop:5 }}>
      <Text>{item.name}</Text>
                  </View>
  
    </TouchableOpacity>
  )


    render() {

        //const { navigation } = this.props;

        return (
            <View style={{height : 200, marginTop:5}}>
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator ={false}
                
                >
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
                    <View style={prostyles.loaderContainer}>
                    <Image
                        source={ require('../../assets/images/cart-loading.gif') }
                        style={prostyles.loaderImage}
                    />
                    </View>
                }
                </ScrollView>

                </View>
        );
    }
}

export default HomeLatestProducts;



const prostyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f6f6f6',
    },
    list: {
      flexDirection: 'row'
    },
    listItem: {
      width: '50%'
    },
    view: {
      padding: 10
    },
    image: {
      width: 150, 
      height: 150
    },
    text: {
      textAlign: 'center',
      fontSize: 16,
      padding: 5
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
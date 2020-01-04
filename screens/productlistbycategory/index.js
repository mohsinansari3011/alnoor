import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

import WooApi from '../../components/config/wooapi';  




export default class ProductListCategory extends React.Component {
    static navigationOptions = {
      title: 'Categoty Products ',
    };
  
    constructor(props) {
      super(props);
      const Categoryid = props.navigation.state.params.Categoryid;
      this.state = {
        Categoryid : Categoryid,
        products: []
      }
  }

    fetchProducts = () => {
      const {Categoryid} = this.state;
      //console.log(Categoryid);
      const url = `${WooApi.url.wc}products?category=${Categoryid}&consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
      //console.log(url);
      axios.get(url)
      .then(response => this.setState({ products: response.data }))
      .catch(error => console.log('error',error));
    }
    
    componentWillMount() {
      this.fetchProducts();
    
    }
  
    renderItem = ({item}) => (
      <TouchableOpacity 
        style={styles.listItem} 
        onPress={() => this.props.navigation.navigate("Product", { product: item })}
      >
        <View style={styles.view}>
          <Image style={styles.image} source={{ uri: item.images[0].src }} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  
    render() {

      //const {Categoryid} = this.state;
      //console.log(Categoryid);
      return (
        <ScrollView style={styles.container}>
          {
            this.state.products.length ?
            <FlatList
              contentContainerStyle={styles.list} 
              numColumns={2}
              data={this.state.products}
              keyExtractor={ item => item.id.toString() }
              renderItem={this.renderItem}
            />
            :
            <View style={styles.loaderContainer}>
              <Image
                source={ require('../../assets/images/cart-loading.gif') }
                style={styles.loaderImage}
              />
            </View>
          }
        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f6f6f6',
    },
    list: {
      flexDirection: 'column'
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
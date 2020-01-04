import React, { Component } from 'react';
import { Text, View , Image ,   
    SafeAreaView,
    TouchableOpacity, ScrollView , 
    FlatList , StyleSheet , Dimensions} from 'react-native';

const { width: screenWidth } = Dimensions.get('window')

import axios from 'axios';

import WooApi from '../../components/config/wooapi';  

class HomeCategories extends Component {
  constructor(props) {
    super(props);
  
  }
    
    state = {  categories:[],
      DATA : [
        {
          id: '15907',
          title: 'SOLUGHOL ISPGHOL 30g',
          image: 'https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/SOLUGHOL-ISPGHOL-30g.jpg',
        },
        {
          id: '15908',
          title: 'areej ghee',
          image: 'https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/areej-ghee.png',
        },
        {
          id: '15910',
          title: 'AREEJ CANOLA OIL',
          image: 'https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/areej-Canola-oil-1.png',
        },
        {
          id: '15911',
          title: 'AREEJ COOKING OIL 1.8 LTR',
          image: 'https:\/\/alnoorgrocers.com\/wp-content\/uploads\/2019\/12\/AREEJ-COOKING-OIL-1.8-LTR.jpg',
        },
      ],  }

    

  fetchCategories = () => {
    const url = `${WooApi.url.wc}products/categories?consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
    console.log(url);
    axios.get(url)
    .then(response => this.setState({ categories: response.data }))
    .catch(error => console.log('error',error));
    }
        

   
      


      componentWillMount() {
        //this.fetchCategories();
      }
      componentDidMount(){
        this.fetchCategories();
      }

      renderItem = ({item}) => (
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate("CatProducts", { Categoryid: item.id })}>
        
     
        <View style={[styles.container, styles.materialCardWithImageAndTitle1]}>
        <View style={styles.rect}>
          <View style={styles.imageRow}>
          {item.image ?  <Image
            source={{ uri: item.images }}
            resizeMode="contain"
            style={styles.image}
          ></Image> :  <Image
            source={require("../../assets/images/01.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>}
         
            <View style={styles.rs1550Stack}>
              <Text style={styles.rs1550}>{item.name}</Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
            <View style={styles_text.container}>
              <Text style={styles_text.text2}>&gt;</Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
      )


      oldwaytogetCat(){
        <SafeAreaView>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <TouchableOpacity style={{height:120, marginTop : 2 , backgroundColor: '#F5FCFF',}}  
                onPress={() => navigation.navigate("Products")}
                >
                <View style={{flex : 2}}>
                    <Image source={{ uri: `${item.image}`}} style={{flex:1, width:130, height:null, resizeMode:'cover'}} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              )}
             
            />
          </SafeAreaView> 
      }
    render() {

      //console.log('screenWidth',screenWidth)
        //const { DATA } = this.state;
        //console.log('HOME CATEOGRY--------',this.props);
        //const { navigation } = this.props;
      //console.log(this.state.categories);
        return (
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator ={false}
          
          style={{flexDirection:'column'}}>
          {
              this.state.categories.length ?
              <FlatList
              //contentContainerStyle={prostyles.list} 
              //numColumns={10}
              data={this.state.categories}
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
    width: screenWidth,
    height: 64,
    backgroundColor: "rgba(230, 230, 230,1)",
    flexDirection: "row",
    marginLeft: -1
  },
  image: {
    width: 71,
    height: 47
  },
  rs1550: {
    top: 0,
    left: 0,
    color: "#121212",
    position: "absolute",
    justifyContent: "space-between",
    fontSize: 11,
    //fontFamily: "roboto-700",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left"
  },
  text: {
    top: 13,
    left: 0,
    color: "#121212",
    position: "absolute",
    justifyContent: "space-between",
    fontSize: 9,
    //fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left"
  },
  rs1550Stack: {
    width: screenWidth -135,
    height: 29,
    marginLeft: 14,
    marginTop: 11
  },
  text2: {
    color: "#121212",
    justifyContent: "space-between",
    fontSize: 20,
    //fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    marginLeft: 141,
    marginTop: 16
  },
  imageRow: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 11,
    marginTop: 6
  },
  materialCardWithImageAndTitle1: {
    width: screenWidth,
    height: 66
  }
});


const styles_text = StyleSheet.create({
  container: {
    width: 10,
    height: 16
  },
  text2: {
    color: "#121212",
    justifyContent: "space-between",
    fontSize: 20,
    //fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    //marginLeft: 141,
    marginTop: 16
  }
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


export default HomeCategories;
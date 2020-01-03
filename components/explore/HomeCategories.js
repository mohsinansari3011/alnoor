import React, { Component } from 'react';
import { Text, View , Image ,   
    SafeAreaView,
    TouchableOpacity,
    FlatList } from 'react-native';
class HomeCategories extends Component {

    

    state = {  DATA : [
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

    


   
      constructor(props) {
        super(props);
      
      }


    render() {

        const { DATA } = this.state;

        //console.log('HOME CATEOGRY--------',this.props);
        const { navigation } = this.props;
        return (
            DATA ? <SafeAreaView>
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
          </SafeAreaView> : <View></View>
        );
    }
}

export default HomeCategories;
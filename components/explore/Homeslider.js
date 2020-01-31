
import React, { Component } from "react";
import Slideshow from 'react-native-image-slider-show';
import { SliderBox } from 'react-native-image-slider-box';

import { Text, View , Image ,   
  SafeAreaView,
  TouchableOpacity, ScrollView , 
  FlatList , StyleSheet , Dimensions} from 'react-native';

import axios from 'axios';

import WooApi from '../../components/config/wooapi';  

class Homeslider extends Component {
    state = { 
    position: 1,
      interval: null,
      dataSource: [
        {
          title: '',
          caption: '',
          url: require('../../assets/images/01.jpg'),
        }, {
          title: '',
          caption: '',
          url: require('../../assets/images/02.jpg'),
        }, {
          title: '',
          caption: '',
          url: require('../../assets/images/03.jpg'),
        },
         
      ],images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
      ],
      sliderImages:[],
      slideData:[]

     }


  fetchsliderImages = () => {
  const url = `${WooApi.url.wp}posts?filter[category_name]=app-main-slider`;
  //console.log(url);
  axios.get(url)
  .then(response => {
    this.setState({ sliderImages: response.data })
    this.generateSliderImages(); 
  })
  .catch(error => console.log('error',error));
  }

getslider(){

    return(<SliderBox
              
      images={this.state.images}
      sliderBoxHeight={200}
      onCurrentImagePressed={index =>
          console.warn(`image ${index} pressed`)
      }
  />)
  };
    
componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  
  componentDidMount(){
    this.fetchsliderImages();
    
  }


  componentWillMount() {
    this.setState({
  
  
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 4000)
  
     
  
  
    });
  }
  
  
  generateSliderImages(){
    const { sliderImages } = this.state;
   
    sliderImages ?
    sliderImages.map((number) => {
    //console.log('number.id ' , number.id)
    this.state.slideData.push({"id": number.id ,"title": number.title.rendered , "caption": "" , "url": number.better_featured_image.source_url})
    }
    ) : this.state.slideData
    
    //console.log('slideData---',this.state.slideData);
    

    
  }



    render() {
      
      
      //const { slideData } = this.state;
      //console.log(slideData);
      //sliderImages ? console.log('items sliderImages--', sliderImages.id) : ''
       
  
       return (
            <Slideshow 
                //scrollEnabled = {false}
                dataSource={this.state.slideData}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })} 
                onPress={index =>
                console.log(index.image.title)
                //console.warn(`image ${index} pressed`)
            }/>
        );
    }
}

export default Homeslider;
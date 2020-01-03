
import React, { Component } from "react";
import Slideshow from 'react-native-image-slider-show';
import { SliderBox } from 'react-native-image-slider-box';



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
      ]


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
  
  
  componentWillMount() {
    this.setState({
  
  
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 4000)
  
     
  
  
    });
  }
  
  
    render() {
        return (
            <Slideshow 
                //scrollEnabled = {false}
                dataSource={this.state.dataSource}
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
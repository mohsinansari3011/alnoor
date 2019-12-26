
import React , {Component} from 'react'

class Header extends Component {
    //state = {  }
    
    constructor(props) {
        super(props)
        
      }

    render() {
        const { navigation } = this.props;
        return {
            headerTitleStyle : {
                    //color:"white",
                    //fontFamily:"OpenSans",
                    alignSelf: 'center' ,
                    textAlign: 'center',
                    flex:1
            },
            headerTitle: (
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} >
              <Image  
              style={{ width: 220, height: 35 }} source={require('./../../assets/images/food-logo.png')}/>
            </TouchableOpacity>
    
              
          ),
            //title: 'Al-Noor Grocer',
    
            headerLeft: (
              <Icon
                style={{ paddingLeft: 10 }}
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                size={30}
              />
            ),
            headerRight: (
              <Icon
                style={{ paddingRight: 10 }}
                name={Platform.OS === 'ios' ? `ios-cart` : 'md-cart'}
                size={30}
                onPress={() => navigation.navigate('Cart')}
              />
            ),
            
    
          };
    }
}

export default Header;
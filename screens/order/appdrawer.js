import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';

import { Linking, I18nManager, Platform, ScrollView, TouchableOpacity, Text, View, Image, PixelRatio, Share } from 'react-native';


class DrawerContent extends Component {


  navigateToScreen = route => () => {
    const navigate = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigate);
  };
  constructor(props) {
    super(props);
   
    this.state = {
      name: '',
      channels: [
        { key: 0, screen: 'Dashboard', title: "HomeScreen", icon: require('./../../assets/home.png') },
        { key: 1, screen: 'Register', title: "Register", icon: require('./../../assets/register.png') },
        { key: 2, screen: 'Orders', title: "Orders", icon: require('./../../assets/order.png') },
        { key: 3, screen: 'Wallet', title: "Wallet", icon: require('./../../assets/wallet.png') },
        { key: 4, screen: 'AboutCompany', title: "AboutCompany", icon: require('./../../assets/about.png') },
        { key: 5, screen: 'Contactus2', title: "Contactus2", icon: require('./../../assets/call.png') },
        { key: 6, screen: 'FAQ', title: "FAQ", icon: require('./../../assets/faq.png') },
        { key: 9, screen: 'Settings', title: "Settings", icon: require('./../../assets/about.png') },
      ]

    };

    this.onPressHandler = this.onPressHandler.bind(this);
    this.navigateToScreen = this.navigateToScreen.bind(this);
    //this.retriveUserObject('userobject');

  }
  



  onPressHandler() {

    const url = "whatsapp://send?text=${'Better Life'}&phone=${+923344443011}";


    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        alert('Whatsapp not installled')
        console.log('Can\'t handle url: ' + url);
      } else {
        Linking.openURL(url)
          .catch(err => {
            console.warn('openURL error', err);
          });
      }
    }).catch(err => console.warn('An unexpected error happened', err));

  }

  renderChannelButtons() {

    return this.state.channels.map(({ key, screen, title, icon }) => (

      <View key={key} style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={this.navigateToScreen(screen)}
        >

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={(icon)}
              width={20}
              height={20}
              resizeMode={"contain"}
              style={{ margin: 12, width: 20, alignSelf: 'center' }}
            />
            <Text style={{ color: 'white', alignSelf: 'center' }}>{title}</Text>

          </View>

        </TouchableOpacity>
        <View style={[styles.lineStyle, { marginBottom: 5 }]} />
      </View>


    ));
  }

  onlogout = () => {

    // const isSignedIn = await GoogleSignin.isSignedIn();

    // if (isSignedIn) {
    //   this.signOut();
    // }

    // AsyncStorage.clear();

    //this.props.navigation.navigate('DashStack');
  };

  render() {

    return (

       
      <View style={styles.containerStyle}>

        <TouchableOpacity onPress={this.navigateToScreen('CustomerProfile')}>
          <Image source={require('./../../assets/splash-b.png')}
            style={styles.sideMenuProfileIcon} />
          <View style={{ alignSelf: 'center' }}>
            <Text style={{ color: 'white', marginTop: 8, fontSize: 17 }} >{this.state.name}</Text>
          </View>
        </TouchableOpacity>
        <View style={{ alignSelf: 'center' }}>

          <TouchableOpacity onPress={() => this.onlogout()}   >

            <Text style={{ color: 'black', marginTop: -1, fontSize: 15 }} >Logout</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={[styles.lineStyle, { marginTop: 17, marginBottom: 5 }]} />
          {this.renderChannelButtons()}


          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => this.onShare()} >
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('./../../assets/share.png')}
                  width={20}
                  height={20}
                  resizeMode={"contain"}
                  style={{ margin: 12, width: 20, alignSelf: 'center' }} />
                <Text style={{ color: 'white', alignSelf: 'center' }}>share</Text>
              </View>
            </TouchableOpacity>
            <View style={[styles.lineStyle, { marginBottom: 5 }]} />
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => this.onPressHandler()}
            >

              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={(require('./../../assets/whatsapp.png'))}
                  width={20}
                  height={20}
                  resizeMode={"contain"}
                  style={{ margin: 12, width: 20, alignSelf: 'center' }} />
                <Text style={{ color: 'white', alignSelf: 'center' }}>whatsapp</Text>
              </View>

            </TouchableOpacity>
            <View style={[styles.lineStyle, { marginBottom: 5 }]} />
          </View>



          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, marginHorizontal: 30 }}>

            <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/') }} >
              <View style={styles.CircleShapeView}>
                <Image
                  source={require('./../../assets/f.png')}
                  resizeMode={"contain"}
                  style={{ width: 30, alignSelf: 'center' }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { Linking.openURL('https://www.linkedin.com/') }}>
              <View style={styles.CircleShapeView}>
                <Image
                  source={require('./../../assets/linked.png')}
                  resizeMode={"contain"}
                  style={{ width: 25, alignSelf: 'center' }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/') }}>
              <View style={styles.CircleShapeView}>
                <Image
                  source={require('./../../assets/insta.png')}
                  resizeMode={"contain"}
                  style={{ width: 20, alignSelf: 'center' }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>


      </View>

    );
  }
}

const styles = {
  containerStyle: {

    paddingTop: (Platform.OS === 'ios') ? 30 : 20,
    flex: 1,
    width: '100%',
    backgroundColor: "rgba(100,177,12,1)",
  },
  sideMenuProfileIcon:
  {
    alignSelf: 'center',

    width: 100,
    height: 100,
    overflow: "hidden",
    borderRadius: 100 / 2
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#f48968',
    marginTop: 5,
    marginHorizontal: 15
  },
  CircleShapeView: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    borderColor: 'white',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderWidth: 2,
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',

  },
};

export default DrawerContent;

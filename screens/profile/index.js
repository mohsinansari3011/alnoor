import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is Profile Page</Text>
          <Button color={designVars.primary_color} title="Dashboard" onPress={() => this.props.navigation.navigate("Dashboard")} />
        </View>
      );
    }
  }
  
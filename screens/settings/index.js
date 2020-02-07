import React, { Component } from 'react';

export default class Setting extends Component {
    render() {
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is Setting Page</Text>
          <Button color={designVars.primary_color} title="Dashboard" onPress={() => this.props.navigation.navigate("Dashboard")} />
        </View>
      );
    }
  }
  
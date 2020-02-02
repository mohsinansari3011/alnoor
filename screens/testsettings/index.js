import React, { Component } from "react";
import { StyleSheet, View, Text, Switch, StatusBar } from "react-native";
import HeaderX from "../components/HeaderX";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function TestSettings(props) {
  return (
    <View style={styles.root}>
      <HeaderX icon2Name="power" style={styles.headerX}></HeaderX>
      <View style={styles.body}>
        <Text style={styles.pageName}>SETTINGS</Text>
        <View style={styles.pageNameFiller}></View>
        <View style={styles.settingsList}>
          <View style={styles.accountSettings}>
            <Text style={styles.expanded}>Account Settings</Text>
            <View style={styles.subSettings}>
              <View style={styles.editProfileColumn}>
                <View style={styles.editProfile}>
                  <Text style={styles.text10}>Edit Profile</Text>
                  <View style={styles.text10Filler}></View>
                  <IoniconsIcon
                    name="ios-arrow-forward"
                    style={styles.icon}
                  ></IoniconsIcon>
                </View>
                <View style={styles.changeConnections}>
                  <Text style={styles.text11}>Change connections</Text>
                  <View style={styles.text11Filler}></View>
                  <IoniconsIcon
                    name="ios-arrow-forward"
                    style={styles.icon2}
                  ></IoniconsIcon>
                </View>
              </View>
              <View style={styles.editProfileColumnFiller}></View>
              <View style={styles.providerSettings}>
                <Text style={styles.text12}>Edit provider settings</Text>
                <View style={styles.text12Filler}></View>
                <IoniconsIcon
                  name="ios-arrow-forward"
                  style={styles.icon3}
                ></IoniconsIcon>
              </View>
            </View>
          </View>
          <View style={styles.sub2}>
            <View style={styles.notificationsColumn}>
              <View style={styles.notifications}>
                <Text style={styles.text7}>Notifications</Text>
                <View style={styles.text7Filler}></View>
                <Switch
                  value={true}
                  trackColor={{ true: "rgba(230, 230, 230,1)" }}
                  thumbColor="rgba(100,177,12,1)"
                  style={styles.switch3}
                ></Switch>
              </View>
              <View style={styles.backup}>
                <Text style={styles.text72}>Backup</Text>
                <View style={styles.text72Filler}></View>
                <Switch
                  value={false}
                  trackColor={{
                    true: "#1fb2cc",
                    false: "rgba(230, 230, 230,1)"
                  }}
                  style={styles.switch2}
                ></Switch>
              </View>
            </View>
            <View style={styles.notificationsColumnFiller}></View>
            <View style={styles.sponsored}>
              <Text style={styles.text73}>Sponsored Messages</Text>
              <View style={styles.text73Filler}></View>
              <Switch
                value={false}
                trackColor={{
                  true: "rgba(230, 230, 230,1)",
                  false: "rgba(230, 230, 230,1)"
                }}
                style={styles.switch4}
              ></Switch>
            </View>
          </View>
        </View>
      </View>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="rgba(0,0,0,0)"
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  headerX: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  body: {
    width: 360,
    flex: 1
  },
  pageName: {
    color: "rgba(100,177,12,1)",
    fontSize: 24,
    marginTop: 34,
    marginLeft: 35
  },
  pageNameFiller: {
    flex: 1
  },
  settingsList: {
    width: 358,
    height: 409,
    marginBottom: 170,
    alignSelf: "center"
  },
  accountSettings: {
    height: 165,
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24
  },
  expanded: {
    color: "#121212",
    fontSize: 18,
    marginTop: -3
  },
  subSettings: {
    height: 118,
    marginTop: 15
  },
  editProfile: {
    height: 30,
    flexDirection: "row"
  },
  text10: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6
  },
  text10Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(100,177,12,1)",
    fontSize: 30
  },
  changeConnections: {
    height: 30,
    flexDirection: "row",
    marginTop: 11
  },
  text11: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6
  },
  text11Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(100,177,12,1)",
    fontSize: 30
  },
  editProfileColumn: {
    marginLeft: 10,
    marginRight: 10
  },
  editProfileColumnFiller: {
    flex: 1
  },
  providerSettings: {
    height: 30,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  },
  text12: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6
  },
  text12Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon3: {
    color: "rgba(100,177,12,1)",
    fontSize: 30
  },
  sub2: {
    height: 186,
    marginTop: 18,
    marginLeft: 29,
    marginRight: 29
  },
  notifications: {
    height: 27,
    alignSelf: "center",
    flexDirection: "row"
  },
  text7: {
    color: "#121212",
    fontSize: 18
  },
  text7Filler: {
    flex: 1,
    flexDirection: "row"
  },
  switch3: {
    width: 40
  },
  backup: {
    height: 27,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 53
  },
  text72: {
    color: "#121212",
    fontSize: 18
  },
  text72Filler: {
    flex: 1,
    flexDirection: "row"
  },
  switch2: {
    width: 40,
    marginRight: -2
  },
  notificationsColumn: {},
  notificationsColumnFiller: {
    flex: 1
  },
  sponsored: {
    height: 27,
    alignSelf: "center",
    flexDirection: "row"
  },
  text73: {
    color: "#121212",
    fontSize: 18
  },
  text73Filler: {
    flex: 1,
    flexDirection: "row"
  },
  switch4: {
    width: 40
  }
});

export default Settings;

import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, StatusBar } from "react-native";
import HeaderX from "../headerx";
import FeatherIcon from "react-native-vector-icons/Feather";


export default class Homesreen extends Component {
  
    render () {

        return <View style={styles.root}>
        <HeaderX
          icon2Family="Feather"
          icon2Name="search"
          style={styles.headerX}
        ></HeaderX>
        <View style={styles.body}>
          <View style={styles.rect87}></View>
          <View style={styles.scrollAreaStack}>
            <View style={styles.scrollArea}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <View style={styles.group23Row}>
                  <View style={styles.group23}>
                    <View style={styles.rect92632222222}>
                      <View style={styles.rect94632222222}>
                        <Text style={styles.rs7500336222}>Rs. 7,500</Text>
                      </View>
                    </View>
                    <View style={styles.rect93632222222}>
                      <Text style={styles.buy22222}>BUY</Text>
                    </View>
                  </View>
                  <View style={styles.group24}>
                    <View style={styles.rect92632222223}>
                      <View style={styles.rect94632222223}>
                        <Text style={styles.rs7500336223}>Rs. 7,500</Text>
                      </View>
                    </View>
                    <View style={styles.rect93632222223}>
                      <Text style={styles.buy22223}>BUY</Text>
                    </View>
                  </View>
                  <View style={styles.group25}>
                    <View style={styles.rect926322222232}>
                      <View style={styles.rect946322222232}>
                        <Text style={styles.rs75003362232}>Rs. 7,500</Text>
                      </View>
                    </View>
                    <View style={styles.rect936322222232}>
                      <Text style={styles.buy222232}>BUY</Text>
                    </View>
                  </View>
                  <View style={styles.group27}>
                    <View style={styles.rect9263222222322}>
                      <View style={styles.rect9463222222322}>
                        <Text style={styles.rs750033622322}>Rs. 7,500</Text>
                      </View>
                    </View>
                    <View style={styles.rect9363222222322}>
                      <Text style={styles.buy2222322}>BUY</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.group}></View>
            <View style={styles.group14}>
              <View style={styles.rect92632222}>
                <View style={styles.rect94632222}>
                  <Text style={styles.rs7500336}>Rs. 7,500</Text>
                </View>
              </View>
              <View style={styles.rect93632222}>
                <Text style={styles.buy22}>BUY</Text>
              </View>
            </View>
            <View style={styles.group15}>
              <View style={styles.rect92632223}>
                <View style={styles.rect94632223}>
                  <Text style={styles.rs7500335}>Rs. 7,500</Text>
                </View>
              </View>
              <View style={styles.rect93632223}>
                <Text style={styles.buy23}>BUY</Text>
              </View>
            </View>
            <View style={styles.group16}>
              <View style={styles.rect92632224}>
                <View style={styles.rect94632224}>
                  <Text style={styles.rs7500334}>Rs. 7,500</Text>
                </View>
              </View>
              <View style={styles.rect93632224}>
                <Text style={styles.buy24}>BUY</Text>
              </View>
            </View>
            <View style={styles.group21}>
              <View style={styles.rect926322222}>
                <View style={styles.rect946322222}>
                  <Text style={styles.rs75003362}>Rs. 7,500</Text>
                </View>
              </View>
              <View style={styles.rect936322222}>
                <Text style={styles.buy222}>BUY</Text>
              </View>
            </View>
            <View style={styles.group22}>
              <View style={styles.rect9263222222}>
                <View style={styles.rect9463222222}>
                  <Text style={styles.rs750033622}>Rs. 7,500</Text>
                </View>
              </View>
              <View style={styles.rect9363222222}>
                <Text style={styles.buy2222}>BUY</Text>
              </View>
            </View>
            <View style={styles.group26}>
              <View style={styles.rect926322222233}>
                <View style={styles.rect946322222233}>
                  <Text style={styles.rs75003362233}>Rs. 7,500</Text>
                </View>
              </View>
              <View style={styles.rect936322222233}>
                <Text style={styles.buy222233}>BUY</Text>
              </View>
            </View>
          </View>
          <View style={styles.scrollArea1Stack}>
            <View style={styles.scrollArea1}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.scrollArea1_contentContainerStyle}
              ></ScrollView>
            </View>
            <View style={styles.group29}>
              <View style={styles.rect89}>
                <View style={styles.rect92632222223232Row}>
                  <View style={styles.rect92632222223232}></View>
                  <View style={styles.categoryNameStack}>
                    <Text style={styles.categoryName}>Category Name</Text>
                    <FeatherIcon
                      name="arrow-right"
                      style={styles.icon}
                    ></FeatherIcon>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.group30}>
              <View style={styles.rect892}>
                <View style={styles.rect926322222232322Row}>
                  <View style={styles.rect926322222232322}></View>
                  <View style={styles.categoryName2Stack}>
                    <Text style={styles.categoryName2}>Category Name</Text>
                    <FeatherIcon
                      name="arrow-right"
                      style={styles.icon2}
                    ></FeatherIcon>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.group31}>
              <View style={styles.rect893}>
                <View style={styles.rect926322222232323Row}>
                  <View style={styles.rect926322222232323}></View>
                  <View style={styles.categoryName3Stack}>
                    <Text style={styles.categoryName3}>Category Name</Text>
                    <FeatherIcon
                      name="arrow-right"
                      style={styles.icon3}
                    ></FeatherIcon>
                  </View>
                </View>
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
    }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  headerX: {
    width: 360,
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignSelf: "center"
  },
  body: {
    flex: 1
  },
  rect87: {
    width: 360,
    height: 213,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea: {
    top: 1,
    left: 2,
    width: 343,
    height: 200,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    flexDirection: "row"
  },
  scrollArea_contentContainerStyle: {
    width: 343,
    height: 199
  },
  group23: {
    width: 66,
    height: 99
  },
  rect92632222222: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  rect94632222222: {
    width: 66,
    height: 12,
    backgroundColor: "rgba(91,91,91,0.36)",
    marginTop: 60
  },
  rs7500336222: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    // //fontFamily: "roboto-regular"
  },
  rect93632222222: {
    width: 66,
    height: 28,
    backgroundColor: "rgba(100,177,12,1)",
    justifyContent: "center"
  },
  buy22222: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    //fontFamily: "roboto-700",
    alignSelf: "center"
  },
  group24: {
    width: 66,
    height: 99,
    marginLeft: 3
  },
  rect92632222223: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  rect94632222223: {
    width: 66,
    height: 12,
    backgroundColor: "rgba(91,91,91,0.36)",
    marginTop: 60
  },
  rs7500336223: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    //fontFamily: "roboto-regular"
  },
  rect93632222223: {
    width: 66,
    height: 28,
    backgroundColor: "rgba(100,177,12,1)",
    justifyContent: "center"
  },
  buy22223: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    //fontFamily: "roboto-700",
    alignSelf: "center"
  },
  group25: {
    width: 66,
    height: 99,
    marginLeft: 3
  },
  rect926322222232: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  rect946322222232: {
    width: 66,
    height: 12,
    backgroundColor: "rgba(91,91,91,0.36)",
    marginTop: 60
  },
  rs75003362232: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    //fontFamily: "roboto-regular"
  },
  rect936322222232: {
    width: 66,
    height: 28,
    backgroundColor: "rgba(100,177,12,1)",
    justifyContent: "center"
  },
  buy222232: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    //fontFamily: "roboto-700",
    alignSelf: "center"
  },
  group27: {
    width: 66,
    height: 99,
    marginLeft: 3
  },
  rect9263222222322: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  rect9463222222322: {
    width: 66,
    height: 12,
    backgroundColor: "rgba(91,91,91,0.36)",
    marginTop: 60
  },
  rs750033622322: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    //fontFamily: "roboto-regular"
  },
  rect9363222222322: {
    width: 66,
    height: 28,
    backgroundColor: "rgba(100,177,12,1)",
    justifyContent: "center"
  },
  buy2222322: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    //fontFamily: "roboto-700",
    alignSelf: "center"
  },
  group23Row: {
    height: 99,
    flexDirection: "row",
    flex: 1,
    marginRight: 2,
    marginLeft: 68,
    marginTop: 101
  },
  group: {
    top: 2,
    left: 0,
    width: 74,
    height: 99,
    position: "absolute"
  },
  group14: {
    top: 0,
    left: 70,
    width: 66,
    height: 99,
    position: "absolute"
  },
  rect92632222: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  rect94632222: {
    width: 66,
    height: 12,
    backgroundColor: "rgba(91,91,91,0.36)",
    marginTop: 60
  },
  rs7500336: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    //fontFamily: "roboto-regular"
  },
  rect93632222: {
    width: 66,
    height: 28,
    backgroundColor: "rgba(100,177,12,1)",
    justifyContent: "center"
  },
  buy22: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    //fontFamily: "roboto-700",
    alignSelf: "center"
  },
  group15: {
    top: 0,
    left: 139,
    width: 66,
    height: 99,
    position: "absolute"
  },
  rect92632223: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  rect94632223: {
    width: 66,
    height: 12,
    backgroundColor: "rgba(91,91,91,0.36)",
    marginTop: 60
  },
  rs7500335: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    //fontFamily: "roboto-regular"
  },
  rect93632223: {
    width: 66,
    height: 28,
    backgroundColor: "rgba(100,177,12,1)",
    justifyContent: "center"
  },
  buy23: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    //fontFamily: "roboto-700",
    alignSelf: "center"
  },
  group16: {
    top: 0,
    left: 208,
    width: 66,
    height: 99,
    position: "absolute"
  },
  rect92632224: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  rect94632224: {
    width: 66,
    height: 12,
    backgroundColor: "rgba(91,91,91,0.36)",
    marginTop: 60
  },
  rs7500334: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    //fontFamily: "roboto-regular"
  },
  rect93632224: {
    width: 66,
    height: 28,
    backgroundColor: "rgba(100,177,12,1)",
    justifyContent: "center"
  },
  buy24: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    //fontFamily: "roboto-700",
    alignSelf: "center"
  },
  group21: {
    top: 0,
    left: 1,
    width: 66,
    height: 99,
    position: "absolute"
  },
  rect926322222: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  rect946322222: {
    width: 66,
    height: 12,
    backgroundColor: "rgba(91,91,91,0.36)",
    marginTop: 60
  },
  rs75003362: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    //fontFamily: "roboto-regular"
  },
  rect936322222: {
    width: 66,
    height: 28,
    backgroundColor: "rgba(100,177,12,1)",
    justifyContent: "center"
  },
  buy222: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    //fontFamily: "roboto-700",
    alignSelf: "center"
  },
  group22: {
    top: 102,
    left: 1,
    width: 66,
    height: 99,
    position: "absolute"
  },
  rect9263222222: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  rect9463222222: {
    width: 66,
    height: 12,
    backgroundColor: "rgba(91,91,91,0.36)",
    marginTop: 60
  },
  rs750033622: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    //fontFamily: "roboto-regular"
  },
  rect9363222222: {
    width: 66,
    height: 28,
    backgroundColor: "rgba(100,177,12,1)",
    justifyContent: "center"
  },
  buy2222: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    //fontFamily: "roboto-700",
    alignSelf: "center"
  },
  group26: {
    top: 0,
    left: 277,
    width: 66,
    height: 99,
    position: "absolute"
  },
  rect926322222233: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  rect946322222233: {
    width: 66,
    height: 12,
    backgroundColor: "rgba(91,91,91,0.36)",
    marginTop: 60
  },
  rs75003362233: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    //fontFamily: "roboto-regular"
  },
  rect936322222233: {
    width: 66,
    height: 28,
    backgroundColor: "rgba(100,177,12,1)",
    justifyContent: "center"
  },
  buy222233: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    //fontFamily: "roboto-700",
    alignSelf: "center"
  },
  scrollAreaStack: {
    width: 345,
    height: 201,
    marginTop: 4,
    marginLeft: 7
  },
  scrollArea1: {
    top: 0,
    left: 2,
    width: 343,
    height: 236,
    backgroundColor: "rgba(230, 230, 230,0.14)",
    position: "absolute"
  },
  scrollArea1_contentContainerStyle: {
    width: 343,
    height: 199
  },
  group29: {
    top: 0,
    left: 0,
    width: 342,
    height: 72,
    position: "absolute"
  },
  rect89: {
    width: 343,
    height: 73,
    backgroundColor: "rgba(230, 230, 230,1)",
    flexDirection: "row",
    marginLeft: -1
  },
  rect92632222223232: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  categoryName: {
    top: 12,
    left: 0,
    width: 220,
    height: 16,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 18,
    //fontFamily: "roboto-regular"
  },
  icon: {
    top: 0,
    left: 205,
    position: "absolute",
    color: "rgba(100,177,12,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  categoryNameStack: {
    width: 245,
    height: 40,
    marginLeft: 21,
    marginTop: 16
  },
  rect92632222223232Row: {
    height: 72,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 2
  },
  group30: {
    top: 76,
    left: 0,
    width: 342,
    height: 72,
    position: "absolute"
  },
  rect892: {
    width: 343,
    height: 73,
    backgroundColor: "rgba(230, 230, 230,1)",
    flexDirection: "row",
    marginLeft: -1
  },
  rect926322222232322: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  categoryName2: {
    top: 12,
    left: 0,
    width: 220,
    height: 16,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 18,
    //fontFamily: "roboto-regular"
  },
  icon2: {
    top: 0,
    left: 205,
    position: "absolute",
    color: "rgba(100,177,12,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  categoryName2Stack: {
    width: 245,
    height: 40,
    marginLeft: 21,
    marginTop: 16
  },
  rect926322222232322Row: {
    height: 72,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 2
  },
  group31: {
    top: 151,
    left: 0,
    width: 342,
    height: 72,
    position: "absolute"
  },
  rect893: {
    width: 343,
    height: 73,
    backgroundColor: "rgba(230, 230, 230,1)",
    flexDirection: "row",
    marginLeft: -1
  },
  rect926322222232323: {
    width: 66,
    height: 72,
    backgroundColor: "rgba(128,128,128,1)"
  },
  categoryName3: {
    top: 12,
    left: 0,
    width: 220,
    height: 16,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 18,
    //fontFamily: "roboto-regular"
  },
  icon3: {
    top: 0,
    left: 205,
    position: "absolute",
    color: "rgba(100,177,12,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  categoryName3Stack: {
    width: 245,
    height: 40,
    marginLeft: 21,
    marginTop: 15
  },
  rect926322222232323Row: {
    height: 72,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 2,
    marginTop: 1
  },
  scrollArea1Stack: {
    width: 345,
    height: 236,
    marginTop: 6,
    marginLeft: 7
  }
});


import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonDanger from "../material/Button";

class LatestProduct extends Component {
    state = {  }
    render() {
        return (

            <View style={[styles.container, styles.materialCardWithImageAndTitle1]}>
            <View style={styles.rectRow}>
              <View style={styles.rect}>
                <Image
                  source={require("../../assets/images/03.jpg")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <View style={styles.rs1550Row}>
                  <Text style={styles.rs1550}>Rs 1550</Text>
                  <Text style={styles.rs15503}>Rs 1550</Text>
                </View>
                <Text style={styles.loremIpsum}>
                  Buy Milk Cartan{"\n"}Expire 09 jan
                </Text>
                <MaterialButtonDanger
                  style={styles.materialButtonDanger}
                ></MaterialButtonDanger>
              </View>
              <View style={styles.rect2}>
                <Image
                  source={require("../../assets/images/03.jpg")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
                <Text style={styles.rs15504}>Rs 1550</Text>
              </View>
              <View style={styles.rect3}>
                <Image
                  source={require("../../assets/images/03.jpg")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
              </View>
            </View>
          </View>

            
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
      top: 0,
      left: 1,
      width: 88,
      height: 149,
      backgroundColor: "rgba(230, 230, 230,1)",
      position: "absolute"
    },
    image: {
      width: 55,
      height: 37,
      marginTop: 23,
      marginLeft: 13
    },
    rs1550: {
      color: "#121212",
      justifyContent: "space-between",
      fontSize: 9,
      //fontFamily: "roboto-700",
      lineHeight: 16,
      letterSpacing: 0,
      textAlign: "left"
    },
    rs15503: {
      color: "#121212",
      justifyContent: "space-between",
      fontSize: 9,
      //fontFamily: "roboto-regular",
      lineHeight: 16,
      letterSpacing: 0,
      textAlign: "left",
      //textDecorationStyle: "line-through",
      marginLeft: 9,
      marginTop: 1
    },
    rs1550Row: {
      height: 17,
      flexDirection: "row",
      marginTop: 7,
      marginLeft: 10,
      marginRight: 3
    },
    loremIpsum: {
      color: "#121212",
      fontSize: 9,
      //fontFamily: "roboto-regular",
      lineHeight: 16,
      letterSpacing: 0,
      marginTop: 1,
      marginLeft: 10
    },
    materialButtonDanger: {
      top: 124,
      left: 0,
      width: 88,
      height: 26,
      position: "absolute"
    },
    rectStack: {
      width: 30,
      height: 150,
      marginTop: 1,
      marginLeft: -1
    },

    materialCardWithImageAndTitle1x: {
        width: 86,
        height: 151,
        marginTop: 294
      }

  });

export default LatestProduct;
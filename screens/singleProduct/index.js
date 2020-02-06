import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, Dimensions } from "react-native";
import HTMLView from 'react-native-htmlview';
import designVars from '../../components/config/design_variables';  
import { CartContext } from '../../context/CartContext';
const { width: screenWidth } = Dimensions.get('window')

export default class SingleProduct extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        //title: navigation.state.params.product.name
        title: 'ALNOOR'
    });

    constructor(props) {
        super(props);
        const product = props.navigation.state.params.product;
        console.log('single product',product.categories[0].slug);
        this.state = {
            currentItem: {
                id: product.id,
                image: product.images[0].src,
                name: product.name,
                price: product.price,
                quantity: 1,
            }
        }
    }

    decreaseQuantity = () => {
        if(this.state.currentItem.quantity <= 1) {
            return;
        } else {
            this.setState(state => {
                return {
                    currentItem: {
                        ...state.currentItem,
                        quantity: state.currentItem.quantity - 1
                    }
                }
            });
        }
    }

    increaseQuantitiy = () => {
        this.setState(state => {
            return {
                currentItem: {
                    ...state.currentItem,
                    quantity: state.currentItem.quantity + 1
                }
            }
        });
    }

    changeQuantity(quantity) {
        this.setState(state => {
            return {
                currentItem: {
                    ...state.currentItem,
                    quantity: Number(quantity)
                }
            }
        });
    }

    render() {
        const product = this.props.navigation.state.params.product;
        return (
            <CartContext.Consumer>
            {cart => ( 
                <ScrollView>
                    <Image style={styles.image} source={{ uri: product.images[0].src }} />
                    <Text style={styles.text}>{product.name}     Rs{product.price}</Text>
                    <View style={styles.quantityCart}>
                        <View style={styles.quantity}>
                            <TouchableOpacity style={styles.decreaseButton} onPress={this.decreaseQuantity}>
                                <Text> - </Text>
                            </TouchableOpacity>
                            <TextInput
                                style={styles.input}
                                onChangeText={(quantity) => this.changeQuantity(quantity)}
                                value={`${this.state.currentItem.quantity}`}
                                keyboardType="numeric"
                                />
                            <TouchableOpacity style={styles.increaseButton} onPress={this.increaseQuantitiy} >
                                <Text> + </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => cart.addItem(this.state.currentItem)  } >
                            <Text style={{ color: '#fff' }}> ADD TO CART </Text>
                        </TouchableOpacity>
                    </View>
                    <HTMLView style={styles.html} value={product.description} />
                </ScrollView>
            )}
            </CartContext.Consumer>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        width: 360,
        height: 360
    },
    text: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
    },
    quantityCart: {
        flexDirection: 'row', 
        padding: 10, 
        marginLeft: 20,
        marginBottom: 20,
    },
    quantity: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    input: {
        height: 40,
        width: 50,
        borderWidth: 1,
        borderColor: 'rgba(27,31,35,0.05)',
        padding: 10,
        backgroundColor: 'rgba(27,31,35,0.05)',
    },
    button: {
        alignItems: 'center',
        backgroundColor: designVars.primary_color,
        padding: 10,
        width: (screenWidth - 190),
        height: 40,
        marginLeft: 20,
        // borderBottomLeftRadius: 17,
        // borderBottomRightRadius: 17,
        // borderTopLeftRadius: 17,
        // borderTopRightRadius: 17,
    },
    decreaseButton: {
        height: 40,
        width: 30,
        padding: 10,
        backgroundColor: 'rgba(27,31,35,0.05)',
        // borderBottomLeftRadius: 17,
        // borderTopLeftRadius: 17,
    },
    increaseButton: {
        height: 40,
        width: 30,
        padding: 8,
        backgroundColor: 'rgba(27,31,35,0.05)',
        // borderBottomRightRadius: 17,
        // borderTopRightRadius: 17,
    },
    description: {
        fontSize: 14,
        padding: 15,
    },
    html: {
        paddingLeft: 20,
        paddingRight: 20
    }
});

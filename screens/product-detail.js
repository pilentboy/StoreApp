import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

// ProductDetail Component
//////////////////////// Working on it-------------------
function ProductDetail({ route }) {

    const { name, price, imgsrc, size, type, description, related_products } = route.params

    return (
        <View style={style.flex}>
            <StatusBar barStyle={"default"} />
            <Text style={style.fonts}>
                name: {name}
            </Text>
            <Text style={style.fonts}>
                price: {price}
            </Text>
            <Text style={style.fonts}>
                size: {size}
            </Text>
            <Text style={style.fonts}>
                type: {type}
            </Text>
            <Text style={style.fonts}>
                description: {description}
            </Text>
            <Image source={{ uri: imgsrc }} style={style.img} />
        </View>
    )


}

const style = StyleSheet.create({
    flex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100vw",
        Height: "100vh",
        paddingHorizontal: 15,
        paddingVertical: 30
    },
    fonts: {
        fontSize: 20,
        fontWeight: "400"
    },
    img: {
        width: 300,
        height: 400,
        marginTop: 20
    }
})
export default ProductDetail
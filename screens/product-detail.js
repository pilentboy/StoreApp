import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Alert, ScrollView } from 'react-native';

// ProductDetail Component
//////////////////////// Working on it-------------------
function ProductDetail({ route }) {

    const productInfo = route.params

    Alert.alert(productInfo.name)

    return (
        <ScrollView>
            <StatusBar barStyle={"default"} />
            <View style={style.flex}>
                <Text style={style.fonts}>
                    name: {productInfo.name}
                </Text>
                <Text style={style.fonts}>
                    price: {productInfo.price}
                </Text>
                <Text style={style.fonts}>
                    size: {productInfo.size}
                </Text>
                <Text style={style.fonts}>
                    type: {productInfo.type}
                </Text>
                <Text style={style.fonts}>
                    description: {productInfo.description}
                </Text>
                <Image source={{ uri: productInfo.imgsrc }} style={style.img} />
            </View>
        </ScrollView>

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
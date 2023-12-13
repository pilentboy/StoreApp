import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Button, Alert, ScrollView } from 'react-native';
import { ProductContext } from '../context/productContext';
// ProductDetail Component
//////////////////////// Working on it-------------------
function ProductDetail({ route }) {

    const productInfo = route.params
    const { products, updateProducts } = useContext(ProductContext)
    const [w, sw] = useState(true)

    chnageProductInfo = () => {
        const productIndex = products.findIndex((product) => product.id === productInfo.id);
        if (productIndex !== -1) {
            // Create a new array to avoid mutating the state directly
            const updatedProducts = [...products];
            let NewName;
            // Update the name of the product at the specified index
            switch (productIndex) {
                case 0:
                    NewName = "Mahdi"
                    break;
                case 1:
                    NewName = "PilentBoy"
                    break;
                case 2:
                    NewName = "Reyhaneh"
                    break;
            }
            updatedProducts[productIndex] = {
                ...updatedProducts[productIndex],
                name: NewName,
            };

            // Update the state with the new array of products
            updateProducts(updatedProducts);
            sw(false)
        }
    }

    useEffect(() => {
        chnageProductInfo()
    }, [])
    if (!w) {
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
                    <Image source={{ uri: productInfo.image }} style={style.img} />
                    <Button title='refresh' onPress={chnageProductInfo} />
                </View>
            </ScrollView>

        )
    }


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
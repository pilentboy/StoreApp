import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Button, Alert, ScrollView, Picker, Pressable } from 'react-native';
import { ProductContext } from '../context/productContext';
import ProductScore from '../componenet/product-score';
import { Entypo } from '@expo/vector-icons';
import RequiredTitle from '../componenet/required-title';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// ProductDetail Component
function ProductDetail({ route }) {

    const productInfo = route.params
    const { products, updateProducts } = useContext(ProductContext)
    const [selectedValue, setSelectedValue] = useState('option1');
    // const chnageProductInfo = () => {
    //     const productIndex = products.findIndex((product) => product.id === productInfo.id);
    //     if (productIndex !== -1) {
    //         // Create a new array to avoid mutating the state directly
    //         const updatedProducts = [...products];
    //         let NewName;
    //         // Update the name of the product at the specified index
    //         switch (productIndex) {
    //             case 0:
    //                 NewName = "Mahdi"
    //                 break;
    //             case 1:
    //                 NewName = "PilentBoy"
    //                 break;
    //             case 2:
    //                 NewName = "Reyhaneh"
    //                 break;
    //         }
    //         updatedProducts[productIndex] = {
    //             ...updatedProducts[productIndex],
    //             name: NewName,
    //         };

    //         // Update the state with the new array of products
    //         updateProducts(updatedProducts);
    //         sw(false)
    //     }
    // }

    // useEffect(() => {
    //     chnageProductInfo()
    // }, [])

    return (
        // ScrollView to enable scrolling

        <ScrollView>
            <StatusBar barStyle={"default"} />

            {/* Container for the product details content */}
            <View style={style.mainContainer}>

                {/* priduct title */}
                <Text style={[style.productName]}>
                    Striped T shirt
                </Text>

                {/* product price */}
                <Text style={style.productPrice}>
                    $29.40
                </Text>

                <View style={style.productStore}>
                    <ProductScore />
                    <Text style={{ marginHorizontal: 10, fontSize: 15, fontWeight: "bold", color: "#878e95" }}>
                        25 REVIEWS
                    </Text>
                </View>

                {/* product description */}

                <Text style={style.productDescription} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>


                {/* product size */}
                <View style={[style.flex, style.productRequiredOptions]}>

                    <RequiredTitle title="Size" />

                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedValue(itemValue)
                        } style={style.sizePicker}>
                        <Picker.Item label="Option 1" value="option1" />
                        <Picker.Item label="Option 2" value="option2" />
                        <Picker.Item label="Option 3" value="option3" />
                    </Picker>
                </View>

                {/* product type */}
                <View style={[style.flex, style.productRequiredOptions]}>

                    <RequiredTitle title="Type" />

                    {/* type*/}

                    <View style={[style.flex, { flexDirection: "row", marginTop: 20 }]}>

                        <Text style={[style.productType, { backgroundColor: "#b9ac7d" }]}>
                            HOODIE
                        </Text>

                        <Text style={[style.productType, { backgroundColor: "white", color: "#b9ac7d", borderColor: "#b9ac7d", borderWidth: 2, marginLeft: 5 }]}>
                            COLLEGE
                        </Text>

                    </View>

                </View>

                {/* add to cart */}
                <View style={[style.flex, style.addToCart, { flexDirection: "row" }]}>
                    {/* count of the product */}
                    <Text style={style.productCount}>
                        1
                    </Text>
                    {/* add to cart button */}
                    <Pressable style={[style.addToCartBTN, style.flex, { flexDirection: "row", justifyContent: "center", alignItems: "center" }]}>

                        <Entypo name="shopping-cart" size={20} color="white" />
                        <Text style={style.cartBTNText}>
                            ADD TO CART
                        </Text>
                    </Pressable>
                </View>

                {/* add to wishlist and social medias */}

                <View style={style.wishlistRow} >
                    <Pressable style={[style.flex, { flexDirection: "row", alignItems: "center" }]}>
                        <AntDesign name="hearto" size={20} color="#b9ac7d" />
                        <Text style={{ color: "#b9ac7d", fontWeight: "bold", marginLeft: 5, fontSize: 18 }}>Add to wishlist</Text>
                    </Pressable>

                    {/* social media links */}
                    <View style={[style.flex, { flexDirection: "row" }]}>

                        <FontAwesome name="telegram" size={24} color="black" style={{ marginHorizontal: 5 }} />

                        <Entypo name="youtube" size={24} color="black" />
                    </View>

                </View>
            </View>

        </ScrollView>

    )
}

const style = StyleSheet.create({
    flex: {
        display: "flex"
    },
    mainContainer: {
        paddingHorizontal: 15,
        paddingVertical: 30,
        width: "100vw"
    },
    productName: {
        fontWeight: "bold",
        fontSize: 40
    },
    productPrice: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 25
    },
    productStore: {
        marginTop: 15,
        flexDirection: "row"
    },
    productDescription: {
        fontSize: 20,
        color: "#878e95",
        fontWeight: "bold",
        marginTop: 25
    },
    requiredTitle: {
        fontWeight: "bold",
        fontSize: 20
    },
    productRequiredOptions: {
        marginTop: 25,
    },
    sizePicker: {
        marginTop: 15,
        paddingVertical: 12,
        width: "50vw",
        borderColor: "#878e95",
        paddingHorizontal: 20
    },
    pickerItem: {
        fontWeight: "bold",
        fontSize: 10
    },
    productType: {
        paddingHorizontal: 25,
        paddingVertical: 12,
        fontWeight: "bold",
        fontSize: 16
    },
    addToCart: {
        marginTop: 25
    },
    addToCartBTN: {
        width: "80%",
        paddingVertical: 15,
        backgroundColor: "#222529",
    },
    cartBTNText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 10
    },
    productCount: {
        width: "20%",
        textAlign: "center",
        paddingVertical: 15,
        fontWeight: "bold",
        color: "black",
        borderWidth: 1,
        borderColor: "#878e95"
    },
    wishlistRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 25
    }

})
export default ProductDetail
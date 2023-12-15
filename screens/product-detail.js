import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Button, Alert, ScrollView, Picker } from 'react-native';
import { ProductContext } from '../context/productContext';
import ProductScore from '../componenet/product-score';

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

                    <Text style={style.requiredTitle}>
                        Size
                    </Text>

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

                    <Text style={style.requiredTitle}>
                        Type
                    </Text>

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

})
export default ProductDetail
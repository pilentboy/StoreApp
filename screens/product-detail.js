import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Button, Alert, ScrollView, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ProductContext } from '../context/productContext';
import ProductScore from '../componenet/product-score';
import { Entypo } from '@expo/vector-icons';
import RequiredTitle from '../componenet/required-title';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ProductDescription from '../componenet/product-description';
import TextList from '../componenet/text-list';
import Product from '../componenet/product';

// ProductDetail Component
function ProductDetail({ route }) {

    const productInfo = route.params
    const { products, updateProducts } = useContext(ProductContext)
    const [selectedValue, setSelectedValue] = useState(productInfo.size);
    const [relatedProducts, setRelatedProducts] = useState([])

    // display related products in products-details based on the product's clicked information
    const findRelatedProducts = async () => {
        setRelatedProducts([])
        const relProducts = await products.filter((p, index) => {
            if (productInfo.related_products.includes(index)) {
                return products[index]
            }
        })
        setRelatedProducts(relProducts)
    }

    useEffect(() => {
        findRelatedProducts()
    }, [productInfo])

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
                    {productInfo.name}
                </Text>

                {/* product price */}
                <Text style={style.productPrice}>
                    ${productInfo.price}
                </Text>

                <View style={style.productStore}>
                    <ProductScore />
                    <Text style={{ marginHorizontal: 10, fontSize: 15, fontWeight: "bold", color: "#878e95" }}>
                        25 REVIEWS
                    </Text>
                </View>

                {/* product description */}

                <ProductDescription description={productInfo.description} />

                {/* product size */}
                <View style={[style.flex, style.productRequiredOptions]}>

                    <RequiredTitle title="Size" />

                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedValue(itemValue)
                        } style={style.sizePicker}>
                        <Picker.Item label={productInfo.size} value={productInfo.size} />
                    </Picker>



                </View>

                {/* product type */}
                <View style={[style.flex, style.productRequiredOptions]}>

                    <RequiredTitle title="Type" />

                    {/* type*/}

                    <View style={[style.flex, { flexDirection: "row", marginTop: 20 }]}>

                        <Text style={[style.productType, { backgroundColor: "#b9ac7d" }]}>
                            {productInfo.type}
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

                {/* category and tags */}

                <View style={[style.flex, { marginTop: 25 }]}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Category: <Text style={style.grayText}>Shirts</Text>
                    </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Tags: <Text style={style.grayText}>Leisure, Elegant</Text>
                    </Text>
                </View>


                {/* product image */}

                <Image source={{ uri: productInfo.image }} style={style.productImage} />

                {/* product description */}
                <View style={{ borderBottomWidth: 3, paddingVertical: 20 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 20 }}>
                        DESCRIPTION
                    </Text>
                </View>

                {/*  about the product  */}

                <View style={{ paddingHorizontal: 16, marginVertical: 20 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 23, marginBottom: 10 }}>About</Text>

                    <ProductDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

                    <ProductDescription description={productInfo.about} />

                </View>


                {/*  show list of the the product's best features */}
                <View style={{ paddingHorizontal: 16, marginVertical: 20 }}>

                    <Text style={{ fontWeight: "bold", fontSize: 23, marginBottom: 10 }}>You will love</Text>


                    {
                        productInfo.you_will_love.map((i, index) => {
                            return (
                                <TextList key={index} description={i} />
                            )
                        })
                    }


                </View>

                {/* related products */}

                <View style={{ paddingHorizontal: 0, marginVertical: 20 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 23, marginBottom: 10 }}>You might also like these</Text>

                    {/* related products */}

                    <View style={[style.flex, style.productContainer]}>
                        {
                            relatedProducts.map((product) => {
                                return (
                                    <Product key={product.id} {...product} />
                                )
                            })
                        }
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
        width: "50%",
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
    },
    grayText: {
        color: "#878e95",
    },
    productImage: {
        marginVertical: 25,
        width: "100%",
        height: 400
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    productContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",

    }

})
export default ProductDetail
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { useState, useContext } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProductScore from './product-score';
// import { ProductContext } from '../context/productContext';

// Product Component
function Product({ name, price, image, size, type, description, related_products, id }) {

    const [likeColor, setlikeColor] = useState("#222529")

    // const { products } = useContext(ProductContext)
    // console.log(products,"test")

    // Access the navigation object using useNavigation hook
    const navigation = useNavigation();

    // Render the Product component
    return (

        <View style={[style.flex, style.productCard]} >
            {/* product image  */}
            <View style={style.productImageContainer}>
                <Pressable onPress={displayProductDetails}>
                    <Image style={style.productImage} source={{ uri: image }} />
                </Pressable>
            </View>

            {/* product buttons  */}
            <View style={[style.flex, { flexDirection: "row", marginVertical: 10, alignItems: "center" }]}>

                {/* buy 0*/}
                <Pressable>
                    <MaterialCommunityIcons name="purse-outline" size={25} color="#222529" />
                </Pressable>

                <View style={[style.flex, { flexDirection: "row", alignItems: "center" }]}>
                    {/* like  */}
                    <Pressable style={{ marginHorizontal: 5 }} onPress={() => {
                        likeColor === "#222529" ? setlikeColor("red") : setlikeColor("#222529")
                    }}>
                        <AntDesign name="hearto" size={25} color={likeColor} />
                    </Pressable>

                    {/* edit  */}
                    <Pressable style={{ marginHorizontal: 5 }} onPress={displayProductDetails}>
                        <MaterialCommunityIcons name="briefcase-edit-outline" size={25} color="#222529" />
                    </Pressable>
                </View>


            </View>

            {/* Product Name  */}
            <Text style={[style.flex, style.productName, { flexDirection: "row" }]}>
                {name}
            </Text>

            {/* product price and rate */}
            <View style={[style.flex, { flexDirection: "row", marginVertical: 10, alignItems: "center" }]}>
                {/* price */}
                <Text style={style.prodcutPrice}>{price}</Text>

                <ProductScore />

            </View>

        </View>
    )

    // Function to navigate to ProductDetailsScreen and pass props
    function displayProductDetails() {
        navigation.navigate('ProductDetailsScreen', { name, price, image, size, type, description, related_products, id });
    }


}

// Styles for the component
const style = StyleSheet.create({
    flex: {
        display: "flex",
        justifyContent: "space-between",
    },
    productCard: {
        width: 160,
        height: 350,
        marginVertical: 16,
    },
    productImageContainer: {
        height: 250,
        overflow: "hidden"
    },
    productImage: {
        width: "100%",
        height: "100%"
    },
    productName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    prodcutPrice: {
        color: "#b5bcc2",
        fontSize: 16,
        fontWeight: "bold"
    }

})

export default Product
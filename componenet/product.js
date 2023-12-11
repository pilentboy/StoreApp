import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Product Component
function Product(props) {

    // Destructure props
    const { name, price, imgsrc, size, type, description, related_products } = props;

    const [likeColor, setlikeColor] = useState("#222529")

    // Access the navigation object using useNavigation hook
    const navigation = useNavigation();

    // Render the Product component
    return (

        <View style={[style.flex, style.productCard]} >

            {/* product image  */}
            <View style={style.productImageContainer}>
                <Pressable onPress={displayProductDetail}>
                    <Image style={style.productImage} source={{ uri: imgsrc }} />
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
                    <Pressable style={{ marginHorizontal: 5 }}>
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

                {/* score */}
                <View style={[style.flex, { flexDirection: "row" }]}>
                    <FontAwesome name="star" size={16} color="#b9ac7d" />
                    <FontAwesome name="star" size={16} color="#b9ac7d" />
                    <FontAwesome name="star" size={16} color="#b9ac7d" />
                    <FontAwesome name="star" size={16} color="#878e95" />
                    <FontAwesome name="star" size={16} color="#878e95" />
                </View>
            </View>

        </View>
    )

    // Function to navigate to ProductDetailsScreen and pass props
    function displayProductDetail() {

        navigation.navigate('ProductDetailsScreen', { name, price, imgsrc, size, type, description, related_products });
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
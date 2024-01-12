import { View, Text, StyleSheet, Pressable, Image, Modal, Button } from 'react-native'
import { useState, useContext } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProductScore from './productScore';
import EditProduct from '../modals/editProduct';


// Product Component
function Product(props) {

    const [likeColor, setlikeColor] = useState("#222529")

    const [modalDisplay, setModalDisplay] = useState(false)

    // Access the navigation object using useNavigation hook
    const navigation = useNavigation();

    // Render the Product component
    return (
        <View style={style.productCard} >

            {/* edit product modal */}
            <EditProduct display={modalDisplay} setModalDisplay={setModalDisplay} productInfo={props} />


            {/* product image  */}
            <View style={style.productImageWrapper}>
                <Pressable onPress={displayProductDetails}>
                    <Image style={style.productImage} source={{ uri: props.image }} />
                </Pressable>
            </View>

            {/* product buttons  */}
            <View style={style.wrapper}>

                {/* buy */}
                <Pressable onPress={displayProductDetails}>
                    <MaterialCommunityIcons name="purse-outline" size={25} color="#222529" />
                </Pressable>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {/* like  */}
                    <Pressable style={{ marginHorizontal: 5 }} onPress={() => {
                        likeColor === "#222529" ? setlikeColor("red") : setlikeColor("#222529")
                    }}>
                        <AntDesign name="hearto" size={25} color={likeColor} />
                    </Pressable>

                    {/* edit  */}
                    <Pressable style={{ marginHorizontal: 5 }} onPress={() => {
                        setModalDisplay(true)
                    }}>
                        <MaterialCommunityIcons name="briefcase-edit-outline" size={25} color="#222529" />
                    </Pressable>
                </View>


            </View>

            {/* Product Name  */}
            <Text style={[style.flex, style.productName, { flexDirection: "row" }]}>
                {props.name}
            </Text>

            {/* product price and rate */}
            <View style={style.wrapper}>
                {/* price */}
                <Text style={style.prodcutPrice}>${props.price}</Text>

                <ProductScore />

            </View>

        </View>


    )

    // Function to navigate to ProductDetailsScreen and pass props
    function displayProductDetails() {
        navigation.navigate('ProductDetailsScreen', {
            props
        });
    }




}

// Styles for the component
const style = StyleSheet.create({
    wrapper: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 10,
        alignItems: "center"
    },
    productCard: {
        width: 160,
        height: 350,
        marginVertical: 16,
    },
    productImageWrapper: {
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
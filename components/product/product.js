import { View, Text, StyleSheet, Pressable, TouchableOpacity, Image, Modal, Button } from 'react-native'
import { useState, useContext, useEffect } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProductScore from './productScore';
import EditProduct from '../modals/editProduct';
import { ProductContext } from '../../context/productContext';
import { FontAwesome } from '@expo/vector-icons';

// Product Component
function Product(props) {

    const { products, updateProducts, loading } = useContext(ProductContext)

    const [likeColor, setlikeColor] = useState()

    const [editProductDisplay, setEditProductDisplay] = useState(false)

    // Access the navigation object using useNavigation hook
    const navigation = useNavigation();

    const updateProduct = () => {

        const myProducts = products
        const productIndex = myProducts.findIndex((product) => product.id === props.id)
        const updatedProduct = { ...myProducts[productIndex], favourite: !props.favourite }
        const newProducts = [...products]
        newProducts[productIndex] = updatedProduct
        updateProducts(newProducts)

        console.log(productIndex)
    }

    useEffect(() => {
        // displayProductDetails()
        if(props.favourite){
            setlikeColor("#B31312")
        }else{
            setlikeColor("#222529")
        }
    }, [products])

    // Render the Product component
    return (
        <View style={style.productCard} >

            {/* edit product modal */}
            <EditProduct display={editProductDisplay} setModalDisplay={setEditProductDisplay} productInfo={props} />


            {/* product image  */}
            <View style={style.productImageWrapper}>
                <Pressable onPress={displayProductDetails}>
                    <Image style={style.productImage} source={{ uri: props.image }} />
                </Pressable>
            </View>

            {/* product buttons  */}
            <View style={style.wrapper}>

                {/* buy */}
                <TouchableOpacity onPress={displayProductDetails}>
                    <MaterialCommunityIcons name="purse-outline" size={25} color="#222529" />
                </TouchableOpacity>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {/* like  */}
                    <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={updateProduct}>
                     
                        <FontAwesome name="heart" size={25} color={likeColor} />
                    </TouchableOpacity>

                    {/* edit  */}
                    <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => {
                        setEditProductDisplay(true)
                    }}>
                        <MaterialCommunityIcons name="briefcase-edit-outline" size={25} color="#222529" />
                    </TouchableOpacity>
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
        navigation.navigate('Product Details', {
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
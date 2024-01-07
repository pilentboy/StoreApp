import { Text, View, Modal, Pressable, StyleSheet, Button, TextInput } from "react-native"
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import Input from "../product/input";

const EditProduct = ({ display, setModalDisplay, productInfo }) => {


    const [productName, setNameP] = useState(productInfo["name"])
    const [productPrice, setPriceP] = useState(productInfo["price"])

    const { products, updateProducts } = useContext(ProductContext)


    // edit price and name of product 
    const editProduct = () => {
        const myproducts = products

        const currentProductIndex = myproducts.findIndex((i) => i["id"] === productInfo["id"])

        const updateCurrentProduct = { ...myproducts[currentProductIndex], name: productName, price: productPrice }

        const newProducts = [...products]
        newProducts[currentProductIndex] = updateCurrentProduct
        updateProducts(newProducts)

        console.log("edit product")
    }

    return (

        <Modal visible={display}>

            <View style={style.container}>
                <Input value={productName} title="Name" />
                <Input value={productName} title="Price" />
            </View>

        </Modal >

    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20
    }
})

export default EditProduct;
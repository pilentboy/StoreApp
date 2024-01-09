import { Text, Image, View, Modal, Pressable, StyleSheet, Button, TextInput, StatusBar } from "react-native"
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import Input from "../product/input";
import { AntDesign } from '@expo/vector-icons';


const EditProduct = ({ display, setModalDisplay, productInfo }) => {


    const [productName, setProductName] = useState(productInfo["name"])
    const [productPrice, setProductPrice] = useState(productInfo["price"])
    const [productImage, setProductImage] = useState(productInfo["image"])

    const { products, updateProducts } = useContext(ProductContext)


    // edit price and name of product 
    const editProduct = () => {
        const myproducts = products

        const currentProductIndex = myproducts.findIndex((i) => i["id"] === productInfo["id"])

        const updateCurrentProduct = { ...myproducts[currentProductIndex], name: productName, price: productPrice, image: "https://img.freepik.com/free-photo/sexy-woman-leather-jacket-smile-biting-finger_176420-17779.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=ais" }

        const newProducts = [...products]
        newProducts[currentProductIndex] = updateCurrentProduct
        updateProducts(newProducts)

        console.log("edit product")
        setModalDisplay(false)
    }

    return (

        <Modal visible={display} transparent={true} >
            <View style={style.container}>


                <Text style={{ fontWeight: 'bold', fontSize: 40, marginBottom: 40 }} > Editing </Text>


                <Image source={{ uri: productImage }} style={style.productImage} />

                <Input inputValue={productName} title="Name" setNewValue={setProductName} />
                <Input inputValue={productPrice} title="Price" setNewValue={setProductPrice} />

                <View style={style.buttonsContainer}>


                    <Pressable onPress={() => setModalDisplay(false)} style={style.btn}>
                        <AntDesign name="closecircle" size={35} color="red" />
                    </Pressable>

                    <Pressable onPress={editProduct} style={style.btn}>
                        <AntDesign name="checksquare" size={35} color="blue" />
                    </Pressable>




                </View>
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
        paddingHorizontal: 20,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#b5bcc2",
        width: "100%",
        paddingTop: 10,
    },
    btn: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10
    },
    btnTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white"
    },
    productImage: {
        width: "100%",
        height: "50%"
    }
})

export default EditProduct;
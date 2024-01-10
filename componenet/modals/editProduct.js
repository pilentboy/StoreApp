import { Text, Image, View, Modal, Pressable, StyleSheet, ScrollView, Alert } from "react-native"
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import Input from "../product/input";
import { AntDesign } from '@expo/vector-icons';
import ImagePicker from "../product/imagePicker";


const EditProduct = ({ display, setModalDisplay, productInfo }) => {


    const [productName, setProductName] = useState(productInfo["name"])
    const [productPrice, setProductPrice] = useState(productInfo["price"])
    const [productImage, setProductImage] = useState(productInfo["image"])

    const { products, updateProducts } = useContext(ProductContext)


    // edit price and name of product 
    const editProduct = () => {

        if (checkValues([productName, productImage, productPrice]) && containsOnlyNumbers(productPrice)) {
            console.log("updating")
            const myproducts = products

            const currentProductIndex = myproducts.findIndex((i) => i["id"] === productInfo["id"])

            const updateCurrentProduct = { ...myproducts[currentProductIndex], name: productName, price: productPrice === '0' ? 'free!' : productPrice, image: productImage }

            const newProducts = [...products]
            newProducts[currentProductIndex] = updateCurrentProduct
            updateProducts(newProducts)

            setModalDisplay(false)
        }

    }

    const checkValues = (info) => {
        for (let i = 0; i < info.length; i++) {
            if (info[i].length < 1) {

                Alert.alert('Editing Error', 'Please fill all the inputs!', [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },

                ]);

                return false
            }
        }
        return true
    }
    
    function containsOnlyNumbers(str) {
        if (/^[0-9]+$/.test(str)) {
            return true;
        } else {
            Alert.alert('Product Price Error', 'Product Price must be a number!', [
                { text: "ok", onPress: () => console.log("Ok Pressed") }
            ])
            return false
        }
    }

    useEffect(() => {
        console.log(productImage, "product")
    }, [productImage])

    return (

        <Modal visible={display}  >

            <ScrollView contentContainerStyle={{ flex: 1 }}>

                <View style={style.container}>

                    <Text style={{ fontWeight: 'bold', fontSize: 40, marginBottom: 30 }} > Editing </Text>


                    <Image source={{ uri: productImage }} style={style.productImage} />



                    <ImagePicker setProductImage={setProductImage} />

                    <Input inputValue={productName} title="Name" setNewValue={setProductName} />
                    <Input inputValue={productPrice} title="Price" setNewValue={setProductPrice} />

                    <View style={style.buttonsContainer}>

                        {/* cancle editing */}
                        <Pressable onPress={() => setModalDisplay(false)} style={style.btn}>
                            <AntDesign name="closecircle" size={35} color="red" />
                        </Pressable>

                        {/* apply new info */}
                        <Pressable onPress={editProduct} style={style.btn}>
                            <AntDesign name="checksquare" size={35} color="green" />
                        </Pressable>




                    </View>
                </View>

            </ScrollView>

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
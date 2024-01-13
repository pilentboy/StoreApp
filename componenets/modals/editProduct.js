import { Text, Image, View, Modal, Pressable, StyleSheet, ScrollView, Alert } from "react-native"
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import Input from "../product/input";
import { AntDesign } from '@expo/vector-icons';
import ImagePicker from "../product/imagePicker";
import { MaterialIcons } from '@expo/vector-icons';
import CloseBTN from "../product/closeBTN";

const EditProduct = ({ display, setModalDisplay, productInfo }) => {


    const [productName, setProductName] = useState(productInfo["name"])
    const [productPrice, setProductPrice] = useState(productInfo["price"])
    const [productImage, setProductImage] = useState(productInfo["image"])

    const { products, updateProducts } = useContext(ProductContext)


    // edit price and name of product 
    const editProduct = () => {

        if (checkValues([productName, productImage, productPrice]) && containsOnlyNumbers(productPrice)) {
            console.log("updating")

            Alert.alert('Warning', 'Apply changes?', [
                { text: "No", onPress: () => console.log("No Pressed") },
                {
                    text: "Yes", onPress: () => {
                        const myproducts = products

                        const currentProductIndex = myproducts.findIndex((i) => i["id"] === productInfo["id"])

                        const updateCurrentProduct = { ...myproducts[currentProductIndex], name: productName, price: productPrice === '0' ? 'free!' : productPrice, image: productImage }

                        const newProducts = [...products]
                        newProducts[currentProductIndex] = updateCurrentProduct
                        updateProducts(newProducts)

                        setModalDisplay(false)

                        // Alert.alert('Notification', 'Updated Scuccessfully!', [
                        //     { text: "ok", onPress: () => console.log("Ok Pressed") }
                        // ],
                        //     {
                        //         cancelable: true
                        //     })
                    }
                },
            ],
                { cancelable: true }
            )

        }

    }

    const checkValues = (info) => {
        for (let i = 0; i < info.length; i++) {
            if (info[i].length < 1) {

                Alert.alert('Editing Error', 'Please fill all the inputs!', [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },

                ],
                    {
                        cancelable: true
                    });

                return false
            }
        }
        return true
    }


    function containsOnlyNumbers(str) {

        if (/^[0-9.]+$/.test(str)) {
            return true;
        } else {

            Alert.alert('Product Price Error', 'Product Price must be a number!', [
                { text: "ok", onPress: () => console.log("Ok Pressed") }
            ])
            return false
        }
    }


    const deleteProduct = () => {
        Alert.alert('Warning', 'Are you sure you want to delete this product?', [
            { text: "No", onPress: () => console.log("No Pressed") },
            {
                text: "Yes", onPress: () => {
                    const myproducts = products.filter((product) => product.id !== productInfo.id)
                    updateProducts(myproducts)
                    Alert.alert('Notification', 'Deleted Scuccessfully!', [
                        { text: "ok", onPress: () => console.log("Ok Pressed") }
                    ],
                        { cancelable: true }
                    )
                }
            },
        ],
            { cancelable: true }
        )


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

                    <Input inputValue={productName} inputType='text' title="Name" setNewValue={setProductName} />
                    <Input inputValue={productPrice} inputType='numeric' title="Price" setNewValue={setProductPrice} />

                    <View style={style.buttonsContainer}>

                        {/* delete item */}
                        <Pressable onPress={() => deleteProduct()} style={style.btn}>
                            <MaterialIcons name="delete-forever" size={35} color="red" />
                        </Pressable>

                        {/* cancle editing */}
                        <CloseBTN action={() => setModalDisplay(false)} />

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
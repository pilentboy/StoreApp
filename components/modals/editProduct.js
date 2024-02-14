import { Text, Image, View, Modal, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native"
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import Input from "../product/input";
import { AntDesign } from '@expo/vector-icons';
import ImagePicker from "../product/imagePicker";
import { MaterialIcons } from '@expo/vector-icons';
import CloseBTN from "../product/closeBTN";
import ButtonContainer from "../productDetails/buttonContainer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EditProduct = ({ display, setModalDisplay, productInfo }) => {

    const defaultImage = "https://gnetradio.com/wp-content/uploads/2019/10/no-image.jpg"

    useEffect(() => {
        // Update state when productInfo changes
        setProductName(productInfo.name);
        setProductPrice(productInfo.price);
        setProductImage(productInfo.image);
    }, [productInfo]);


    const [productName, setProductName] = useState(productInfo["name"])
    const [productPrice, setProductPrice] = useState(productInfo["price"])
    const [productImage, setProductImage] = useState(productInfo["image"])

    const { products, updateProducts } = useContext(ProductContext)


    const navigation = useNavigation()
    // edit price and name of product 
    const editProduct = () => {

        if (checkValues([productName, productImage, productPrice]) && containsOnlyNumbers(productPrice)) {
            console.log("updating")

            Alert.alert('Editing Product', 'Apply changes?', [
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
                        navigation.navigate("Home")

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

        Alert.alert('Deleting Product', 'Are you sure you want to delete this product?', [
            { text: "No", onPress: () => console.log("No Pressed"), },
            {
                text: "Yes", onPress: () => {
                    const myproducts = products.filter((product) => product.id !== productInfo.id)
                    updateProducts(myproducts)
                    setModalDisplay(false)
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

    return (

        <Modal visible={display}  >

            <ScrollView contentContainerStyle={{ flex: 1 }}>

                <View style={style.container}>

                    <Text style={{ fontWeight: 'bold', fontSize: 40, marginBottom: 10 }} > Editing </Text>

                    <Image source={{ uri: productImage }} style={style.productImage} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 120 }}>

                        <TouchableOpacity style={{}} onPress={() => setProductImage(defaultImage)}>
                            <MaterialCommunityIcons name="file-image-remove" size={50} color="#45474B" />
                        </TouchableOpacity>

                        <ImagePicker setProductImage={setProductImage} />


                    </View>

                    <Input inputValue={productName} inputType='text' title="Name" inputWidth={"60%"} setNewValue={setProductName} textColor={"black"} borderColor={"black"} />
                    <Input inputValue={productPrice} inputType='numeric' title="Price" inputWidth={"60%"} setNewValue={setProductPrice} textColor={"black"} borderColor={"black"} />

                    <ButtonContainer>
                        {/* delete item */}
                        <TouchableOpacity onPress={() => deleteProduct()} style={style.btn}>
                            <MaterialIcons name="delete-forever" size={35} color="red" />
                        </TouchableOpacity>

                        {/* cancle editing */}
                        <CloseBTN action={() => setModalDisplay(false)} color={"black"} />

                        {/* apply new info */}
                        <TouchableOpacity onPress={editProduct} style={style.btn}>
                            <AntDesign name="checksquare" size={35} color="green" />
                        </TouchableOpacity>
                    </ButtonContainer>

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
        height: "50%",
        resizeMode: 'contain'
    }
})

export default EditProduct;
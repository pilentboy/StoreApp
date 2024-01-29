import { Modal, Alert, StyleSheet, Text, View, Pressable, ScrollView, Image, TextInput } from "react-native"

import ButtonContainer from "../productDetails/buttonContainer"
import CloseBTN from "../product/closeBTN"
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Input from "../product/input";
import { useState, useContext } from "react";
import { ProductContext } from "../../context/productContext";
import LargeInput from "../product/largInput";
import ImagePicker from "../product/imagePicker";

function AddNewProduct({ addNewProductDisplay, setAddNewProductDisplay }) {
    const DefaultImage="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png"
    const { products, updateProducts } = useContext(ProductContext)

    function AddProduct() {

        Alert.alert("Warning", "Are you sure about adding this product?", [
            {
                text: "No", onPress: (() => console.log("No"))
            },
            {
                text: "Yes", onPress: (() => {
                    const myProducts = products

                    // get the last product id for using a uniqe id for each products
                    const lastProductID = myProducts.slice(-1)[0].id

                    const spliteProductFeatures = productFeatures.split(".")

                    const newProduct = { id: lastProductID + 1, name: productName, price: productPrice, description: productDescription, you_will_love: spliteProductFeatures, related_products: [0, 2], image: productImage, size: "M", type: "Shirt", reviews: 24 }

                    const updatedProducts = [...products]

                    updatedProducts.push(newProduct)

                    updateProducts(updatedProducts)

                    setAddNewProductDisplay(false)
                    setProductName("")
                    setProductPrice("")
                    setProductDescription("")
                    setProductFeatures("")
                    setProductImage(DefaultImage)
                    setProductAbout("")
                })
            }
        ])

    }

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productAbout, setProductAbout] = useState('')
    const [productFeatures, setProductFeatures] = useState('')
    const [productImage, setProductImage] = useState(DefaultImage)

    return (


        <Modal visible={addNewProductDisplay} transparent={false} >

            <ScrollView>


                <View style={style.container}>

                    <Text style={{ fontWeight: 'bold', fontSize: 40, paddingVertical: 20 }} > Adding Product </Text>


                    <Input inputValue={productName} inputType='text' title="Name" setNewValue={setProductName} />
                    <Input inputValue={productPrice} inputType='numeric' title="Price" setNewValue={setProductPrice} />

                    {/* <Input inputValue={productFeatures} inputType='numeric' title="Features" setNewValue={setProductFeatures} /> */}

                    <LargeInput inputValue={productFeatures} inputType='text' title="Features..." maxChar={150} setNewValue={setProductFeatures} />

                    <LargeInput inputValue={productDescription} inputType='text' title="Description..." maxChar={130} setNewValue={setProductDescription} />

                    <LargeInput inputValue={productAbout} inputType='text' title="About..." maxChar={300} setNewValue={setProductAbout} />

                    <Image source={{ uri: productImage }} style={style.productImage} />

                    <ImagePicker setProductImage={setProductImage} title={'Upload an image'} />


                    <ButtonContainer>
                        {/* cancle  */}
                        <CloseBTN action={() => setAddNewProductDisplay(false)} />

                        {/* apply new info */}
                        <Pressable onPress={AddProduct} style={style.btn}>
                            <AntDesign name="checksquare" size={35} color="green" />
                        </Pressable>
                    </ButtonContainer>


                </View>

            </ScrollView>

        </Modal>
    )

}

const style = StyleSheet.create({
    btn: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
    },
    productImage: {
        width: 250,
        height: 200
    }
})

export default AddNewProduct
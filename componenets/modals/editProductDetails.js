import { Text, Image, View, Modal, Pressable, StyleSheet, ScrollView, Alert } from "react-native"
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import Input from "../product/input";
import { AntDesign } from '@expo/vector-icons';
import ImagePicker from "../product/imagePicker";
import CloseBTN from "../product/closeBTN";
import LargeInput from "../product/largInput";
import ButtonContainer from "../productDetails/buttonContainer";
import { useNavigation } from '@react-navigation/native';

function EditProductDetails({ productInfo, EditProductDetailsDisplay, setEditProductDetailsDisplay }) {

    const navigation = useNavigation();

    useEffect(()=>{
        setProductName(productInfo.name)
        setProductPrice(productInfo.price)
        setProductDescription(productInfo.description)
        setProductAbout(productInfo.about)
        setProductImage(productInfo.image)
    },[productInfo])

    const [productName, setProductName] = useState(productInfo.name)
    const [productPrice, setProductPrice] = useState(productInfo.price)
    const [productDescription, setProductDescription] = useState(productInfo.description)
    const [productAbout, setProductAbout] = useState(productInfo.about)
    const [productImage, setProductImage] = useState(productInfo.image)


    const { products, updateProducts } = useContext(ProductContext)


    const editProduct = () => {

        if (checkValues([productName, productImage, productPrice]) && containsOnlyNumbers(productPrice)) {
            console.log("updating")

            Alert.alert('Warning', 'Apply changes?', [
                { text: "No", onPress: () => console.log("No Pressed") },
                {
                    text: "Yes", onPress: () => {
                        const myproducts = products

                        const currentProductIndex = myproducts.findIndex((i) => i["id"] === productInfo["id"])

                        const updateCurrentProduct = { ...myproducts[currentProductIndex], name: productName, price: productPrice === '0' ? 'free!' : productPrice, image: productImage, description: productDescription, about: productAbout, you_will_love: ["hi"] }

                        const newProducts = [...products]
                        newProducts[currentProductIndex] = updateCurrentProduct
                        updateProducts(newProducts)

                        setEditProductDetailsDisplay(false)
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

    console.log(productInfo)
    return (
        <Modal visible={EditProductDetailsDisplay} transparent={false}>
            <ScrollView>


                <View style={style.container}>

                    <Text style={{ fontWeight: 'bold', fontSize: 40, paddingVertical: 20 }} > Editing Product </Text>


                    <Input inputValue={productName} inputType='text' title="Name" setNewValue={setProductName} />
                    <Input inputValue={productPrice} inputType='numeric' title="Price" setNewValue={setProductPrice} />

                    <LargeInput inputValue={productDescription} inputType='text' title="Description..." maxChar={130} setNewValue={setProductDescription} />

                    <LargeInput inputValue={productAbout} inputType='text' title="About..." maxChar={300} setNewValue={setProductAbout} />

                    <Image source={{ uri: productImage }} style={style.productImage} />

                    <ImagePicker setProductImage={setProductImage} title={'Upload an image'} />


                    <ButtonContainer>
                        {/* cancle  */}
                        <CloseBTN action={() => setEditProductDetailsDisplay(false)} />

                        {/* apply new info */}
                        <Pressable onPress={editProduct} style={style.btn}>
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
        height: 300,
    }
})

export default EditProductDetails


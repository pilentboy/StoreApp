import {
    Modal,
    Alert,
    StyleSheet,
    Text, View,
    TouchableOpacity,
    ScrollView,
    Image
} from "react-native"

import ButtonContainer from "../productDetails/buttonContainer"
import CloseBTN from "../product/closeBTN"
import { AntDesign } from '@expo/vector-icons';
import Input from "../product/input";
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import LargeInput from "../product/largInput";
import ImagePicker from "../product/imagePicker";
import ProductSize from "../product/productSize";

function AddNewProduct({ addNewProductDisplay, setAddNewProductDisplay }) {

    const DefaultImage = "https://gnetradio.com/wp-content/uploads/2019/10/no-image.jpg"

    const { products, updateProducts } = useContext(ProductContext)


    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productAbout, setProductAbout] = useState("")
    const [productImage, setProductImage] = useState(DefaultImage)
    const [category, setCategory] = useState('')


    const [productSize, setProductSize] = useState([
        { selected: false, value: "S" },
        { selected: false, value: "M" },
        { selected: false, value: "L" },
        { selected: false, value: "XL" },
        { selected: false, value: "2XL" },

    ])

    const handleProductInfo = () => {
        if (productImage === DefaultImage) {
            console.log("error")
            Alert.alert("Adding Product", "Please upload an image for the product and try again",
                [
                    { text: "Ok", onPress: console.log("ok pressed") }
                ])
            return false
        }
        AddProduct()
    }


    function AddProduct() {


        Alert.alert("Adding Product", "Are you sure about adding this product?", [
            {
                text: "No", onPress: (() => console.log("No"))
            },
            {
                text: "Yes", onPress: (() => {




                    const myProducts = products

                    // get the last product id for using a uniqe id for each products
                    const lastProductID = myProducts.slice(-1)[0].id

                    const categories = category !== '' ? category.split(" ") : []

                    const newProduct = { id: lastProductID + 1, name: productName, price: productPrice, description: productDescription, category: categories, about: productAbout, related_products: [0, 2], image: productImage, size: productSize, type: "Shirt", reviews: 24 }

                    const updatedProducts = [...products]

                    updatedProducts.push(newProduct)

                    updateProducts(updatedProducts)

                    setAddNewProductDisplay(false)
                    setProductName("")
                    setProductPrice("")
                    setProductDescription("")
                    setProductImage(DefaultImage)
                    setProductAbout("")
                    setCategory('')
                })
            }
        ])

    }

    return (


        <Modal visible={addNewProductDisplay} transparent={false} >

            <ScrollView>


                <View style={style.container}>

                    <Text style={{ fontWeight: 'bold', fontSize: 40, paddingVertical: 20 }} > Adding Product </Text>

                    <Input inputValue={productName} inputType='text' title="Name" inputWidth={"60%"} setNewValue={setProductName} textColor={"black"} borderColor={"black"} />
                    <Input inputValue={productPrice} inputType='numeric' title="Price" inputWidth={"60%"} setNewValue={setProductPrice} textColor={"black"} borderColor={"black"} />

                    <ProductSize productSize={productSize} setProductSize={setProductSize} />

                    <Input inputValue={category} inputType='text' title="Category..." inputWidth={"100%"} setNewValue={setCategory} textColor={"black"} borderColor={"black"} />

                    <LargeInput inputHeight={100} inputValue={productDescription} inputType='text' title="Description..." maxChar={130} setNewValue={setProductDescription} />

                    <LargeInput inputHeight={200} inputValue={productAbout} inputType='text' title="About..." maxChar={300} setNewValue={setProductAbout} />

                    <Image source={{ uri: productImage }} style={style.productImage} />

                    <ImagePicker setProductImage={setProductImage} />


                    <ButtonContainer>
                        {/* cancle  */}
                        <CloseBTN action={() => setAddNewProductDisplay(false)} color={"black"} />

                        {/* apply new info */}
                        <TouchableOpacity onPress={handleProductInfo} style={style.btn}>
                            <AntDesign name="checksquare" size={35} color="green" />
                        </TouchableOpacity>
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
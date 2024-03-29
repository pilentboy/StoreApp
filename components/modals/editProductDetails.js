import { Text, Image, View, Modal, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native"
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import Input from "../product/input";
import { AntDesign } from '@expo/vector-icons';
import ImagePicker from "../product/imagePicker";
import CloseBTN from "../product/closeBTN";
import LargeInput from "../product/largInput";
import ButtonContainer from "../productDetails/buttonContainer";
import { useNavigation } from '@react-navigation/native';
import EditCategory from "../productDetails/editCategory";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductSize from "../product/productSize";

function EditProductDetails({ productInfo, EditProductDetailsDisplay, setEditProductDetailsDisplay }) {

    const defaultImage = "https://gnetradio.com/wp-content/uploads/2019/10/no-image.jpg"

    const navigation = useNavigation();

    useEffect(() => {
        setProductName(productInfo.name)
        setProductPrice(productInfo.price)
        setProductDescription(productInfo.description)
        setProductAbout(productInfo.about)
        setProductImage(productInfo.image)
        setNewCategory('')
        setProductCategories(productInfo.category)
    }, [productInfo])

    const [productName, setProductName] = useState(productInfo.name)
    const [productPrice, setProductPrice] = useState(productInfo.price)
    const [productDescription, setProductDescription] = useState(productInfo.description)
    const [productAbout, setProductAbout] = useState(productInfo.about)
    const [productImage, setProductImage] = useState(productInfo.image)
    const [newCategory, setNewCategory] = useState('')
    const [productCategoies, setProductCategories] = useState(productInfo.category)
    const [productSize, setProductSize] = useState(productInfo.size)
    const { products, updateProducts } = useContext(ProductContext)

    const removeCategory = (categoryValue) => {
        const newCategories = productCategoies.filter((category) => category !== categoryValue)
        setProductCategories(newCategories)
    }

    const editProduct = () => {

        if (checkValues([productName, productImage, productPrice]) && containsOnlyNumbers(productPrice)) {
            console.log("updating")

            Alert.alert('Editing Product', 'Apply changes?', [
                { text: "No", onPress: () => console.log("No Pressed") },
                {
                    text: "Yes", onPress: () => {
                        const myproducts = products

                        const currentProductIndex = myproducts.findIndex((i) => i["id"] === productInfo["id"])

                        const categories = newCategory !== '' ? newCategory.split(" ") : []
                        const updatedCategories = categories.concat(productCategoies)

                        const updateCurrentProduct = { ...myproducts[currentProductIndex], name: productName, price: productPrice === '0' ? 'free!' : productPrice, image: productImage, description: productDescription, category: updatedCategories, size: productSize, about: productAbout, you_will_love: ["hi"] }

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

    const deleteProduct = () => {

        Alert.alert('Deleting Product', 'Are you sure you want to delete this product?', [
            { text: "No", onPress: () => console.log("No Pressed") },
            {
                text: "Yes", onPress: () => {
                    const myproducts = products.filter((product) => product.id !== productInfo.id)
                    updateProducts(myproducts)
                    setEditProductDetailsDisplay(false)
                    navigation.navigate("Home")
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
        <Modal visible={EditProductDetailsDisplay} transparent={false} >

            <ScrollView>


                <View style={style.container}>

                    <Text style={{ fontWeight: 'bold', fontSize: 40, paddingVertical: 20 }} > Editing Product </Text>


                    <Input inputValue={productName} inputWidth={"60%"} inputType='text' title="Name" setNewValue={setProductName} textColor={"black"} borderColor={"black"} />
                    <Input inputValue={productPrice} inputWidth={"60%"} inputType='numeric' title="Price" setNewValue={setProductPrice} textColor={"black"} borderColor={"black"} />

                    <ProductSize productSize={productSize} setProductSize={setProductSize} />


                    <EditCategory category={productCategoies} action={removeCategory} />

                    <Input inputValue={newCategory} inputType='text' title={"Category..."} inputWidth={"100%"} setNewValue={setNewCategory} textColor={"black"} borderColor={"black"} />

                    <LargeInput inputHeight={100} inputValue={productDescription} inputType='text' title="Description..." maxChar={130} setNewValue={setProductDescription} />

                    <LargeInput inputHeight={200} inputValue={productAbout} inputType='text' title="About..." maxChar={300} setNewValue={setProductAbout} />

                    <Image source={{ uri: productImage }} style={style.productImage} />


                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>


                        <TouchableOpacity style={style.btn} onPress={() => setProductImage(defaultImage)}>
                            <MaterialCommunityIcons name="file-image-remove" size={50} color="#45474B" />

                        </TouchableOpacity>

                        <ImagePicker setProductImage={setProductImage} />

                    </View>

                    <ButtonContainer>

                        {/* delete item */}
                        <TouchableOpacity onPress={() => deleteProduct()} style={style.btn}>
                            <MaterialIcons name="delete-forever" size={35} color="red"
                            />
                        </TouchableOpacity>
                        {/* cancle editing */}

                        <CloseBTN action={() => setEditProductDetailsDisplay(false)} color={"black"} />

                        {/* apply new info */}
                        <TouchableOpacity onPress={editProduct} style={style.btn}>
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
        height: 300,
        borderRadius: 5
    }
})

export default EditProductDetails


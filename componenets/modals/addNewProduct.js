import { Modal, StyleSheet, Text, View, Pressable, ScrollView, TextInput } from "react-native"

import ButtonContainer from "../productDetails/buttonContainer"
import CloseBTN from "../product/closeBTN"
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Input from "../product/input";
import { useState, useContext } from "react";
import { ProductContext } from "../../context/productContext";

function AddNewProduct({ addNewProductDisplay, setAddNewProductDisplay }) {

    const { products, updateProducts } = useContext(ProductContext)

    function AddProduct() {

        const myProducts = products
        
        // get the last product id for using a uniqe id for each products
        const lastProductID = myProducts.slice(-1)[0].id

        const newProduct = { id: lastProductID + 1, name: productName, price: productPrice }

        const updatedProducts = [...products]

        updatedProducts.push(newProduct)

        updateProducts(updatedProducts)

        setAddNewProductDisplay(false)
    }

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')

    return (


        <Modal visible={addNewProductDisplay} transparent={false} >

            <ScrollView contentContainerStyle={{ flex: 1 }}>


                <View style={style.container}>

                    <Input inputValue={productName} inputType='text' title="Name" setNewValue={setProductName} />
                    <Input inputValue={productPrice} inputType='numeric' title="Price" setNewValue={setProductPrice} />


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
})

export default AddNewProduct
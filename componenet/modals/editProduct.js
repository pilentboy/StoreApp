import { Text, View, Modal, Pressable, StyleSheet, Button, TextInput } from "react-native"
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";


const EditProduct = ({ display, setModalDisplay, productInfo }) => {

    const [nameP, setNameP] = useState(productInfo["name"])

    const [priceP, setPriceP] = useState(productInfo["price"])

    const { products, updateProducts } = useContext(ProductContext)


    const editProduct = () => {
        const myproducts = products

        const currentProductIndex = myproducts.findIndex((i) => i["id"] === productInfo["id"])

        const updateCurrentProduct = { ...products[currentProductIndex], name: nameP, price: priceP }

        const newProducts = [...products]
        newProducts[currentProductIndex] = updateCurrentProduct
        updateProducts(newProducts)
        console.log("updateding")
    }

    return (

        <Modal visible={display}>

            <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20, backgroundColor: "black" }}>

                <View style={{ alignItems: "center", margin: 10 }}>

                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Name:</Text>

                        <TextInput
                            value={nameP}
                            onChangeText={setNameP}

                            style={{ borderWidth: 2, borderColor: "gray", borderRadius: 5, marginLeft: 5, paddingHorizontal: 10, paddingVertical: 5, fontSize: 16, color: "red", marginRight: 10 }} />

                    </View>

                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Price:</Text>

                        <TextInput
                            value={priceP}
                            onChangeText={setPriceP}

                            style={{ borderWidth: 2, borderColor: "gray", borderRadius: 5, marginLeft: 5, paddingHorizontal: 10, paddingVertical: 5, fontSize: 16, color: "red", marginRight: 10 }} />


                    </View>

                    <Button title="edit" onPress={() => editProduct()} />


                </View>

                <Button title="close" onPress={() => setModalDisplay(false)} />
            </View>

        </Modal>

    );
}

const style = StyleSheet({
    text: {
        color: "red"
    }
})

export default EditProduct;
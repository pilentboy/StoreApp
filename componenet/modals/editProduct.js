import { Text, View, Modal, Pressable, StyleSheet, Button, TextInput } from "react-native"
import { useState } from "react";


const EditProduct = ({ display, setModalDisplay, productInfo }) => {

    const [nameP, setNameP] = useState(productInfo)
    return (

        <Modal visible={display}>

            <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20, backgroundColor: "black" }}>

                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Name:</Text>

                    <TextInput
                        value={nameP}

                        style={{ borderWidth: 2, borderColor: "gray", borderRadius: 5, marginLeft: 5, paddingHorizontal: 10, paddingVertical: 5, fontSize: 16, color: "red" }} />

                    {/* <Button title="clear" onPress={() => } /> */}


                </View>

                <Button title="change" onPress={() => setModalDisplay(false)} />
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
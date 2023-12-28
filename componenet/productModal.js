import { Modal, View, Text, Pressable, StyleSheet, Button } from "react-native"
import ProductModalContext from "../context/productModalContext"
import { useState, useEffect } from "react"

function ProductModal({ display }) {

    const [modalDisplay, setModalDisplay] = useState(false)

    useEffect(() => {
        setModalDisplay(display)
    }, [])
    return (


        <Modal
            visible={modalDisplay}
            animationType='fade'
            transparent={false}>

            <View style={{ flex: 1, justifyContent: "center", alienItems: "center" }}>

                <Pressable onPress={
                    () => {
                        setModalDisplay = false
                    }
                }>
                    <Text style={{ backgroundColor: "blue", fontSize: 20, color: "white" }}>
                        close
                    </Text>
                </Pressable>

            </View>


        </Modal>



    )
}


// const style = StyleSheet = {

// }

export default ProductModal

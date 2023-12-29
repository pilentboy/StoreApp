import { Text, View, Modal, Pressable, StyleSheet, Button } from "react-native"



const EditProduct = ({ display, setModalDisplay }) => {
    return (

        <Modal visible={display}>
            <Button title="close" onPress={() => {
                setModalDisplay(false)
            }} />
        </Modal>

    );
}

const style = StyleSheet({
    text: {
        color: "red"
    }
})

export default EditProduct;
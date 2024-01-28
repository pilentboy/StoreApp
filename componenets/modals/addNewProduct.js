import { Modal, StyleSheet, Text, View, Pressable} from "react-native"

import ButtonContainer from "../productDetails/buttonContainer"
import CloseBTN from "../product/closeBTN"
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function AddNewProduct({ addNewProductDisplay, setAddNewProductDisplay }) {

    return (
        <Modal visible={addNewProductDisplay} transparent={false} >



            <ButtonContainer>
                {/* cancle  */}
                <CloseBTN action={() => setAddNewProductDisplay(false)} />

                {/* apply new info */}
                <Pressable onPress={() => setAddNewProductDisplay(false)} style={style.btn}>
                    <AntDesign name="checksquare" size={35} color="green" />
                </Pressable>
            </ButtonContainer>
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
})

export default AddNewProduct
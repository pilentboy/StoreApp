import { AntDesign } from '@expo/vector-icons';
import { Pressable, StyleSheet } from "react-native"

function CloseBTN({ action }) {

    return (
        <Pressable onPress={action} style={style.btn}>
            <AntDesign name="closecircle" size={35} color="red" />
        </Pressable>
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

export default CloseBTN
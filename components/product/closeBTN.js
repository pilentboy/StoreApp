import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from "react-native"

function CloseBTN({ action, color}) {

    return (
        <TouchableOpacity onPress={action} style={style.btn}>
            <AntDesign name="closecircle" size={35} color={color} />
        </TouchableOpacity>
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
import { StyleSheet, View } from "react-native";


function ButtonContainer({ children }) {

    return (
        <View style={style.buttonsContainer}>
            {children}
        </View>
    )




}

const style = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#b5bcc2",
        width: "100%",
        paddingVertical: 15,
    },
})

export default ButtonContainer
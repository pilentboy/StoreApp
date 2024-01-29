import { StyleSheet, View } from 'react-native'


function ButtonContainer({ children }) {
    return (
        <View style={style.container}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: "#222529",
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: 5
    },
})

export default ButtonContainer
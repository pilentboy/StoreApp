import { StyleSheet, View } from 'react-native'


function ManageButtonContainer({ children }) {
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
        paddingHorizontal: 5,
        alignItems: 'center',
        borderRadius: 10
    },
})

export default ManageButtonContainer
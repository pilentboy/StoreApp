import { StyleSheet, View } from 'react-native'


function ManageButtonContainer({ children , justifyContent}) {
    return (
        <View style={[style.container,{justifyContent:justifyContent}]}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: "#45474B",
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: 5,
        alignItems: 'center',
        borderRadius: 10
    },
})

export default ManageButtonContainer
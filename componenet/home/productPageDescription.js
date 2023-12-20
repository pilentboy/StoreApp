import { StyleSheet, Text, View } from "react-native";


function ProductPageDescription() {

    return (
        <View style={{ marginTop: 15 }}>
            <Text style={style.description} >
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod.
            </Text>
        </View>
    )
}


const style = StyleSheet.create({
    description: {
        fontSize: 23,
        color: "#878e95",
        fontWeight: "400"
    },
})

export default ProductPageDescription
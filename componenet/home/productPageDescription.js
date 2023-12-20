import { StyleSheet, Text, View } from "react-native";


function ProductPageDescription({ description }) {

    return (
        <View style={{ marginTop: 15 }}>
            <Text style={style.description} >
                {description}
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
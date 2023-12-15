import { Text, StyleSheet } from 'react-native'


function ProductDescription({ description }) {

    return (
        <Text style={style.productDescription}>
            {description}
        </Text>
    )
}

const style = StyleSheet.create({
    productDescription: {
        fontSize: 20,
        color: "#878e95",
        fontWeight: "bold",
        marginTop: 12
    },
})

export default ProductDescription
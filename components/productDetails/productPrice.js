import { View, StyleSheet, Text } from 'react-native'



function ProductPrice({ price }) {


    return (
        <View>
            <Text style={style.productPrice}>${price}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    productPrice: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    },
})

export default ProductPrice
import { Text, View, StyleSheet, Pressable } from "react-native"
import { Entypo } from '@expo/vector-icons';



function AddToCart({ count }) {



    return (
        <View style={style.container}>

            {/* Count of the product */}
            <Text style={style.productCount}>{count}</Text>


            {/* Add to cart button */}
            <Pressable style={[style.addToCartBTN, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
                <Entypo name="shopping-cart" size={20} color="white" />
                <Text style={style.cartBTNText}>ADD TO CART</Text>
            </Pressable>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center",
    },
    cartBTNText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
    },
    addToCartBTN: {
        width: '80%',
        paddingVertical: 15,
        backgroundColor: '#222529',
    },
    productCount: {
        width: '20%',
        paddingVertical: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        borderWidth: 1,
        borderColor: '#878e95',
        fontSize: 20
    },
})

export default AddToCart
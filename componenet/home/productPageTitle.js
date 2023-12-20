import { Text, View, StyleSheet } from 'react-native'


function ProductPageTitle({ firstText, secondText }) {

    return (
        <View style={style.flex}>
            <Text style={style.screenTitle}>
                {firstText}
            </Text>
            <Text style={style.screenTitle}>
                {secondText}
            </Text>
        </View>
    )
}
const style = StyleSheet.create({
    flex: {
        display: "flex",
    },
    screenTitle: {
        fontSize: 50,
        fontWeight: "bold"
    },
})
export default ProductPageTitle
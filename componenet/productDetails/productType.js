import { View, StyleSheet, Text } from 'react-native'
import RequiredTitle from './requiredTitle'

function ProductType({ type }) {
    return (
        <View style={{ marginTop: 25 }}>

            <RequiredTitle title="Type" />
            <View style={{ flexDirection: 'row', marginTop: 20 }}>

                <Text style={[style.productType, { backgroundColor: '#b9ac7d' }]}>
                    {type}
                </Text>

                <Text
                    style={[style.productType, { backgroundColor: 'white', color: '#b9ac7d', borderColor: '#b9ac7d', borderWidth: 2, marginLeft: 5 }]}>
                    Empty
                </Text>

            </View>
        </View>

    )
}
const style = StyleSheet.create({
    productType: {
        paddingHorizontal: 25,
        paddingVertical: 12,
        fontWeight: 'bold',
        fontSize: 16,
    },
})
export default ProductType
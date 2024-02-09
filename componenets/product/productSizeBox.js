import { View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox'


function ProductSizeBox({ title, productSize, setProductSize }) {

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>

                <Text style={{ fontWeight: 'bold', fontSize: 15, color: "black", marginRight: 5 }}>{title}</Text>

                <CheckBox
                    value={productSize}
                    onValueChange={setProductSize}
                    color='green'
                    style={{ width: 22, height: 22 }}
                    disabled={false}
                />



            </View>
        </View>
    )
}

export default ProductSizeBox
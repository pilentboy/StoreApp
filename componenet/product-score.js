import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';



function ProductScore() {

    return (
        < View style={[style.flex, { flexDirection: "row" }]} >
            {/* score */}
            <FontAwesome name="star" size={17} color="#b9ac7d" />
            <FontAwesome name="star" size={17} color="#b9ac7d" />
            <FontAwesome name="star" size={17} color="#b9ac7d" />
            <FontAwesome name="star" size={17} color="#878e95" />
            <FontAwesome name="star" size={17} color="#878e95" />
        </View >
    )


}


// Styles for the component
const style = StyleSheet.create({
    flex: {
        display: "flex"
    }

})

export default ProductScore
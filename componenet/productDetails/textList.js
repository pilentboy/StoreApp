import { Text, StyleSheet, View } from 'react-native'

import { Entypo } from '@expo/vector-icons';


function TextList({ description }) {

    return (

        <View style={{ display: "flex", flexDirection: "row", marginLeft: 15, marginVertical: 5 }}>
            <Entypo name="dot-single" size={29} color="#878e95" />
            <Text style={style.dotText}>{description}</Text>
        </View>

    )
}
const style = StyleSheet.create({
    dotText: {
        fontSize: 20,
        color: "#878e95",
        fontWeight: "bold",
    },
})

export default TextList


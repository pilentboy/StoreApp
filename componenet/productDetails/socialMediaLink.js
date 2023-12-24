import { View, StyleSheet } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


function SocialMediaLink() {

    return (

        <View style={{ flexDirection: 'row' }}>
            <FontAwesome name="telegram" size={23} color="black" style={{ marginHorizontal: 5 }} />
            <Entypo name="youtube" size={24} color="black" />
        </View>

    )

}


const style = StyleSheet.create({

})

export default SocialMediaLink
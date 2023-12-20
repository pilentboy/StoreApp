import { View, StyleSheet, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons';


function ControlProductOptions() {

    return (
        <View style={style.container}>

            {/* add a new product button */}
            <Pressable style={style.btn} onPress={displayNewProductModel}>
                <Feather name="plus-square" size={50} color="white" />
            </Pressable>

        </View>
    )

    // display add new product modal
    function displayNewProductModel() {
        console.log(" add a new product button ")
    }
}


const style = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: "#222529",
        flexDirection: "row"
    },
    btn: {
        marginHorizontal: 4
    }
})

export default ControlProductOptions
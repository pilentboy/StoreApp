import { View, StyleSheet, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import { Ionicons } from '@expo/vector-icons';
import { ProductContext } from '../../context/productContext';
import { useContext, useState } from 'react';
import { Alert } from 'react-native'
import StoreChart from '../modals/sotreChart';

function ManageProducts() {

    const [storeChartDisplay, setStoreChartDisplay] = useState(false)


    const { fetchData } = useContext(ProductContext)
    return (

        <View style={style.container}>

            <StoreChart display={storeChartDisplay} />

            {/* add a new product  */}
            <Pressable style={style.btn} onPress={displayNewProductModel}>
                <Feather name="plus-square" size={50} color="white" />
            </Pressable>

            {/* reload products */}
            <Pressable style={style.btn} onPress={() => {
                fetchData()
                Alert.alert("Reloading", "Products Reloaded Successfully", [
                    { text: "Ok", onPress: () => console.log("Ok pressed!") }
                ]
                )
            }}>
                <Ionicons name="reload-circle-outline" size={50} color='white' />
            </Pressable>

            {/* display sotre chart */}
            <Pressable style={style.btn} onPress={() => setStoreChartDisplay(true)}>
                <Feather name="pie-chart" size={50} color="white" />
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

export default ManageProducts
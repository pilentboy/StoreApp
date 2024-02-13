import { StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import { Ionicons } from '@expo/vector-icons';
import { ProductContext } from '../../context/productContext';
import { useContext, useState } from 'react';
import StoreChart from '../modals/sotreChart';
import AddNewProduct from '../modals/addNewProduct';
import ManageButtonContainer from './manageButtonContainer';
import { Fontisto } from '@expo/vector-icons';


function ManageProducts() {

    const [storeChartDisplay, setStoreChartDisplay] = useState(false)
    const [addNewProductDisplay, setAddNewProductDisplay] = useState(false)

    const { fetchData } = useContext(ProductContext)
    return (
        <ManageButtonContainer >
            <StoreChart display={storeChartDisplay} setStoreChartDisplay={setStoreChartDisplay} />

            <AddNewProduct setAddNewProductDisplay={setAddNewProductDisplay} addNewProductDisplay={addNewProductDisplay} />

            {/* add a new product  */}
            <TouchableOpacity style={style.btn} onPress={() => setAddNewProductDisplay(true)}>
                <Feather name="plus-square" size={50} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={style.btn} onPress={() => {
                Alert.alert("searching", "sorry! it's not available yet!", [
                    { "text": "ok", onPress: console.log("ok pressed") }
                ], { cancelable: true })
            }}>
                <Fontisto name="search" size={45} color="white" />
            </TouchableOpacity>


            {/* display sotre chart */}
            <TouchableOpacity style={style.btn} onPress={() => setStoreChartDisplay(true)}>
                <Feather name="pie-chart" size={50} color="white" />
            </TouchableOpacity>


            {/* reload products */}
            <TouchableOpacity style={style.btn} onPress={() => {
                fetchData()
                Alert.alert("Reloading", "Products Reloaded Successfully", [
                    { text: "Ok", onPress: () => console.log("Ok pressed!") }
                ]
                )
            }}>
                <Ionicons name="reload-circle-outline" size={55} color='white' />
            </TouchableOpacity>





        </ManageButtonContainer>




    )

    // display add new product modal
    function displayNewProductModel() {
        console.log(" add a new product button ")
    }
}


const style = StyleSheet.create({
    btn: {
        marginHorizontal: 4
    }
})

export default ManageProducts
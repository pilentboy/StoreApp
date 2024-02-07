import { View, StyleSheet, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import { Ionicons } from '@expo/vector-icons';
import { ProductContext } from '../../context/productContext';
import { useContext, useState } from 'react';
import { Alert } from 'react-native'
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
            <Pressable style={style.btn} onPress={() => setAddNewProductDisplay(true)}>
                <Feather name="plus-square" size={50} color="white" />
            </Pressable>

            <Pressable style={style.btn} >
                <Fontisto name="search" size={45} color="white" />
            </Pressable>


            {/* display sotre chart */}
            <Pressable style={style.btn} onPress={() => setStoreChartDisplay(true)}>
                <Feather name="pie-chart" size={50} color="white" />
            </Pressable>


            {/* reload products */}
            <Pressable style={style.btn} onPress={() => {
                fetchData()
                Alert.alert("Reloading", "Products Reloaded Successfully", [
                    { text: "Ok", onPress: () => console.log("Ok pressed!") }
                ]
                )
            }}>
                <Ionicons name="reload-circle-outline" size={55} color='white' />
            </Pressable>





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
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ScrollView,
    Modal
} from 'react-native'
import HomeTitle from '../componenet/home-title';
import { useState, useContext } from "react";
import Product from "../componenet/product"
import { ProductContext } from '../context/productContext';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


// Home  component
function Home() {

    // products list
    const { products, updateProducts, loading } = useContext(ProductContext)

    // modal state
    const [modal, setmodal] = useState(false)
    // Render the component based on the loading state


    if (!loading) {

        return (
            // ScrollView to enable scrolling
            <ScrollView >
                {/* Container for the main content */}
                <StatusBar style="auto" />

                {/* Modal to add a new product */}
                <Modal visible={modal}>
                    <View>
                        <Text>
                            I'm a modal
                        </Text>
                    </View>

                </Modal>

                {/* main view */}
                <View style={style.mainContainer}>
                    {/* home title */}
                    <HomeTitle firstText={"Jackets and"} secondText={"tops"} />

                    {/* home description */}
                    <View style={{ marginTop: 15 }}>
                        <Text style={style.screenDescritipn} >
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod.
                        </Text>
                    </View>

                    {/* add a new product button */}
                    <Pressable style={style.addNewProductBTN} onPress={displayNewProductModel}>
                        <Feather name="plus-square" size={50} color="white" />
                    </Pressable>

                    {/* List of Products */}
                    <View style={[style.flex, style.productContainer]}>
                        {
                            products.map((product) => {
                                return (
                                    <Product key={product.id} {...product} />
                                )
                            })

                        }
                    </View>



                </View >

            </ScrollView >

        )
    } else {

        return (
            // Render a loading view if data is still being fetched
            <View style={[style.flex, { alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }]}>
                <Text style={{ fontSize: 50 }}>
                    Loading!
                </Text>
            </View>
        )
    }


    // display add new product modal
    function displayNewProductModel() {
        console.log("test")
    }

}


const style = StyleSheet.create({
    flex: {
        display: "flex",
    },
    screenTitle: {
        fontSize: 50,
        fontWeight: "bold"
    },
    screenDescritipn: {
        fontSize: 23,
        color: "#878e95",
        fontWeight: "400"
    },
    productContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingVertical: 25
    },
    addProductBTNBOX: {
        marginTop: 15,
        backgroundColor: "#222529"
    },
    mainContainer: {
        paddingHorizontal: 15,
        paddingVertical: 30,
        width: "100%"
    },
    addNewProductBTN: {
        marginTop: 15,
        backgroundColor: "#222529"
    }

})


export default Home;
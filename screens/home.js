import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ScrollView,
    Modal
} from 'react-native'
import ProductPageTitle from '../componenet/home/productPageTitle';
import { useState, useContext } from "react";
import Product from "../componenet/product"
import { ProductContext } from '../context/productContext';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import ProductPageDescription from "../componenet/home/productPageDescription"
import ControlProductOptions from '../componenet/home/controlProductOptions';

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
                    <ProductPageTitle firstText={"Jackets and"} secondText={"tops"} />

                    {/* product page description */}
                    <ProductPageDescription description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"} />

                    <ControlProductOptions />


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




}


const style = StyleSheet.create({
    flex: {
        display: "flex",
    },
    screenTitle: {
        fontSize: 50,
        fontWeight: "bold"
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
    }

})


export default Home;
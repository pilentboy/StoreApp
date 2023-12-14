import { View, Text, StyleSheet, Pressable, ScrollView, StatusBar, Modal } from 'react-native'
import { useState, useContext } from "react";
import Product from "../componenet/product"
import { ProductContext } from '../context/productContext';
import { Feather } from '@expo/vector-icons';
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
                <StatusBar barStyle={"default"} />
                {/* Modal to add a new product */}
                <Modal visible={modal}>
                    <View>
                        <Text>
                            I'm a modal
                        </Text>
                    </View>
                </Modal>
                {/* main view */}
                <View style={{ paddingHorizontal: 15, paddingVertical: 30, width: "100vw", position: "relative" }}>
                    {/* home title */}
                    <View style={style.flex}>
                        <Text style={style.screenTitle}>
                            Jackets and
                        </Text>
                        <Text style={style.screenTitle}>
                            tops
                        </Text>
                    </View>
                    {/* home description */}
                    <View style={{ marginTop: 15 }}>
                        <Text style={style.screenDescritipn} >
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod.
                        </Text>
                    </View>

                    {/* add a new product button */}
                    <Pressable style={style.addNewProductBTN} onPress={AddProduct}>
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



                </View>

            </ScrollView>

        )
    } else {

        return (
            // Render a loading view if data is still being fetched
            <View style={[style.flex, { alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh" }]}>
                <Text style={{ fontSize: 50 }}>
                    Loading!
                </Text>
            </View>
        )
    }

    function AddProduct() {
        if(!modal){
            setmodal(true)
        }else{
            setmodal(false)
        }
    }

}

// Styles for the component
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
    addNewProductBTN: {
        marginTop: 15,
        backgroundColor: "#222529"
    }
})
export default Home;
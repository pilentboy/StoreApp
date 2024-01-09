import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Modal
} from 'react-native'
import { useState, useContext } from "react";
import { ProductContext } from '../context/productContext';
import { StatusBar } from 'expo-status-bar';

// import custome components
import ProductPageDescription from "../componenet/home/productPageDescription"
import ManageProducts from '../componenet/home/manageProducts';
import Product from "../componenet/product/product"
import ProductPageTitle from '../componenet/home/productPageTitle';

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


                {/* main view */}
                <View style={style.container}>

                    {/* home title */}
                    <ProductPageTitle firstText={"Jackets and"} secondText={"tops"} />

                    {/* product page description */}
                    <ProductPageDescription description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"} />

                    {/* control product options */}
                    <ManageProducts />


                    {/* List of Products */}
                    <View style={style.productContainer}>
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
            <View style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                <Text style={{ fontSize: 50 }}>
                    Loading!
                </Text>
            </View>
        )
    }




}


const style = StyleSheet.create({
    productContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingVertical: 25
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 30,
        width: "100%"
    }

})


export default Home;
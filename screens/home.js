import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    Image
} from 'react-native'

import { useState, useContext, useEffect } from "react";
import { ProductContext } from '../context/productContext';
// import custome components
import ProductPageDescription from "../components/home/productPageDescription"
import ManageProducts from '../components/home/manageProducts';
import Product from "../components/product/product"
import ProductPageTitle from '../components/home/productPageTitle';


// Home  component

function Home({ route }) {

    const searchedProducts = route.params

    console.log(searchedProducts, "route")

    // products list
    const { products, updateProducts, loading } = useContext(ProductContext)

    useEffect(() => {
        loadProducts()
    }, [products])

    function loadProducts() {
        return products.map((product) => (
            <Product key={product.id} {...product} />
        ));
    }

    if (!loading) {

        return (

            <ScrollView >

                <StatusBar backgroundColor='black' barStyle='white' />

                {/* main view */}
                <View style={style.container}>

                    {/* home title */}
                    <ProductPageTitle firstText={"All the clothes"} secondText={"You Need!"} />

                    {/* product page description */}
                    <ProductPageDescription description={"you can find the best and cheapest products for every seasons here!"} />

                    {/* control product options */}
                    <ManageProducts />


                    {/* List of Products */}
                    <View style={style.productContainer}>
                        {
                            loadProducts()
                        }


                    </View>



                </View >

            </ScrollView >

        )
    } else {

        return (
            // Render a loading view if data is still being fetched
            <View style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>

                <Image source={require('../assets/icon.png')} style={{ width: 200, height: 100 }} />

                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
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
        alignItems: "center",
        alignContent: "center",
        paddingVertical: 25,
        width: "100%",
    },
    container: {
        paddingHorizontal: 15,
        width: "100%",
        backgroundColor: "#F5F7F8"
    }

})


export default Home;
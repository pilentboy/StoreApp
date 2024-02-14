import { View, Text, StatusBar, ScrollView, StyleSheet } from 'react-native'
import { useState, useEffect, useContext } from 'react'
import Product from '../components/product/product'
import { ProductContext } from '../context/productContext';

const Search = ({ route }) => {

    const test = route.params;

    const { products } = useContext(ProductContext)
    const [searchedItems, setSearchFilter] = useState([])

    const loadProducts = () => {

        if (searchedItems.length > 0) {
            return searchedItems.map((product) => (
                <Product key={product.id} {...product} />
            ));
        }

        return (
            <View style={{ marginTop: 100 }}>
                
            </View>
        )



    }
    // product.name === test.searchValue
    const filterProducts = () => {
        const searchedProducts = products.filter((product) => product.name.toLowerCase().includes(test.searchValue.toLowerCase()))
        setSearchFilter(searchedProducts)
    }

    useEffect(() => {
        filterProducts()
    }, [test])


    return (
        <ScrollView>

            <StatusBar backgroundColor='black' barStyle='white' />

            <View style={style.container}>

                <View style={style.productContainer}>
                    {
                        loadProducts()
                    }
                </View>

            </View>


        </ScrollView>


    )
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

export default Search
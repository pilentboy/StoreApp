import { View, StatusBar, ScrollView, StyleSheet } from 'react-native'
import Product from '../components/product/product'

const Search = ({ route }) => {

    const searchRoute = route.params;

    const loadProducts = () => {

        return searchRoute.searchedItems.map((product) => (
            <Product key={product.id} {...product} />
        ));

    }

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
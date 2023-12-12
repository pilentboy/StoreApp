import { View, Text, StyleSheet, Pressable, Image, ScrollView, StatusBar } from 'react-native'
import { useState, useEffect } from "react";
import Product from "../componenet/product"

// Home  component
function Home() {

    // State to manage the list of products and loading state
    const [productsList, addpoductsList] = useState([])
    const [loading, setloading] = useState(true)


    const [test, settest] = useState()

    productsList.forEach(e => {
        settest(e.name)
        console.log(test)
    })
    
    // Fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Read data from db.json using require (this is a synchronous operation)
                const response = await require('../db.json');
                const jsonContent = JSON.parse(JSON.stringify(response));

                // Update the state with the list of products and set loading to false
                addpoductsList(jsonContent.products);

                setloading(false)
            } catch (error) {
                console.error('Error reading db.json:', error);
            }

        };

        fetchData()




    }, []);

    // Render the component based on the loading state

    if (!loading) {
        return (
            // ScrollView to enable scrolling
            <ScrollView >
                {/* Container for the main content */}
                <StatusBar barStyle={"default"} />
                <View style={{ paddingHorizontal: 15, paddingVertical: 30, width: "100vw" }}>
                    {/* screen title */}
                    <View style={style.flex}>
                        <Text style={style.screenTitle}>
                            Jackets and
                        </Text>
                        <Text style={style.screenTitle}>
                            tops
                        </Text>
                    </View>
                    {/* screen description */}
                    <View style={{ marginTop: 15 }}>
                        <Text style={style.screenDescritipn} >
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod.
                        </Text>
                    </View>

                    {/* List of Products */}
                    <View style={[style.flex, style.productContainer]}>
                        {
                            productsList.map(item => {
                                return (
                                    < Product name={item.name} price={item.price} key={item.id} imgsrc={item.image} size={item.size} type={item.type} description={item.description} related_products={item.related_products} />
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
    }
})
export default Home;
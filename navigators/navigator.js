
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ProductDetail from "../screens/product-detail";
import { ProductProvider } from "../context/productContext";
import Search from "../screens/search";
import StoreChart from "../screens/sotreChart";

function Navigator() {
    const Stack = createStackNavigator();

    return (
        <ProductProvider>
            <Stack.Navigator>

                {/* Define the "Home" screen with options to hide the header  */}
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false, headerStyle: { height: 40 }, headerPressColor: '#b9ac7d' }}
                />

                <Stack.Screen
                    name="Product Details"
                    component={ProductDetail}
                    options={{ headerShown: true, headerStyle: { height: 40 }, headerPressColor: '#b9ac7d' }}
                />

                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{ headerShown: true, headerStyle: { height: 40 }, headerPressColor: '#b9ac7d' }}
                />


                <Stack.Screen
                    name="chart"
                    component={StoreChart}
                    options={{ headerShown: true, headerStyle: { height: 40 }, headerPressColor: '#b9ac7d' }}
                />

            </Stack.Navigator>
        </ProductProvider>

    );
}

export default Navigator

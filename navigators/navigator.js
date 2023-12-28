
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ProductDetail from "../screens/product-detail";
import { ProductProvider } from "../context/productContext";

function Navigator() {
    const Stack = createStackNavigator();

    return (
        <ProductProvider>
            <Stack.Navigator>

                {/* Define the "Home" screen with options to hide the header  */}
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ProductDetailsScreen"
                    component={ProductDetail}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </ProductProvider>

    );
}

export default Navigator

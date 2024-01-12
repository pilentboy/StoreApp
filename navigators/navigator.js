
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
                    options={{ headerShown: true }}
                />

                <Stack.Screen
                    name="Product Details"
                    component={ProductDetail}
                    options={{ headerShown: true }}
                />

            </Stack.Navigator>
        </ProductProvider>

    );
}

export default Navigator

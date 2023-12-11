
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ProductDetail from "../screens/product-detail";

function Navigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            
            {/* Define the "Home" screen with options to hide the header  */}

            <Stack.Screen name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ProductDetailsScreen"
                component={ProductDetail}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default Navigator

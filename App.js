
import { NavigationContainer } from '@react-navigation/native';
import Navigator from "./navigators/navigator"
import 'react-native-gesture-handler';

function App() {
    return (
        // Wrap the entire app with the NavigationContainer
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    );
}

export default App;

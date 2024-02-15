import { Text, View, StyleSheet } from 'react-native'

const HomePageTitle = ({ StoreName }) => {
    return (

        <View style={style.container}>
            <Text style={style.text}>
                {StoreName} Store <Text>Managers Dashboard</Text>

            </Text>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        paddingTop: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'black',
    }

})
export default HomePageTitle;
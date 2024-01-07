import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native'


function Input({ title, inputValue }) {

    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}:
            </Text>
            <TextInput value={inputValue} style={style.input} />
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
            marginVertical: 10
        },
        title: {
            fontSize: 18,
            color: "black",
            fontWeight: "bold"
        },
        input: {
            fontSize: 18,
            paddingVertical: 8,
            paddingHorizontal: 5,
            width: "80%",
            borderRadius: 5,
            borderWidth: 2,
            borderColor: "black",
            fontWeight:"bold"
        }

    }
)

export default Input
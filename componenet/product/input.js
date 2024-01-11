import { Text, View, TextInput, StyleSheet } from 'react-native'


function Input({ title, inputValue, setNewValue, inputType }) {

    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}:
            </Text>
            <TextInput inputMode={inputType} value={inputValue} style={style.input} onChangeText={setNewValue} />
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginVertical: 10,
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
            fontWeight: "bold"
        }

    }
)

export default Input
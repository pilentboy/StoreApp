import { Text, View, TextInput, StyleSheet } from 'react-native'


function Input({ title, inputValue, setNewValue, inputType,inputWidth }) {

    return (
        <View style={style.container}>
            <TextInput placeholder={title} inputMode={inputType} placeholderTextColor={'gray'}  textAlign='left' spellCheck value={inputValue} style={[style.input,{width:inputWidth}]} onChangeText={setNewValue} />
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
            width:"100%"
        },
        input: {
            fontSize: 18,
            paddingVertical: 8,
            paddingHorizontal: 5,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: "black",
            fontWeight: "bold"
        }

    }
)

export default Input
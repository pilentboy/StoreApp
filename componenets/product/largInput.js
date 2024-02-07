import { Text, View, TextInput, StyleSheet } from 'react-native'


function LargeInput({ title, inputValue, setNewValue, inputType, maxChar,inputHeight}) {

    return (

        <View style={style.container}>
            <TextInput textAlignVertical='top' maxLength={maxChar} multiline placeholder={title} placeholderTextColor={'gray'} inputMode={inputType} textAlign='left' spellCheck value={inputValue} style={[style.input,{height:inputHeight}]} onChangeText={setNewValue} />
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
            paddingVertical: 6,
            paddingHorizontal: 5,
            width: "100%",
            borderRadius: 5,
            borderWidth: 2,
            borderColor: "black",
            fontWeight: "bold"
        }

    }
)

export default LargeInput
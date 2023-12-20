import { Text, StyleSheet } from "react-native"


function RequiredTitle(props) {

    const { title } = props

    return (
        <Text style={style.requiredTitle}>
            {title} <Text style={{ color: "#878e95", fontSize: 15 }}>(required)</Text>
        </Text>
    )
}

const style = StyleSheet.create({
    requiredTitle: {
        fontWeight: "bold",
        fontSize: 20
    },
})
export default RequiredTitle
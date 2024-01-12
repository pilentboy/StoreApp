import { View, StyleSheet, Text } from "react-native"



function Category({ title, values }) {

    return (

        <View style={{ flexDirection: 'row', alignItems: "center" }}>

            <Text style={style.title}>
                {title}:
            </Text>

            {
                values.map((i, index) => {
                    return (
                        <Text style={[style.title, style.gray, { marginLeft: 6 }]} key={index}>
                            {i}
                        </Text>
                    )
                })
            }

        </View>


    )


}

const style = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    gray: {
        color: '#878e95',
    },

})

export default Category

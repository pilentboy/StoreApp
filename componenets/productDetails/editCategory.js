import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


function EditCategory({ category, action }) {
    console.log(category, "d")


    return (
        <View style={{ flexDirection: "row", alignSelf: 'flex-start', alignItems: "center", flexWrap: 'wrap', marginVertical: 10 }}>

            <Text style={{ color: "black", fontSize: 18, fontWeight: 'bold' }}>Categories: </Text>
            {category.length > 0 ? category.map((catagory, index) => (
                (
                    <View key={index} style={style.catagoryContainer}>
                        <Text style={style.value}>{catagory}</Text>

                        <TouchableOpacity style={style.categoryBTN} onPress={() => action(catagory)}>
                            <AntDesign name="closecircle" size={20} color="red" />
                        </TouchableOpacity>

                    </View>
                )
            )) : <Text style={{ color: "red", fontWeight: 'bold', fontSize: 18 }}> No Category</Text>}

        </View>
    )

}



const style = StyleSheet.create({
    btn: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    catagoryContainer: {
        backgroundColor: "black",
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginHorizontal: 10,
        position: 'relative'
    },
    categoryBTN: {
        position: "absolute",
        top: -5,
        right: -5
    }
})

export default EditCategory
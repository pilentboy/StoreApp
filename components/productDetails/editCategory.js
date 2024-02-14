import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


function EditCategory({ category, action }) {
    console.log(category, "d")


    return (
        <View style={{ flexDirection: "row", alignSelf: 'flex-start', alignItems: "center", marginVertical: 10, paddingVertical: 10 }}>

            <Text style={{ color: "black", fontSize: 18, fontWeight: 'bold' }}>Categories: </Text>
            {category.length > 0 ? (<ScrollView horizontal paddingVertical={5}>
                {
                    category.map((catagory, index) => (
                        (
                            <View key={index} style={style.catagoryContainer}>
                                <Text style={style.value}>{catagory}</Text>

                                <TouchableOpacity style={style.categoryBTN} onPress={() => action(catagory)}>
                                    <AntDesign name="closecircle" size={20} color="red" />
                                </TouchableOpacity>

                            </View>
                        )
                    ))}
            </ScrollView>) : <Text style={{ color: "red", fontWeight: 'bold', fontSize: 18 }}> No Category</Text>}

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
        position: 'relative',
        borderRadius: 10
    },
    categoryBTN: {
        position: "absolute",
        top: -1,
        right: -5,
        overflow: 'visible'
    }
})

export default EditCategory
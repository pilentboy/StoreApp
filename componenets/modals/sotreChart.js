import { Modal, View, Text, Pressable, StyleSheet } from "react-native";


function StoreChart({ display, setStoreChartDisplay }) {



    return (
        <Modal visible={display} >

            <Pressable style={style.btn} onPress={() => setStoreChartDisplay(false)}>
                <Text style={style.btnText}>Close</Text>
            </Pressable>

        </Modal>
    )
}

const style = StyleSheet.create({
    btn: {
        backgroundColor: 'red',
        width: 70,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})



export default StoreChart
import { Pressable, View, StyleSheet,Text } from "react-native";
import * as imagePicker from 'expo-image-picker'
import { useState, useEffect } from "react";


function ImagePicker() {
    const [galleryPermission, setGalleryPermission] = useState(null)
    const [uploadedImage, setUploadedImage] = useState(null)


    return (

        <Pressable style={style.btn}>
            <Text style={style.title}>Upload Image</Text>
        </Pressable>

    )
}

const style = StyleSheet.create({
    btn: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        backgroundColor: "black",
        marginVertical:10
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default ImagePicker
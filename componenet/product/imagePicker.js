import { Pressable, View, StyleSheet, Text } from "react-native";
import * as imagePicker from 'expo-image-picker'
import { useState, useEffect } from "react";


function ImagePicker() {

    const [galleryPermission, setGalleryPermission] = useState(null)
    const [uploadedImage, setUploadedImage] = useState(null)

    useEffect(() => {
        (async () => {
            const getGalleryPermission = await imagePicker.getMediaLibraryPermissionsAsync()
            setGalleryPermission(getGalleryPermission.status === 'granted')
        })()
    }, [])

    // get img from media library
    const getImage = async () => {
        const result = await imagePicker.launchImageLibraryAsync({
            mediaTypes: imagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        if (!result.canceled) {
            setUploadedImage(result.assets[0]['uri'])
            console.log(result.assets[0].uri)
        }

    }


    return (

        <Pressable style={style.btn} onPress={() => getImage()}>
            <Text style={style.title}>Upload Image</Text>
        </Pressable>

    )
}

const style = StyleSheet.create({
    btn: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        backgroundColor: "black",
        marginVertical: 10
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default ImagePicker
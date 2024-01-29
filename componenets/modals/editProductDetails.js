import { Text, Image, View, Modal, Pressable, StyleSheet, ScrollView, Alert } from "react-native"
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import Input from "../product/input";
import { AntDesign } from '@expo/vector-icons';
import ImagePicker from "../product/imagePicker";
import { MaterialIcons } from '@expo/vector-icons';
import CloseBTN from "../product/closeBTN";


function EditProductDetails({ EditProductDetailsDisplay, setEditProductDetailsDisplay }) {

    return (
        <Modal visible={EditProductDetailsDisplay}></Modal>
    )
}

const style = StyleSheet.create({

})

export default EditProductDetails


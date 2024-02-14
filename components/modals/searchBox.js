import { View, Modal, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import CloseBTN from '../product/closeBTN'
import Input from '../product/input'
import { useState, useRef, useEffect } from 'react'


const SearchBox = ({ searchBoxDisplay, setSearchBoxDisplay }) => {

    const [searchValue, setSearchValue] = useState("")

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeDurration = 500

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: fadeDurration,
            useNativeDriver: true,
        }).start();

        setTimeout(() => setSearchBoxDisplay(false), fadeDurration)

    };


    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: fadeDurration,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        if (searchBoxDisplay) {
            fadeIn()
        }
    }, [searchBoxDisplay])

    return (

        <Modal visible={searchBoxDisplay} transparent={true} >

            <Animated.View
                style={[
                    style.container,
                    {
                        opacity: fadeAnim,
                    },
                ]}
            >

                <Input inputValue={searchValue} inputType='text' title="Search.." inputWidth={"80%"} setNewValue={setSearchValue} textColor={"white"} borderColor={"white"} />

                <CloseBTN action={() => fadeOut()} color={"red"} />
            </Animated.View>

        </Modal>
    )

}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginTop: 40,
        backgroundColor: "rgba(0,0,0,0.9)",

    }
})

export default SearchBox
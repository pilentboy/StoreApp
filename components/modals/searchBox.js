import { View, Modal, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import CloseBTN from '../product/closeBTN'
import Input from '../product/input'
import { useState, useRef, useEffect } from 'react'
import ButtonContainer from '../productDetails/buttonContainer'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SearchBox = ({ searchBoxDisplay, setSearchBoxDisplay }) => {


    const navigation = useNavigation();

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


    const searching = () => {
        if (searchValue !== "") {
            fadeOut()
            displaySearchedPoructs()
        }
    }

    function displaySearchedPoructs() {
        navigation.navigate('Search', {
            searchValue
        });
    }


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

                <Input inputValue={searchValue} inputType='text' title="Search..." inputWidth={"100%"} setNewValue={setSearchValue} textColor={"white"} borderColor={"white"} />

                <ButtonContainer>

                    <CloseBTN action={() => fadeOut()} color={"red"} />

                    <TouchableOpacity onPress={searching} style={style.btn}>
                        <AntDesign name="checksquare" size={35} color="green" />
                    </TouchableOpacity>

                </ButtonContainer>

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
        paddingHorizontal: 30
    },
    btn: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10
    },
})

export default SearchBox
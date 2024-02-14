import { View, Modal, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import CloseBTN from '../product/closeBTN'
import Input from '../product/input'
import { useState, useRef, useEffect, useContext } from 'react'
import ButtonContainer from '../productDetails/buttonContainer'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProductContext } from '../../context/productContext'


const SearchBox = ({ searchBoxDisplay, setSearchBoxDisplay }) => {

    const { products } = useContext(ProductContext)

    const navigation = useNavigation();

    const [searchValue, setSearchValue] = useState("")
    const [searchedItems, setSeachedItems] = useState([])


    ////------------- fade
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
    ////------------- end fade


    const handleSearch = () => {
        if (searchValue !== "" && searchedItems.length > 0) {
            fadeOut()
            displaySearchedPoructs()
            setSearchValue("")
        }else{
            console.log("error")
        }
    }


    const filterProducts = () => {
        const searchedProducts = products.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()))
        setSeachedItems(searchedProducts)
    }

    useEffect(() => {
        filterProducts()
    }, [searchValue])

    function displaySearchedPoructs() {
        navigation.navigate('Search', {
            searchedItems
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

                    <TouchableOpacity onPress={handleSearch} style={style.btn}>
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
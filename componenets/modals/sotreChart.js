import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
import CloseBTN from "../product/closeBTN";
import { PieChart } from "react-native-chart-kit";
import ButtonContainer from "../productDetails/buttonContainer";

function StoreChart({ display, setStoreChartDisplay }) {

    const data = [
        {
            name: "Jacket",
            sold: 40,
            color: "lightblue",
            legendFontColor: "black",
            legendFontSize: 15
        },
        {
            name: "T-Shirt",
            sold: 10,
            color: "purple",
            legendFontColor: "black",
            legendFontSize: 15
        },
        {
            name: "Pant",
            sold: 20,
            color: "orange",
            legendFontColor: "black",
            legendFontSize: 15
        },
        {
            name: "Hat",
            sold: 150,
            color: "#29ADB2",
            legendFontColor: "black",
            legendFontSize: 15
        },
        {
            name: "Gloves",
            sold: 120,
            color: "#F4CE14",
            legendFontColor: "black",
            legendFontSize: 15
        }

    ];


    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    console.log(windowWidth)

    return (
        <Modal visible={display} >

            <View style={style.container}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sold Products Chart</Text>

                <View style={{ justifyContent: 'center' }}>
                    <PieChart
                        data={data}
                        width={windowWidth}
                        height={320}
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "2",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        accessor={"sold"}
                        backgroundColor={"transparent"}
                        paddingLeft={"0"}
                        center={[80, 0]}
                        absolute
                        hasLegend={false}
                    />

                    <ScrollView >
                        {
                            data.map((item, index) => {
                                return (
                                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3EEEA', marginVertical: 1, paddingHorizontal: 10, paddingVertical: 5 }}>
                                        <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: item.color, marginRight: 10 }} />
                                        <Text style={{ color: item.legendFontColor, fontSize: 20, fontWeight: 'bold' }}>
                                            {item.name}
                                        </Text>
                                    </View>

                                )
                            })
                        }
                    </ScrollView>


                </View>
				
				
                {/* 
                <View style={style.buttonsContainer}>
                    <CloseBTN action={() => setStoreChartDisplay(false)} />
                </View> */}

                <ButtonContainer>
				
                    <CloseBTN action={() => setStoreChartDisplay(false)} />

                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
							Print
						</Text>
                    </TouchableOpacity>

                </ButtonContainer>

            </View>



        </Modal >
    )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flex: 1,
        paddingBottom: 30,
        paddingTop: 20
    },
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
    },
	printBTN:{ width: 50,
	height: 35,
	borderRadius: 5,
	backgroundColor: 'black',
	alignItems: 'center', 
	justifyContent: 'center' 
	}
})



export default StoreChart
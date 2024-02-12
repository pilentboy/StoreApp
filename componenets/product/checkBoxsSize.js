import { View } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

function CheckBoxSize({ title, selected, setProductSize }) {

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>

                <BouncyCheckbox
                    text={title}
                    onPress={setProductSize}
                    isChecked={selected}

                    size={20}
                    fillColor="#362FD9"
                    unfillColor="white"
                    iconStyle={{ borderColor: "white", borderRadius: 0 }}
                    innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}

                    textStyle={{
                        textDecorationLine: "none", fontWeight: 'bold', fontSize: 16, color: "#27374D"
                    }}

                    textContainerStyle={{ margin: 5 }}

                    bounceEffectIn={0.5}
                />



            </View>
        </View>
    )
}
export default CheckBoxSize;


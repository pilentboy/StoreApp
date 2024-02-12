import CheckBoxSize from "./checkBoxsSize";


const ProductSize = () => {
    return (

        <View style={{ marginVertical: 5, alignItems: "center" }}>

            <Text style={{ color: 'black', fontSize: 18, fontWeight: 500, marginBottom: 5 }}>Product Size</Text>

            <View style={{ flexDirection: 'row' }}>



                {
                    productSize.map((size, index) => (
                        <CheckBoxSize key={index} title={productSize[index].value} selected={productSize[index].selected} setProductSize={() => handleSelectedSize(index)} />
                    ))
                }


            </View>


        </View>

    );
}

export default ProductSize;
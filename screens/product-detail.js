// Import necessary modules
import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  StatusBar
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ProductDescription from '../componenet/productDetails/productDescription';
import RequiredTitle from '../componenet/productDetails/requiredTitle';
import ProductScore from '../componenet/product/productScore';
import TextList from '../componenet/productDetails/textList';
import Product from '../componenet/product/product';
import { ProductContext } from '../context/productContext';
import ProductPrice from '../componenet/productDetails/productPrice';
import ProductType
  from '../componenet/productDetails/productType';
import AddToCart from '../componenet/productDetails/addToCart'
import SocialMediaLink from '../componenet/productDetails/socialMediaLink';
import Category from '../componenet/productDetails/category';

// ProductDetail Component
function ProductDetail({ route }) {


  // Destructure parameters from the route
  const productInfo = route.params;
  // Access product context
  const { products, updateProducts } = useContext(ProductContext);
  // State for selected size in picker
  const [selectedValue, setSelectedValue] = useState(productInfo.props.size);
  // State for related products
  const [relatedProducts, setRelatedProducts] = useState([]);

  // scroll view ref
  const scrollViewRef = useRef(null);

  // Function to display related products based on the selected product
  const findRelatedProducts = async () => {
    // Reset relatedProducts before updating
    setRelatedProducts([]);
    // Find related products based on the clicked product's information
    const relProducts = await products.filter((p, index) => {
      if (productInfo.props.related_products.includes(index)) {
        return products[index];
      }
    });

    // Update the relatedProducts state
    setRelatedProducts(relProducts);
  };



  const scrollToTop = () => {
    // scrool to top when the component mount
    scrollViewRef.current.scrollTo({ y: 0, animated: false });
    console.log("scroll to top")
  };


  // useEffect to trigger findRelatedProducts when productInfo changes
  useEffect(() => {
    findRelatedProducts();
    scrollToTop();
  }, [productInfo]);




  // JSX structure for the component
  return (
    // ScrollView to enable scrolling
    <ScrollView ref={scrollViewRef}>
      <StatusBar backgroundColor='black' barStyle='white' />
      {/* Container for the product details */}
      <View style={style.container}>


        <Text style={{ fontWeight: 'bold', fontSize: 40, }} >{productInfo.props.name} </Text>

        <ProductPrice price={productInfo.props.price} />

        {/* Product store information */}
        <View style={{ flexDirection: "row", marginTop: 25 }}>
          <ProductScore />
          <Text style={style.reviews}>
            {productInfo.props.reviews} REVIEWS
          </Text>
        </View>

        {/* Product description */}
        <ProductDescription description={productInfo.description} />

        {/* Product size selection */}
        <View style={{ marginTop: 20 }}>

          <RequiredTitle title="Size" />

          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            style={style.pickerSize}>
            <Picker.Item label={productInfo.props.size} value={productInfo.props.size} />
            <Picker.Item label={"M"} value={"M"} />
            <Picker.Item label={"XL"} value={"XL"} />
          </Picker>

        </View>

        {/* Product type */}

        <ProductType type={productInfo.props.type} />

        {/* Add to cart section */}
        <AddToCart count={1} />

        {/* Add to wishlist and social media links */}
        <View style={style.wrapperRow}>

          <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="hearto" size={20} color="#b9ac7d" />
            <Text style={{ color: '#b9ac7d', fontWeight: 'bold', marginLeft: 5, fontSize: 18 }}>Add to wishlist</Text>
          </Pressable>

          {/* Social media links */}
          <SocialMediaLink />

        </View>

        {/* Category and tags */}
        <View style={{ marginTop: 25 }}>
          <Category title={"Category"} values={["Shirts"]} />
          <Category title={"Tag"} values={["Leisure", "Elegant"]} />
        </View>


        {/* Product image */}
        <Image source={{ uri: productInfo.props.image }} style={style.productImage} />

        {/* Product description */}
        <View style={{ borderBottomWidth: 3, paddingVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>DESCRIPTION</Text>
        </View>

        {/* About the product */}
        <View style={{ paddingHorizontal: 16, marginVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 10 }}>About</Text>
          <ProductDescription description={productInfo.props.you_will_love[0]} />
          <ProductDescription description={productInfo.props.about} />
        </View>

        {/* List of product's best features */}
        <View style={{ paddingHorizontal: 16, marginVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 10 }}>You will love</Text>

          {productInfo.props.you_will_love.map((i, index) => {
            return <TextList key={index} description={i} />;
          })}

        </View>

        {/* Related products */}
        <View style={{ marginVertical: 20 }}>

          <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 10 }}>You might also like these</Text>

          {/* Related products */}
          <View style={style.relatedProductsWrapper}>
            {relatedProducts.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          </View>

        </View>

      </View>

    </ScrollView >
  );
}

// Styles for the component
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    width: '100%',
  },
  pickerSize: {
    marginTop: 15,
    paddingVertical: 12,
    width: '50%',
    borderColor: '#878e95',
    paddingHorizontal: 20,
  },
  wrapperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  productImage: {
    marginVertical: 25,
    width: '100%',
    height: 400,
  },
  relatedProductsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  reviews: {
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#878e95'
  }
});

// Export the component
export default ProductDetail;

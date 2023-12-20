// Import necessary modules
import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ProductContext } from '../context/productContext';
import ProductScore from '../componenet/product-score';
import { Entypo } from '@expo/vector-icons';
import RequiredTitle from '../componenet/required-title';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ProductDescription from '../componenet/product-description';
import TextList from '../componenet/text-list';
import Product from '../componenet/product';
import { StatusBar } from 'expo-status-bar';

// ProductDetail Component
function ProductDetail({ route }) {
  // Destructure parameters from the route
  const productInfo = route.params;
  // Access product context
  const { products, updateProducts } = useContext(ProductContext);
  // State for selected size in picker
  const [selectedValue, setSelectedValue] = useState(productInfo.size);
  // State for related products
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Function to display related products based on the clicked product
  const findRelatedProducts = async () => {
    // Reset relatedProducts before updating
    setRelatedProducts([]);
    // Find related products based on the clicked product's information
    const relProducts = await products.filter((p, index) => {
      if (productInfo.related_products.includes(index)) {
        return products[index];
      }
    });
    // Update the relatedProducts state
    setRelatedProducts(relProducts);
  };

  // useEffect to trigger findRelatedProducts when productInfo changes
  useEffect(() => {
    findRelatedProducts();
  }, [productInfo]);

  // JSX structure for the component
  return (
    // ScrollView to enable scrolling
    <ScrollView>
      {/* Status bar for system information */}
      <StatusBar  style="auto" />

      {/* Container for the product details content */}
      <View style={style.mainContainer}>
        {/* Product title */}
        <Text style={[style.productName]}>{productInfo.name}</Text>

        {/* Product price */}
        <Text style={style.productPrice}>${productInfo.price}</Text>

        {/* Product store information */}
        <View style={style.productStore}>
          <ProductScore />
          <Text style={{ marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: '#878e95' }}>
            {productInfo.reviews} REVIEWS
          </Text>
        </View>

        {/* Product description */}
        <ProductDescription description={productInfo.description} />

        {/* Product size selection */}
        <View style={[style.flex, style.productRequiredOptions]}>
          <RequiredTitle title="Size" />
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            style={style.pickerSize}>
            <Picker.Item label={productInfo.size} value={productInfo.size} />
          </Picker>
        </View>

        {/* Product type */}
        <View style={[style.flex, style.productRequiredOptions]}>
          <RequiredTitle title="Type" />
          <View style={[style.flex, { flexDirection: 'row', marginTop: 20 }]}>
            <Text style={[style.productType, { backgroundColor: '#b9ac7d' }]}>{productInfo.type}</Text>
            <Text
              style={[style.productType, { backgroundColor: 'white', color: '#b9ac7d', borderColor: '#b9ac7d', borderWidth: 2, marginLeft: 5 }]}>
              Empty
            </Text>
          </View>
        </View>

        {/* Add to cart section */}
        <View style={[style.flex, style.addToCart, { flexDirection: 'row' }]}>
          {/* Count of the product */}
          <Text style={style.productCount}>1</Text>
          {/* Add to cart button */}
          <Pressable style={[style.addToCartBTN, style.flex, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
            <Entypo name="shopping-cart" size={20} color="white" />
            <Text style={style.cartBTNText}>ADD TO CART</Text>
          </Pressable>
        </View>

        {/* Add to wishlist and social media links */}
        <View style={style.wishlistRow}>
          <Pressable style={[style.flex, { flexDirection: 'row', alignItems: 'center' }]}>
            <AntDesign name="hearto" size={20} color="#b9ac7d" />
            <Text style={{ color: '#b9ac7d', fontWeight: 'bold', marginLeft: 5, fontSize: 18 }}>Add to wishlist</Text>
          </Pressable>
          {/* Social media links */}
          <View style={[style.flex, { flexDirection: 'row' }]}>
            <FontAwesome name="telegram" size={24} color="black" style={{ marginHorizontal: 5 }} />
            <Entypo name="youtube" size={24} color="black" />
          </View>
        </View>

        {/* Category and tags */}
        <View style={[style.flex, { marginTop: 25 }]}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            Category: <Text style={style.grayText}>Shirts</Text>
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            Tags: <Text style={style.grayText}>Leisure, Elegant</Text>
          </Text>
        </View>

        {/* Product image */}
        <Image source={{ uri: productInfo.image }} style={style.productImage} />

        {/* Product description */}
        <View style={{ borderBottomWidth: 3, paddingVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>DESCRIPTION</Text>
        </View>

        {/* About the product */}
        <View style={{ paddingHorizontal: 16, marginVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 10 }}>About</Text>
          <ProductDescription description={productInfo.you_will_love[0]} />
          <ProductDescription description={productInfo.about} />
        </View>

        {/* List of product's best features */}
        <View style={{ paddingHorizontal: 16, marginVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 10 }}>You will love</Text>
          {productInfo.you_will_love.map((i, index) => {
            return <TextList key={index} description={i} />;
          })}
        </View>

        {/* Related products */}
        <View style={{ paddingHorizontal: 0, marginVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 10 }}>You might also like these</Text>
          {/* Related products */}
          <View style={[style.flex, style.productContainer]}>
            {relatedProducts.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Styles for the component
const style = StyleSheet.create({
  flex: {
    display: 'flex',
  },
  mainContainer: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    width: '100vw', // Note: 'vw' is not applicable in React Native, consider using 'width: '100%'
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  productPrice: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
  },
  productStore: {
    marginTop: 15,
    flexDirection: 'row',
  },
  requiredTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  productRequiredOptions: {
    marginTop: 25,
  },
  pickerSize: {
    marginTop: 15,
    paddingVertical: 12,
    width: '50%',
    borderColor: '#878e95',
    paddingHorizontal: 20,
  },
  productType: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    fontWeight: 'bold',
    fontSize: 16,
  },
  addToCart: {
    marginTop: 25,
  },
  addToCartBTN: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#222529',
  },
  cartBTNText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  productCount: {
    width: '20%',
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
    color: 'black',
    borderWidth: 1,
    borderColor: '#878e95',
  },
  wishlistRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  grayText: {
    color: '#878e95',
  },
  productImage: {
    marginVertical: 25,
    width: '100%',
    height: 400,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

// Export the component
export default ProductDetail;

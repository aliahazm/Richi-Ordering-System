import React, {useContext, useEffect, useState} from 'react';
import { 
  ScrollView, 
  SafeAreaView, 
  Text, 
  View,
  StyleSheet 
} from "react-native";
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CartContext } from '../components/CartContext';
import { getItem } from '../components/menuItems';

function ProductDetails ({route}) {
    const { productId } = route.params;
    const [product, setProduct] = useState({});

    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        setProduct(getItem(productId));
    });

    function onAddToCart() {
        addItemToCart(product.id);
    }

    return (
        <SafeAreaView
            style={{
                backgroundColor: colors.backgroundGrey,
                flex: 1,
            }}
        >
            <ScrollView
                style={{
                backgroundColor: colors.backgroundGrey,
                flex: 1,
                }}
            >
                <View
                    style={styles.container}
                >
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onAddToCart}
                    >
                        <Text>
                            Add to Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,

    },
    name: {

    },
    price:{

    },
    button:{

    },
})

export default ProductDetails;

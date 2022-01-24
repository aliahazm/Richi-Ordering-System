import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
}
from 'react-native';
import colors from "../config/colors";
export function Product({name, price, onPress}){
    return(
        <TouchableOpacity
            onPress={onPress}    
        >
            
            <View style={styles.item}>
           
                <Text style={styles.name} >{name}</Text>
                <Text style={styles.price}>RM {price.toFixed(2)}</Text>

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'column',
        borderWidth:1,
        borderRadius: 10,
        backgroundColor: colors.white,
        padding: 15,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
      },
      name:{
        fontWeight: '700',
        fontSize: 18,
        color: colors.anotherGrey,
        margin:3,
      },
      price: {
        margin:3,
        marginTop:0,
        fontSize:15,
        color: colors.anotherGrey,
      },
    
})
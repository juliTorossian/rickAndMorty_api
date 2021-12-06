import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { globalColors } from '../styles/globalColors';

export default function ListLugarItem( {item} ) {

    return (
        <TouchableOpacity
            onPress={ () => console.log('hola') }
        >
            <View style = {[ styles.container, globalColors.verdeButtons ]}>
                <Text style = {[ styles.text ]}>
                    {[item.name]}
                </Text>
                <Text style = {[ styles.data ]}>
                    {[item.type]}
                </Text>
                <Text style = {[ styles.data ]}>
                    {[item.dimension]}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        backgroundColor: '#D65A31',
        marginHorizontal: 25,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
    },
    text:{
        fontSize: 22,
        fontWeight: "bold",
    },
    data:{
        fontSize: 16,
    },
    imagen:{
        height: 100,
        width: 100,
    },
  });
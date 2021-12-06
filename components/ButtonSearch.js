import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function ButtonClick( props ) {

    return (
        <TouchableOpacity 
            style = {[ styles.container ]}
            onPress={ props.onPress }
        >
            <View>
                <Text 
                    style = {[ styles.text ]}
                >
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#4F892D',
        margin: 10,
        width: '60%',
        borderRadius: 20,

    },
    text:{
        fontSize: 26,
        fontWeight: "bold",
    },
  });
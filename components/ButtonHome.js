import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { globalColors } from '../styles/globalColors';

export default function ButtonClick( props ) {

    return (
        <TouchableOpacity 
            onPress={ props.onPress }
        >
            <View style = {[ styles.container, globalColors.verdeButtons ]}>
                <Image style = {[ styles.imagen ]}
                    source={ props.imagen }
                />
                <View style = {[ styles.container_Text ]}>
                    <Text style = {[ styles.text ]}>
                        {props.text}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {

        alignItems: 'center',

        marginHorizontal: 25,
        marginVertical: 10,
        padding: 10,

        borderRadius: 60,

    },
    container_Text: {
        marginLeft: 10,
    },
    text:{
        fontSize: 22,
        fontWeight: "bold",
    },
    imagen:{
        // backgroundColor: '#fff',
        height: 80,
        width: 80,
    },
  });
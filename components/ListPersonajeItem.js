import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function ListPersonajeItem( { navigation, item } ) {

    return (
        <TouchableOpacity
            onPress={ () => {
                navigation.navigate('Personaje', {
                    id: item.id
                }) 
            }}
        >
            <View style = {[ styles.container ]}>
                <Image style = {[ styles.imagen ]}
                    source={{
                        uri: item.image,
                    }}
                />
                <View style = {[ styles.container_Text ]}>
                    <Text style = {[ styles.text ]}>
                        {[item.name]}
                    </Text>
                    {/* <Text style = {[ styles.data ]}>
                        {[item.gender]}
                    </Text>
                    <Text style = {[ styles.data ]}>
                        {[item.status]}
                    </Text> */}
                    <Text style = {[ styles.data ]}>
                        {[item.origin.name]}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'row',
        
        backgroundColor: '#4F892D',
        marginHorizontal: 25,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
    },
    container_Text: {
        marginLeft: 10,
        flex: 1,
        alignItems: 'center',
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
import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import ButtonHome from "../components/ButtonHome";

export default function HomeScreen({ navigation }){

  const image    = require('../assets/fondo1.png');
  const iconPers = require('../assets/iconPersonajes.png');
  const iconLug  = require('../assets/iconLugares.png');
  const iconCaps = require('../assets/iconCapitulos.png');

  return (
    <View style = {[ styles.container ]}>
      <ImageBackground 
        style={ styles.imgBackground }
        resizeMode= "cover"
        source= { image }
      >
        <ButtonHome text='Personajes' imagen={iconPers} onPress={() => navigation.navigate('Personajes')} />
        <ButtonHome text='Lugares'    imagen={iconLug}  onPress={() => navigation.navigate('Lugares')}    />
        <ButtonHome text='Capitulos'  imagen={iconCaps} onPress={() => navigation.navigate('Capitulos')}  />

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
});
import axios from 'axios';
import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import ButtonHome from "../components/ButtonHome";
import { globalStylesScreens } from "../styles/globalStylesScreens";
import { globalColors } from '../styles/globalColors';

const Pers = [
  {
    name: 'name',
    gender: 'gender',
    species: 'species',
    status: 'status',
    image: 'https://via.placeholder.com/150'
  }
]

export default function HomeScreen({ navigation, route }){

  const image = require("../assets/fondo1.png");
  const { id } = route.params;

  const [personaje, setPersonaje] = useState(Pers);

  const consulta = (urlAux) => {
    axios({ 
      "method": "GET",
      "url": urlAux
    }).then((response) => {
      // console.log(response['data']['name']);
      // console.log(response['data']['info']);

      setPersonaje(response['data']);

      // console.log(personaje)

    }).catch((error) => {
      console.log(error);
    })
  }

  const api = () => {
    var url;
    url = 'https://rickandmortyapi.com/api/character/' +id;
    consulta(url);
  }

  useEffect(() => {
    // console.log(id)
    api()
  }, [])


  return (
      
    <View style = {[ globalStylesScreens.container ]}>
      <ImageBackground 
        style={ globalStylesScreens.imgBackground }
        resizeMode= "cover"
        source= { image }
      >
        <View style = {[ styles.container_personaje, styles.container ]}>
          <Image style = {[ styles.image ]}
            source={{
              uri: personaje.image,
            }}
            
          />
          <View>
            <Text style = {[ globalColors.title, styles.title ]}>
              {personaje.name}
            </Text>
            <Text style = {[ globalColors.title, styles.data ]}>
              Genero: {personaje.gender}
            </Text>
            <Text style = {[ globalColors.title, styles.data ]}>
              Especie: {personaje.species}
            </Text>
            <Text style = {[ globalColors.title, styles.data ]}>
              Estado: {personaje.status}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  container_personaje: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  data: {
    textAlign: 'center',
    fontSize: 24,
  },
  image: {
    width: 220,
    height: 220,
  },
});
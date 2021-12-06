import axios from 'axios';
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import ListPersonajeItem from  "../components/ListPersonajeItem";
import ButtonSearch from "../components/ButtonSearch";
import { globalStylesScreens } from '../styles/globalStylesScreens';
import { globalColors } from '../styles/globalColors';

export default function PersonajeListScreen(props){

  const image = require("../assets/fondo1.png");

  const [personaje, setPersonaje] = useState('');
  const [personajes, setPersonajes] = useState(null);
  const [urlNext, setUrlNext] = useState('');
  const [urlPrev, setUrlPrev] = useState('');
  const [nroPag, setNroPag] = useState('-');


  const consulta = (urlAux) => {
    axios({ 
      "method": "GET",
      "url": urlAux
    }).then((response) => {
      // console.log(response['data']['results'][0]['name']);
      // console.log(response['data']['info']);

      setUrlNext(response['data']['info']['next']);
      setUrlPrev(response['data']['info']['prev']);


      setPersonajes(null);
      setPersonajes(response['data']['results']);
    }).catch((error) => {
      console.log(error);
    })
  }  

  const api = () => {
    var url;
    setNroPag(1);
    if (personaje === ''){
      url = 'https://rickandmortyapi.com/api/character';
    }else{
      url = 'https://rickandmortyapi.com/api/character/?name=' +personaje;
    }
    consulta(url);
  }

  const api_next = () => {
    if (urlNext !== '' && urlNext !== null){
      // console.log(urlNext);
      consulta(urlNext);
      setNroPag(parseInt(nroPag) + 1);
    }
  }
  const api_prev = () => {
    if (urlPrev !== '' && urlPrev !== null){
      // console.log(urlPrev);
      consulta(urlPrev);
      setNroPag(parseInt(nroPag) - 1);
    }
  }

  useEffect(() => {
    api()
  }, [])

  return (

    <View style = {[ globalStylesScreens.container ]}>
      <ImageBackground 
        style={ globalStylesScreens.imgBackground }
        resizeMode= "cover"
        source= { image }
      >
        <View style = {[ globalStylesScreens.container_search ]}>
          <Text style = {[ globalStylesScreens.title ]}>Filtrar por nombre:</Text>
          <TextInput 
            style= {[ globalStylesScreens.input ]}
            onChangeText={setPersonaje}
            placeholder='personaje'
          />
          <ButtonSearch text='Buscar' onPress={api} />
          <View style = {[ globalStylesScreens.container_pagBar ]}>
            <TouchableOpacity 
              style = {[ globalStylesScreens.left ]}
              onPress = { api_prev}
            >
              <Text>Anterior</Text>
            </TouchableOpacity>
            <Text style = {[ globalStylesScreens.center ]}>
              {[nroPag]}
            </Text>
            <TouchableOpacity 
              style = {[ globalStylesScreens.right ]}
              onPress = { api_next}
            >
              <Text>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
          style={[globalStylesScreens.list]}
          data={personajes}
          renderItem={({item}) => <ListPersonajeItem item={item} />}
          keyExtractor={item=>item.name}
          />
        </View>
      </ImageBackground>
    </View>

  );
}

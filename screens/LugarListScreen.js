import axios from 'axios';
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import ListLugarItem from  "../components/ListLugarItem";
import ButtonSearch from "../components/ButtonSearch";
import { globalStylesScreens } from '../styles/globalStylesScreens';
import { globalColors } from '../styles/globalColors';

export default function LugarListScreen(props){
  
  const image = require("../assets/fondo1.png");

  const [lugar, setLugar] = useState('');
  const [lugares, setLugares] = useState(null);
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


      setLugares(null);
      setLugares(response['data']['results']);
    }).catch((error) => {
      console.log(error);
    })
  }  

  const api = () => {
    var url;
    setNroPag(1);
    if (lugar === ''){
      url = 'https://rickandmortyapi.com/api/location';
    }else{
      url = 'https://rickandmortyapi.com/api/location?name=' +lugar;
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
            onChangeText={setLugar}
            placeholder='lugar'
          />
          <ButtonSearch text='buscar' onPress={api} />
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
          data={lugares}
          renderItem={({item}) => <ListLugarItem item={item} />}
          keyExtractor={item=>item.nombre}
          />
        </View>
      </ImageBackground>
    </View>

  );
}

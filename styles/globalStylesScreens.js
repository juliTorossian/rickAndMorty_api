import { StyleSheet } from "react-native";

export const globalStylesScreens = StyleSheet.create({
  container: {
    backgroundColor: '#393E46',
    flex: 1,
    paddingBottom: 10
  },
  container_search: {
    alignItems: 'center',
  },
  title: {
    color: '#E2E25A',
    fontSize: 19,
    textAlign: 'center',
    marginTop: 10,
  },
  subTitle: {
    color: '#E2E25A',
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
    marginLeft: 10,
    padding: 5,
  },
  texto:{
    margin: 10,
    padding: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
  input:{
    marginTop: 5,
    width: '70%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E2E25A',
  },
  list:{
    marginTop: 45,
  },
  container_pagBar:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  center:{
    backgroundColor: '#4F892D',
    padding: 5,
    margin: 10,
    height: 30,
    borderRadius: 5,
  },
  left:{
    backgroundColor: '#4F892D',
    padding: 5,
    margin: 10,
    height: 30,
    borderRadius: 5,
  },
  right:{
    backgroundColor: '#4F892D',
    padding: 5,
    margin: 10,
    height: 30,
    borderRadius: 5,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
})
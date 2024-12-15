import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, View,Image, TouchableOpacity, ImageBackground } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export default function FilmCard({ film }: { film: any }) {
    
    const image = {uri: film.prewiev};
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <TouchableOpacity onPress={()=>{
            navigation.navigate('Film', film)
        }} style={[styles.cardMain, { backgroundColor: film.preview }]}>
            
              <ImageBackground
                 source={image}
                 style={styles.background}
              >

              </ImageBackground>
        </TouchableOpacity >
        
    )
}
const styles = StyleSheet.create({
    cardMain:{
        width:159.18,
        height:239.07,
        backgroundColor:'gray'
    },
    background: {
        flex: 1, 
        width:'100%',
        borderRadius:10.78,
        height:'100%',
        justifyContent: 'center', 
        alignItems: 'center', 
      },
})
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
export default function FilmCard() {
    return (
        <TouchableOpacity style = {styles.cardMain} >
              <Text>Карточка фильма</Text>
        </TouchableOpacity >
        
    )
}
const styles = StyleSheet.create({
    cardMain:{
        width:120,
        height:180,
        backgroundColor:'white',
    }
})
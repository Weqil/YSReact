import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, View,Image, TouchableOpacity, Dimensions, TextInput, useWindowDimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Navigation } from '../navigator/navigator';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export default function Header( ) {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [userMenuState, changeUserMenuState] = useState(false)
  const renderHeader = () => {
    if(width >= 725){
      return(
        <View style={styles.headerMain}>
        <Image
          style = {styles.logo}
          source={require('../assets/icons/logo.jpg')}/>
        <TouchableOpacity >
            <Text onPress={()=>{
                navigation.navigate('Home')
              }} style={styles.category}>Главная</Text>
        </TouchableOpacity>
  
        <Dropdown 
          data={data}
          labelField="label"   
          style = {styles.dropdownStyle}   
          valueField="value" 
          placeholder='Категория'
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}       
        onChange={()=>{}}   
        >
        </Dropdown>
  
        <TouchableOpacity  style = {styles.inputWrapper} >
          <TextInput
            placeholder='Введите название'
            style = {styles.input}
          />
          <Button
            title='поиск'
          ></Button>
        </TouchableOpacity>
        
        <TouchableOpacity
        
        >
          <Text  onPress={()=>changeUserMenuState(!userMenuState)}
          style={styles.category}>Admin</Text>
          {renderMenuText()}
        </TouchableOpacity>
        </View>
      );
    }else{
      return null
    }

  }
  const renderMenuText = () => {
    if (userMenuState) {
      return (
        <View style = {styles.userMenu}>
              <Text onPress={()=>{
               navigation.navigate('FilmAdd')
              }}>Добавить фильм</Text>
              <Text onPress={()=>{
               navigation.navigate('CategoryAdd')
              }}>Добавить или изменить категорию</Text>
        </View>
      ) ;
    }
    return null;
  };

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  return (
    renderHeader()
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor:'#FFFFFF',
    padding:6,
    width:'100%',
    borderRadius:6,
  },
  inputWrapper: {
    width:'40%',
    gap: 8,
    flexDirection:'row',
  },
  placeholderStyle:{
    color:'#FFFFFF'
  },
  dropdownStyle:{
    width:100,
  },
  selectedTextStyle:{
       color:'#FFFFFF'
  },
  userMenu:{
    backgroundColor:'#FFFFFF',
    position:'absolute',
    padding:8,
    gap:16,
    marginTop:26,
    width:300,
  },
  inputSearchStyle: {},  
  categoryItemStyle:{
    width:200,
  },
  headerMain: {
      padding:8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap:24,
      display:'flex',
      width:'100%',
      backgroundColor: 'rgb(17 17 17)',
    },
  category: {
    color: '#FFFFFF',
    width:'auto',
    fontSize:16,
    flex:1,
  },
  logo:{
    width:32,
    height:32,
  }
});

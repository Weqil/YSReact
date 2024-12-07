import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import TapeScreen from '../views/TapeScreen';
import FilmScreen from '../views/FilmScreen';
import FilmAddScreen from '../views/FilmAdd';
import FilmEditScreen from '../views/EditFilm';
import Header from '../components/Header';
import isMobile from '../services/screen';
const RootStack = createNativeStackNavigator({
    screens: {
      Home:{
        screen:HomeScreen,
        options: {
            title: 'Главная',
            header: ({ navigation, route }) => {
              return isMobile ? <Text>Welcome back!</Text> : <Header></Header>;
            }
          },
      } ,
      Tape:TapeScreen,
      Film:FilmScreen,
      FilmAdd:FilmAddScreen, 
      Edit: FilmEditScreen
    },
  });

  
  
  export const Navigation = createStaticNavigation(RootStack);
  
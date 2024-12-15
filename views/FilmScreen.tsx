import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import Video from 'react-native-video';
import WebView from 'react-native-webview';

export default function FilmScreen() {
  const route = useRoute();
  const  film : any = route.params || {};
  const filmLink: string = "<iframe width='720' height='405' src='https://rutube.ru/play/embed/ce666dfd1109026b62e6192eaabbe586' frameborder='0' allow='clipboard-write; autoplay' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>";

  useEffect(() => {
    console.log(film);
  }, [film]); 
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <WebView
                  source={{ uri: '' }}
                  style={{ flex: 1 }}
                />

      </View>
    );
  }
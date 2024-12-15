import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Navigation } from './navigator/navigator';
import Footer from './components/Footer';


export default function App() {
  const { width, height } = useWindowDimensions();
  
  return (
  
    <SafeAreaProvider
    >
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

import React, { Component, } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  createStaticNavigation,
  NavigationContext,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import { Searchbar } from 'react-native-paper';
import FilmCard from '../components/FilmCard';


class HomeScreen extends Component {
  // Устанавливаем состояние через constructor
  constructor(props: {}) {
    super(props);
  }

  // Метод для изменения состояния searchQuery
  setSearchQuery = (query: any) => {
    this.setState({ searchQuery: query });
  };

  render() {

    return (
      <View style={styles.main}>
        <Searchbar
          style={styles.search}
          placeholder="Найти фильм"
          onChangeText={this.setSearchQuery}
          value= ""
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 16,
    paddingHorizontal: 8,
    backgroundColor: 'rgb(42 42 42)',
    height: '100%',
    overflow: 'scroll',
  },
  search: {
    borderRadius: 20,
    backgroundColor: 'rgb(255 255 255)',
    height: 50,
  },
  grid: {
    paddingTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 28,
    justifyContent: 'center',
  },
});

export default HomeScreen;

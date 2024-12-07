import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';


export default function Header() {
  const [count, setCount] = useState(0);
  return (
        <View style={styles.headerMain}>
            <Image
              style = {styles.logo}
             source={require('../assets/icons/logo.jpg')}/>
             <TouchableOpacity >
                <Text style={styles.category}>Главная</Text>
             </TouchableOpacity>
             <TouchableOpacity >
                <Text style={styles.category}>Ужасы</Text>
             </TouchableOpacity>
             <TouchableOpacity >
                <Text style={styles.category}>Фантастика</Text>
             </TouchableOpacity>
             <TouchableOpacity >
                <Text style={styles.category}>Комедия</Text>
             </TouchableOpacity>
             <TouchableOpacity >
                <Text style={styles.category}>Аниме</Text>
             </TouchableOpacity>
             <TouchableOpacity >
                <Text style={styles.category}>Ещё что то</Text>
             </TouchableOpacity>
         
            
           
        </View>
  );
}

const styles = StyleSheet.create({
headerMain: {
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    gap:12,
    display:'flex',
    width:'100%',
    overflow:'scroll',
    backgroundColor: 'rgb(17 17 17)',
  },
category: {
  color: '#FFFFFF',
  width:'auto',
  flex:1,
},
logo:{
  width:32,
  height:32,
}
});

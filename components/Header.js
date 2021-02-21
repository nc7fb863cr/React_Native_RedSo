import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { pagePaddingTop } from '../constants/Constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Red</Text>
      <Text style={styles.so}>So</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',    
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
    paddingTop: pagePaddingTop,
    paddingBottom:10,
  },
  red:{
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  so:{
    color: 'red',
    fontSize: 22,
    fontWeight: 'bold',
  }
})

export default Header;
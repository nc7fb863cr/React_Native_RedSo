import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { width } from '../constants/Constants';

export default class Tab extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity style={styles.tab} onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.tabTitle}>{this.props.title}</Text>
        </View>      
      </TouchableOpacity>
    )     
  }
}

const styles = StyleSheet.create({
  tab:{
    paddingVertical:5,
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  tabTitle:{
    color:'white',
    fontSize: 18,
  },
  selectedBar:{
    width: width / 3,
    height: 5,
    backgroundColor: 'red',
    marginTop: 5,
  },
  unselectedBar:{
    height: 5,
    marginTop: 5,
  },
  container:{
    alignItems:'center',
    justifyContent:'center',
  }
})

Tab.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
}
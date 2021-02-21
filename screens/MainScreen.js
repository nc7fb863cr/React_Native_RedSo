import React, { useRef } from 'react';
import { View, StyleSheet, Animated, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { connect } from 'react-redux';

import { Header, Tab } from '../components/Component';
import { width } from '../constants/Constants';
import Team from './Team';

const pages = ['Rangers','Elastic','Dynamo'];

const MainScreen = (props) => {
  const scrollX = new Animated.Value(0);
  const scrollPosition = Animated.divide(scrollX, 3)
 const ref = useRef(null);

  const renderTabs = () => {
    return (
      <View style={styles.tabContainer}>        
        {pages.map(( item, index ) => (
          <Tab title={item} key={item}
            onPress={() => ref.current.scrollTo({x: width * index, y: 0})}/>
        ))}
      </View>
    )
  }

  const renderScrollPosition = () => {
    const animatedStyle = {left:scrollPosition};
    return <Animated.View style={{...styles.positionPlate, ...animatedStyle}}/>    
  }

  return(
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Header/>
      {renderTabs()}
      {renderScrollPosition()}   
      <ScrollView         
        horizontal 
        pagingEnabled         
        ref={ref}        
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {nativeEvent: { contentOffset: { x: scrollX }}}],
            {useNativeDriver: false},
          )}>
          {pages.map(item => <Team key={item} data={props.state[item.toLowerCase()]} 
            team={item.toLowerCase()}/>)}
      </ScrollView>      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
  },  
  tabContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent:'space-evenly',
  },
  positionPlate:{
    height:5,
    width:width / 3,
    backgroundColor:'red',
  }
})

const mapStatetoProps = ( state ) => {
  return {
    state: state.state
  }
}

export default connect(mapStatetoProps)(MainScreen);
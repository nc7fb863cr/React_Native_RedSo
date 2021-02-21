import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { width, avatarSize } from '../constants/Constants';

const Card = ( props ) => {
  const { data } = props;
  const { id, avatar, url, type,  name, position, expertise } = data;
  let expertiseString = expertise ? expertise.join(', ') : null;
  const [bannerSize, setBannerSize] = useState({
    width: width, 
    height: 200,
    isLoaded: false,
  });

  useEffect(()=>{
    if (url){
      Image.getSize(url, (width, height) => {
        setBannerSize({width: width, height: height, isLoaded:true});
      }, (err) => {
        console.log(err);
      })
    }    
  },[])

  let bannerHeight = bannerSize.height / bannerSize.width * width;

  if (type === 'banner'){
    if (!bannerSize.isLoaded){
      return (
        <View style={styles.bannerContainer}>
         <Text style={styles.loadingText}>Loading</Text>
         <View style={styles.separator}/>
        </View>
      )
    } else {
      return (
        <View style={styles.bannerContainer}>
          <Image 
            style={{width: width, height:bannerHeight}} 
            source={{uri: url}} 
            resizeMode='contain'/>           
          <View style={styles.separator}/>
        </View>
     )
    }    
  } else if (type === 'employee'){
    return (
      <TouchableOpacity>
        <View>
          <View style={styles.container}>
            <Image style={styles.image} source={{uri: avatar}}/>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.position}>{position}</Text>
              <Text style={styles.expertise}>{expertiseString}</Text>
            </View>          
          </View>

          <View style={styles.separator}/>
        </View>
      </TouchableOpacity>
    )
  }   
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
    width: width,
  },
  bannerContainer:{
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
  },
  textContainer:{
    marginLeft: 10,
    paddingRight: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  name:{
    color: 'white',
    flex: 1,
  },
  position:{
    color: 'white',
    flex: 1,
  },
  expertise:{
    color: 'white',
    flex: 1,
  },
  separator:{
    width: width * 0.95, 
    height: 2, 
    backgroundColor:'grey',
    alignSelf:'center',
  },
  loadingText:{
    color:'white',
    fontSize: 18,
  }
})

Card.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  expertises: PropTypes.array,
  data: PropTypes.object.isRequired,
}

export default Card;
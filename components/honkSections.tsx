import React from 'react';
import { ExternalLink } from './ExternalLink';
import { Dimensions, StyleSheet, Image } from 'react-native';
import { Text, View } from './Themed';
import StoryHelios from './storyHelios';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



export function i1() {
    return (      
        <View style = {styles.img}>
            <Image source={require('../assets/images/honk/1.png')} style={{ width: screenWidth, height: screenHeight }} />
      </View>
    );
  }

  export function i2() {
    return (      
        <View style = {styles.img}>
            <Image source={require('../assets/images/honk/2.png')} style={{ width: screenWidth, height: screenHeight }} />
      </View>
    );
  }
  export function i3() {
    return (      
        <View style = {styles.img}>
            <Image source={require('../assets/images/honk/3.png')} style={{ width: screenWidth, height: screenHeight }} />
      </View>
    );
  }
  export function i4() {
    return (      
        <View style = {styles.img}>
            <Image source={require('../assets/images/honk/4.png')} style={{ width: screenWidth, height: screenHeight }} />
      </View>
    );
  }

export function s1() {
    return (      
        <View style = {styles.page}>
        <Text style={[styles.title]}>These times, so full of gasps for <Text style={{ fontFamily: 'BaskervilleItalics' }}>nothing</Text> done,{"\n"}Hide truth behind the sound of <Text style={{ fontFamily: 'BaskervilleItalics' }}>rain</Text> that roars </Text>
      </View>
    );
  }
  export function s2() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}> Above a peak hour rush. These streets, once  <Text style={{ fontFamily: 'BaskervilleItalics' }}>drenched</Text>{"\n"}And quiet, have no-one left to  <Text style={{ fontFamily: 'BaskervilleItalics' }}>stop</Text> and hear. </Text>
      </View>
    );
  }
  export function s3() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}> But I have walked the night and  <Text style={{ fontFamily: 'BaskervilleItalics' }}>braved</Text> the storm {"\n"}To find desertion midst these city  <Text style={{ fontFamily: 'BaskervilleItalics' }}>lights</Text>.  </Text>
      </View>
    );
  }
  export function s4() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>So I have heard the voice of God  <Text style={{ fontFamily: 'BaskervilleItalics' }}>entrapped</Text>{"\n"}Beneath one  <Text style={{ fontFamily: 'BaskervilleItalics' }}>wayward</Text> honk in search of home. </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        position: 'absolute',
        width: 312,
        height: 229,
        left: (screenWidth) / 8,
        top: (screenHeight)*2.3/6,
        fontFamily: 'Baskerville',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 32,
        lineHeight: 32,
        color: '#000000',
    
      },
    page: {
      height: screenHeight + 10, // Set appropriate height
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    img: {
        zIndex: 10, // Make sure it stacks above the scroll content
    }
  });
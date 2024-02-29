import React from 'react';
import { ExternalLink } from './ExternalLink';
import { Dimensions, StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import StoryHelios from './storyHelios';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export function s1() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>These times, so full of gasps for <Text style={{ fontStyle: 'italic' }}>nothing</Text> done,{"\n"}Hide truth behind the sound of <Text style={{ fontStyle: 'italic' }}>rain</Text> that roars </Text>
      </View>
    );
  }
  export function s2() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}> Above a peak hour rush. These streets, once <Text style={{ fontStyle: 'italic' }}>drenched</Text>{"\n"}And quiet, have no-one left to <Text style={{ fontStyle: 'italic' }}>stop</Text> and hear. </Text>
      </View>
    );
  }
  export function s3() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}> But I have walked the night and <Text style={{ fontStyle: 'italic' }}>braved</Text> the storm {"\n"}To find desertion midst these city <Text style={{ fontStyle: 'italic' }}>lights</Text>.  </Text>
      </View>
    );
  }
  export function s4() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>So I have heard the voice of God <Text style={{ fontStyle: 'italic' }}>entrapped</Text>{"\n"}Beneath one <Text style={{ fontStyle: 'italic' }}>wayward</Text> honk in search of home. </Text>
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
      height: screenHeight + 20, // Set appropriate height
      // justifyContent: 'center',
      // alignItems: 'center',
    },
  });
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function StoryHelios({ text }: { text: string }) {
  return (      
  <View>
    <View style = {styles.container}>
      <View style={styles.heliosLogo}></View>
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container : {
    alignItems: 'center',
  },
  heliosLogo: {
    position: 'absolute',
    width: 50,
    alignItems: 'center',
    height: 50,
    borderRadius: 50,
    transform: [{scaleY:1.6}],
    top: (screenHeight) / 6,
    // left: screenWidth/2,

    backgroundColor: '#FFB800',
  },
});

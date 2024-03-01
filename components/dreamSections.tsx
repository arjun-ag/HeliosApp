import React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';
import { Text, View } from './Themed';
import StoryHelios from './storyHelios';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function i1() {
    return (      
        <View style = {styles.img}>
            <Image source={require('../assets/images/dream/1.png')} style={{ width: screenWidth, height: screenHeight }} />
      </View>
    );
  }

  export function i2() {
    return (      
        <View style = {styles.img}>
            <Image source={require('../assets/images/dream/2.png')} style={{ width: screenWidth, height: screenHeight }} />
      </View>
    );
  }
  export function i3() {
    return (      
        <View style = {styles.img}>
            <Image source={require('../assets/images/dream/3.png')} style={{ width: screenWidth, height: screenHeight }} />
      </View>
    );
  }

export function s1() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>I turned twenty-one this year. I remember sitting in the park, on a summer afternoon, when the  <Text style={{ fontFamily: 'BaskervilleItalics' }}>sun</Text> first passes through the  <Text style={{ fontFamily: 'BaskervilleItalics' }}>clouds</Text>, then a </Text>
      </View>
    );
  }
  export function s2() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}> canopy of trees, before it  <Text style={{ fontFamily: 'BaskervilleItalics' }}>gleams</Text> on your cheek, reading Yeats’ ‘The Second Coming’.</Text>
      </View>
    );
  }
  export function s3() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}> It felt too idyllic a day to be engulfed by any blood-dimmed  <Text style={{ fontFamily: 'BaskervilleItalics' }}>tide</Text> of anarchy. </Text>
      </View>
    );
  }
  export function s4() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>Yet somehow, I believe, I understood then for the first time what it meant to forsake one’s innocence – a warm  <Text style={{ fontFamily: 'BaskervilleItalics' }}>glint</Text> in the eyes that fades suddenly into stony silence. </Text>
      </View>
    );
  }
  export function s5() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>Our world has a way of manifesting the unexpected, of dangling our hopes and dreams by a most fragile thread of trust. Sometimes the thread  <Text style={{ fontFamily: 'BaskervilleItalics' }}>snaps</Text>. </Text>
      </View>
    );
  }
  export function s6() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>Sometimes we are  <Text style={{ fontFamily: 'BaskervilleItalics' }}>broken</Text>. Yeats, however, goes still further. His emanation of the deity is not a kind and kindred spirit, but a great and 
</Text>
      </View>
    );
  }
  export function s7() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>terrible beast with a “gaze as blank and pitiless as the sun” - that naked moonscape of the Northern Himalayas on a cloudless desert  <Text style={{ fontFamily: 'BaskervilleItalics' }}>night</Text> – </Text>
      </View>
    );
  }
  export function s8() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>stark and wide and forceful and </Text>
      </View>
    );
  }
  export function s9() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}> <Text style={{ fontFamily: 'BaskervilleItalics' }}>detached</Text></Text>
      </View>
    );
  }
  export function s10() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>I saw, only a few nights ago, an old and grizzly man  <Text style={{ fontFamily: 'BaskervilleItalics' }}>reclined</Text> against a lonely lamppost with a saxophone. He was free. Lilting to the contours of a musical  <Text style={{ fontFamily: 'BaskervilleItalics' }}>dream</Text>. </Text>
      </View>
    );
  }
  export function s11() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>He played all night, sometimes  <Text style={{ fontFamily: 'BaskervilleItalics' }}>fiercely</Text> over the blaring honks of cars with drunken men and women rushing home, sometimes alone. </Text>
      </View>
    );
  }
  export function s12() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>I sat there by the lamppost for a while, looking sometimes at him, sometimes at the orangish glow from thin  <Text style={{ fontFamily: 'BaskervilleItalics' }}>wisps</Text> of clouds against the  <Text style={{ fontFamily: 'BaskervilleItalics' }}>moon</Text>. </Text>
      </View>
    );
  }
  export function s13() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>Perhaps our times demand the insistence of a solitary voice if it is to be heard. Or they demand our strength of character – our  <Text style={{ fontFamily: 'BaskervilleItalics' }}>obstinance</Text> upon an ideal. </Text>
      </View>
    );
  }
  export function s14() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>Or they demand nothing at all. But I would like to find some remnants of that  <Text style={{ fontFamily: 'BaskervilleItalics' }}>slouching</Text> beast, that glorious deity, in my  <Text style={{ fontFamily: 'BaskervilleItalics' }}>soul</Text> – </Text>
      </View>
    );
  }
  export function s15() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>so I can plant my feet firmly enough to take an  <Text style={{ fontFamily: 'BaskervilleItalics' }}>unrelenting</Text>  stand for something  <Text style={{ fontFamily: 'BaskervilleItalics' }}>good</Text> . </Text>
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
      alignItems: "center"
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    img: {
        zIndex:2
    }
  });
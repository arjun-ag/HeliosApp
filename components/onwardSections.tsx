import React from 'react';
import { ExternalLink } from './ExternalLink';
import { Dimensions, StyleSheet, Image} from 'react-native';
import { Text, View } from './Themed';
import StoryHelios from './storyHelios';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function i1() {
    return (      
        <View style = {styles.img}>
            <Image source={require('../assets/images/onward/1.png')} style={{ width: screenWidth, height: screenHeight }} />
      </View>
    );
  }

  export function i2() {
    return (      
        <View style = {styles.img}>
            <Image source={require('../assets/images/onward/2.png')} style={{ width: screenWidth, height: screenHeight }} />
      </View>
    );
  }
  export function i3() {
    return (      
        <View style = {styles.img}>
            <Image source={require('../assets/images/onward/3.png')} style={{ width: screenWidth, height: screenHeight }} />
      </View>
    );
  }
  export function i4() {
    return (      
        <View style = {styles.img}>
            <Image source={require('../assets/images/onward/4.png')} style={{ width: screenWidth, height: screenHeight }} />
      </View>
    );
  }

export function s1() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>I waited and  <Text style={{ fontFamily: 'BaskervilleItalics' }}>waited</Text> by Fortieth and Sixth, and soon it began to snow.</Text>
      </View>
    );
  }
  export function s2() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>I have never seen that part of town as hopelessly empty as it was on this night in early February. </Text>
      </View>
    );
  }
  export function s3() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>The winds grew; the dead and empty branches of trees  <Text style={{ fontFamily: 'BaskervilleItalics' }}>snapped</Text> in half and fell into the muck of soiled snow and slush on the streets.</Text>
      </View>
    );
  }
  export function s4() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>It was, no doubt, foolish to have stayed waiting there as long as I did. I knew that. But I want no guilt for  <Text style={{ fontFamily: 'BaskervilleItalics' }}>lack</Text> of trying. </Text>
      </View>
    );
  }
  export function s5() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>Black cars with glaring  <Text style={{ fontFamily: 'BaskervilleItalics' }}>red</Text> backlights rushed into the night every few minutes. </Text>
      </View>
    );
  }
  export function s6() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>The cops stayed in their vans on patrol, with blaring blue and orange sirens glinting falling  <Text style={{ fontFamily: 'BaskervilleItalics' }}>snowflakes</Text> like a dream.</Text>
      </View>
    );
  }
  export function s7() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}> It was a certain impersonality of the hour that made the cold more bearable.</Text>
      </View>
    );
  }
  export function s8() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}> I stood,  <Text style={{ fontFamily: 'BaskervilleItalics' }}>leaning</Text> against a wall, staring blankly at some shimmers in the darkness, playing my part. </Text>
      </View>
    );
  }
  export function s9() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>I remember my screenwriting professor, a most charming man who reminds me eerily of Julian Morrow from ‘The Secret History’, told me once that </Text>
      </View>
    );
  }
  export function s10() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}> <Text style={{ fontFamily: 'BaskervilleItalics' }}>lurking</Text> beneath the surface of my words, he sensed a dormant and terrible hero churning the motors onward. </Text>
      </View>
    );
  }
  export function s11() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>So, I decided to lay the matter before you, quite early on, to tell you he was  <Text style={{ fontFamily: 'BaskervilleItalics' }}>wrong</Text>. </Text>
      </View>
    );
  }
  export function s12() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>There are no daemons hiding  <Text style={{ fontFamily: 'BaskervilleItalics' }}>behind</Text> the veneer of these words. </Text>
      </View>
    );
  }
  export function s13() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>Only the words themselves are; and so, by extension, am I, their writer.</Text>
      </View>
    );
  }
  export function s14() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}> I have been misunderstood as a romantic, and on the worst days, as delusional, too much to allow you to do the same.</Text>
      </View>
    );
  }
  export function s15() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>A little more than an hour later, when the police van, presumably, had found another neighbourhood to cast its lighthouse-like beacons of orange and teal,</Text>
      </View>
    );
  }
  export function s16() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}> I concluded that I had, of course, been stood up. 
</Text>
      </View>
    );
  }
  export function s17() {
    return (      
        <View style = {styles.page}>
         
        <Text style={[styles.title]}>I unhinged myself from the little ledge my elbows rested on and waded  <Text style={{ fontFamily: 'BaskervilleItalics' }}>home</Text> in the blizzard</Text>
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
    img:{
        zIndex:4
    }
  });
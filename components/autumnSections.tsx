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
        <Text style={[styles.title]}>Today, I biked across Manhattan. Slowly, the sun set on the horizon, and I looked west from Forty-First and Sixth Avenue to watch the sky turn <Text style={{ fontStyle: 'italic' }}>red</Text></Text>
      </View>
    );
  }
  export function s2() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}> In the distance, birds <Text style={{ fontStyle: 'italic' }}>circled</Text> above the water and joined their friends in going home. </Text>
      </View>
    );
  }
  export function s3() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>An old lady with one of those walkers that have breaks and handles waited patiently behind me all the <Text style={{ fontStyle: 'italic' }}>while</Text>. </Text>
      </View>
    );
  }
  export function s4() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>The crowds walked swiftly around us. I realised after a minute and turned around to apologise. She was as tall as my mother and as thin as her too. </Text>
      </View>
    );
  }
  export function s5() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>“I’m so sorry”.</Text>
      </View>
    );
  }
  export function s6() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>“I couldn’t help looking myself,” she sighed, and <Text style={{ fontStyle: 'italic' }}>parked</Text> her stroller where we were standing.</Text>
      </View>
    );
  }
  export function s7() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>A <Text style={{ fontStyle: 'italic' }}>blinking</Text> stop sign… a row of cars with executives from the corporate offices nearby waiting to go home, or the club, </Text>
      </View>
    );
  }
  export function s8() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>or wherever else such people go when they are not at <Text style={{ fontStyle: 'italic' }}>work</Text>.</Text>
      </View>
    );
  }
  export function s9() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>“We should cross over now.” </Text>
      </View>
    );
  }
  export function s10() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>“You go on, I’ll be right behind you”, she said, still looking westward. </Text>
      </View>
    );
  }
  export function s11() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>Their engines revved. A few more moments the blinking stop persisted. I asked her again. 
“It’s a little dangerous here.” </Text>
      </View>
    );
  }
  export function s12() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>“I’m so glad it’s summer.” </Text>
      </View>
    );
  }
  export function s13() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>The light turned green. And all the cars nudged at each other to move. Then one honked, then another. </Text>
      </View>
    );
  }
  export function s14() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>“Too bad we’re past summer solstice,” she shrugged, “it’s only downhill from here.” </Text>
      </View>
    );
  }
  export function s15() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>I stared at her for a moment, then to the reddish sun <Text style={{ fontStyle: 'italic' }}>sinking</Text> behind a bridge.</Text>
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
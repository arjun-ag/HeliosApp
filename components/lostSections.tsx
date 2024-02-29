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
        <Text style={[styles.title]}>I stood there on the pavement by the bookstore, lost in myself. Around, the great city <Text style={{ fontStyle: 'italic' }}>swirled</Text> - and people marched about with <Text style={{ fontStyle: 'italic' }}>blatant</Text> purpose. </Text>
      </View>
    );
  }
  export function s2() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>My eyes were fixed upon the <Text style={{ fontStyle: 'italic' }}>distance</Text>, so far away I could not make out what I was looking at - only that it was important not to turn away my gaze. </Text>
      </View>
    );
  }
  export function s3() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>And from the streets, the musty smells of passers-by and little food carts wafted upwards between squarely built skyscrapers to reach <Text style={{ fontStyle: 'italic' }}>flattened</Text> clouds that <Text style={{ fontStyle: 'italic' }}>weaved</Text> about the sun.</Text>
      </View>
    );
  }
  export function s4() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}> I let myself be washed away by the crowds, and realised only a half-hour later that I was <Text style={{ fontStyle: 'italic' }}>wafting</Text> towards the waterfront.  </Text>
      </View>
    );
  }
  export function s5() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>On the grass, by the outdoor gym where I had seen an old man doing pull-ups on a bar with short, unsteady, gasps for breath,</Text>
      </View>
    );
  }
  export function s6() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}> I saw a little girl roaming along the bushes looking for something. </Text>
      </View>
    );
  }
  export function s7() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}> It was a certain impersonality of the hour that made the cold more bearable.</Text>
      </View>
    );
  }
  export function s8() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}> I stood, <Text style={{ fontStyle: 'italic' }}>leaning</Text> against a wall, staring blankly at some shimmers in the darkness, playing my part. </Text>
      </View>
    );
  }
  export function s9() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>I remember my screenwriting professor, a most charming man who reminds me eerily of Julian Morrow from ‘The Secret History’, told me once that </Text>
      </View>
    );
  }
  export function s10() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}><Text style={{ fontStyle: 'italic' }}>lurking</Text> beneath the surface of my words, he sensed a dormant and terrible hero churning the motors onward. </Text>
      </View>
    );
  }
  export function s11() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>So, I decided to lay the matter before you, quite early on, to tell you he was <Text style={{ fontStyle: 'italic' }}>wrong</Text>. </Text>
      </View>
    );
  }
  export function s12() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>There are no daemons hiding <Text style={{ fontStyle: 'italic' }}>behind</Text> the veneer of these words. </Text>
      </View>
    );
  }
  export function s13() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>Only the words themselves are; and so, by extension, am I, their writer.</Text>
      </View>
    );
  }
  export function s14() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}> I have been misunderstood as a romantic, and on the worst days, as delusional, too much to allow you to do the same.</Text>
      </View>
    );
  }
  export function s15() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>A little more than an hour later, when the police van, presumably, had found another neighbourhood to cast its lighthouse-like beacons of orange and teal,</Text>
      </View>
    );
  }
  export function s16() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}> I concluded that I had, of course, been stood up. 
</Text>
      </View>
    );
  }
  export function s17() {
    return (      
        <View style = {styles.page}>
        <StoryHelios text="index" />
        <Text style={[styles.title]}>I unhinged myself from the little ledge my elbows rested on and waded <Text style={{ fontStyle: 'italic' }}>home</Text> in the blizzard</Text>
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
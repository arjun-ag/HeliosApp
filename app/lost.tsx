import { StyleSheet, Dimensions, ScrollView, 
  NativeSyntheticEvent, NativeScrollEvent, Animated } from 'react-native';
import { useState, useEffect } from 'react';
import StoryHelios from '@/components/storyHelios';
import Logo from '@/components/logo'
import { Text, View } from '@/components/Themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as sections from '../components/lostSections';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
interface AnimatedSectionProps {
  isActive: boolean;
  children: React.ReactNode;
}


const SectionOne = () => (
  <View style = {styles.page}>
    <StoryHelios text="index" />
    </View>
);

const SectionTwo = () => (
  <View style = {styles.page}>
      <Logo path = 'sbs'></Logo>
    </View>
);


type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const LostScreen:React.FC<Props> = ({ navigation }) => {

  const [activeSection, setActiveSection] = useState(0);
  const transitionAnimation = new Animated.Value(0);

  const handleScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    // Determine the active section based on the scrollPosition
    // For example, if each section is 500 pixels tall:
    const currentSection = Math.floor(scrollPosition / screenHeight);
    setActiveSection(currentSection);
  };
  
  const AnimatedSection: React.FC<AnimatedSectionProps> = ({ isActive, children}) => {
    // Define your animation based on isActive
    // Example: Fade-in animation
    const opacity = new Animated.Value(isActive ? 1 : 0);
  
    useEffect(() => {
      Animated.timing(opacity, {
        toValue: isActive ? 1 : 0.5,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }, [isActive]);
  
    return (
      <Animated.View style={{ opacity }}>
        {children}
      </Animated.View>
    );
  };

  return (
    <ScrollView style={styles.container} onScroll={handleScroll} scrollEventThrottle={16} >
        <AnimatedSection isActive={activeSection === 0}>
        <sections.s1 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s2 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 2}>
          <sections.s3 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 3}>
          <sections.s4 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 4}>
          <sections.s5 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 5}>
          <sections.s6 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 6}>
          <sections.s7 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 7}>
          <sections.s8 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 8}>
          <sections.s9 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 9}>
          <sections.s10 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 10}>
          <sections.s11 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 11}>
          <sections.s12 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 12}>
          <sections.s13 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 13}>
          <sections.s14 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s15 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s16 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s17 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s18 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s19 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s20 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s21 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s15 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s22 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s23 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s24 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s25 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s26 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s27 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s28 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s29 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s30 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s31 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s32 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s33 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s34 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s35 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s36 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s37 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s38 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s39 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s40 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s41 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 14}>
          <sections.s42 />
        </AnimatedSection>
      <AnimatedSection isActive={activeSection === 14}>
      <sections.s43 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s44 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s45 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s46 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s47 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s48 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s49 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s50 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s51 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s52 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s53 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s54 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s55 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s56 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s57 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s58 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s59 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s60 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s61 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s62 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s63 />
    </AnimatedSection>
    <AnimatedSection isActive={activeSection === 14}>
      <sections.s64 />
    </AnimatedSection>
  </ScrollView> 
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  page: {
    height: screenHeight + 20, // Set appropriate height
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default LostScreen;
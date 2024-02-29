import { StyleSheet, Dimensions, ScrollView, 
    NativeSyntheticEvent, NativeScrollEvent, Animated } from 'react-native';
  import { useState, useEffect } from 'react';
  import StoryHelios from '@/components/storyHelios';
  import Logo from '@/components/logo'
  import { Text, View } from '@/components/Themed';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import * as sections from '../components/autumnSections';
  
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  interface AnimatedSectionProps {
    isActive: boolean;
    children: React.ReactNode;
  }
  
  type Props = {
    navigation: NativeStackNavigationProp<any>;
  };
  
  const AutumnScreen:React.FC<Props> = ({ navigation }) => {
  
    const [activeSection, setActiveSection] = useState(0);
    const transitionAnimation = new Animated.Value(0);
  
    const handleScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      const currentSection = Math.floor(scrollPosition / screenHeight);
      setActiveSection(currentSection);
    };
    
    const AnimatedSection: React.FC<AnimatedSectionProps> = ({ isActive, children}) => {
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
  
export default AutumnScreen;
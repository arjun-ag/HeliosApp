import { StyleSheet, Dimensions, ScrollView, 
    NativeSyntheticEvent, NativeScrollEvent, Animated } from 'react-native';
  import { useState, useEffect } from 'react';
  import StoryHelios from '@/components/storyHelios';
  import Logo from '@/components/logo'
  import { Text, View } from '@/components/Themed';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import * as sections from '../components/onwardSections';

  
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
  
  const OnwardScreen:React.FC<Props> = ({ navigation }) => {
  
    const [activeSection, setActiveSection] = useState(0);
    const transitionAnimation = new Animated.Value(0);
  
    // const startTransition = () => {
    //   Animated.timing(transitionAnimation, {
    //     toValue: 1,
    //     duration: 1000,
    //     useNativeDriver: true,
    //   }).start(() => setTransitionComplete(true)); // Update state after animation completes
    // };
    
    // const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    //   const scrollPosition = event.nativeEvent.contentOffset.y;
    //   const transitionPoint = 0;
    //   if (scrollPosition >= transitionPoint) {
    //     startTransition();
    //   }
    // };
  
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
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s3 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s4 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s5 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s6 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s7 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s8 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s9 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s10 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s11 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s12 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s13 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s14 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s15 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s16 />
        </AnimatedSection>
        <AnimatedSection isActive={activeSection === 1}>
          <sections.s17 />
        </AnimatedSection>
        
        
  
        {/* <Text style={styles.container}>{transitionComplete}</Text> */}
        
        
        {/* <View style = {styles.page}>
          <StoryHelios path="app/(tabs)/index.tsx" />
        </View>
        <View style = {styles.page}>
          <StoryHelios path="app/(tabs)/index.tsx" />
        </View>
        <View style = {styles.page}>
          <StoryHelios path="app/(tabs)/index.tsx" />
        </View> */}
  
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
  
export default OnwardScreen;
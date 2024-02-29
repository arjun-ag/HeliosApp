import { StyleSheet, Dimensions, ScrollView, 
    NativeSyntheticEvent, NativeScrollEvent, Animated } from 'react-native';
  import { useState, useEffect, useRef } from 'react';
  import StoryHelios from '@/components/storyHelios';
  import Logo from '@/components/logo'
  import { Text, View } from '@/components/Themed';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import * as sections from '../components/honkSections';

  
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  interface AnimatedSectionProps {
    isActive: boolean;
    children: React.ReactNode;
  }
  
  type Props = {
    navigation: NativeStackNavigationProp<any>;
  };
  
  const HonkScreen:React.FC<Props> = ({ navigation }) => {
  
    const [activeSection, setActiveSection] = useState(0);
    // const transitionAnimation = new Animated.Value(0);
    // const scrollY = useRef(new Animated.Value(0)).current;
    // const rotateX = scrollY.interpolate({
    //     inputRange: [0, screenHeight],
    //     outputRange: ['0deg', '360deg'], 
    // });
  
    const handleScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      // Determine the active section based on the scrollPosition
      // For example, if each section is 500 pixels tall:
      const currentSection = Math.floor(scrollPosition / screenHeight);
      setActiveSection(currentSection);
    };
    
    // const AnimatedSection: React.FC<AnimatedSectionProps> = ({ isActive, children}) => {
    //   // Define your animation based on isActive
    //   // Example: Fade-in animation
    //   const opacity = new Animated.Value(isActive ? 1 : 0);
    
    //   useEffect(() => {
    //     Animated.timing(opacity, {
    //       toValue: isActive ? 1 : 0.5,
    //       duration: 2000,
    //       useNativeDriver: true,
    //     }).start();
    //   }, [isActive]);
    
    //   return (
    //     <Animated.View style={{ opacity }}>
    //       {children}
    //     </Animated.View>
    //   );
    // };

    const AnimatedSection: React.FC<AnimatedSectionProps> = ({ isActive, children }) => {
        const animatedValue = useRef(new Animated.Value(0)).current;
      
        useEffect(() => {
          Animated.timing(animatedValue, {
            toValue: isActive ? 1 : 0,
            duration: 2000,
            useNativeDriver: true,
          }).start();
        }, [isActive, animatedValue]);
      
        const opacity = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        });
      
        const rotateX = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'], // Simulate dice roll along X axis
        });
      
        // const rotateY = animatedValue.interpolate({
        //   inputRange: [0, 1],
        //   outputRange: ['0deg', '360deg'], // Simulate dice roll along Y axis
        // });
      
        return (
          <Animated.View style={{ opacity, transform: [{ rotateX }] }}>
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
  
export default HonkScreen;
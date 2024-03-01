import { StyleSheet, Dimensions, ScrollView, 
  NativeSyntheticEvent, NativeScrollEvent, TouchableWithoutFeedback } from 'react-native';
import { useState, useEffect } from 'react';
import StoryHelios from '@/components/storyHelios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View } from '@/components/Themed';
import Animated, {useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate} from 'react-native-reanimated';
import * as sections from '../components/lostSections';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const elements = [
  <sections.i1/>,<sections.s1 />,<sections.s2 />,<sections.s3 />,<sections.s4 />,<sections.s5 />,<sections.s6 />,<sections.i2/>,<sections.s7 />,<sections.s8 />,<sections.s9 />,<sections.s10 />,<sections.s11 />,<sections.s12 />,<sections.i3/>,<sections.s13 />,<sections.s14 />,<sections.s15 />,
  <sections.s16 />,<sections.s17 />,<sections.s18 />,<sections.i4/>,<sections.s19 />,<sections.s20 />,<sections.s21 />,<sections.s22 />,<sections.s23 />,<sections.s24 />,<sections.i5/>,<sections.s25 />,<sections.s26 />,<sections.s27 />,<sections.s28 />,<sections.s29 />,<sections.s30 />,<sections.i6/>,
  <sections.s31 />,<sections.s32 />,<sections.s33 />,<sections.s34 />,<sections.s35 />,<sections.s36 />,<sections.i7/>,<sections.s37 />,<sections.s38 />,<sections.s39 />,<sections.s40 />,<sections.s41 />,<sections.s42 />,<sections.i3/>,
  <sections.s43 />,<sections.s44 />,<sections.s45 />,<sections.s46 />,<sections.s47 />,<sections.s48 />,<sections.i1/>, <sections.s49 />,<sections.s50 />,<sections.s51 />,<sections.s52 />,<sections.s53 />,<sections.s54 />,<sections.i5/>, <sections.s55 />,
  <sections.s56 />,<sections.s57 />,<sections.s58 />,<sections.s59 />,<sections.s60 />,<sections.i4/>, <sections.s61 />,<sections.s62 />
];

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const LostScreen:React.FC<Props> = ({ navigation }) => {

  const scrollY = useSharedValue(0);
  const logoStyle = useAnimatedStyle(() => {
    const shouldBeVisible = !(
      (scrollY.value > 0 && scrollY.value < screenHeight) ||
      (scrollY.value > 7 * screenHeight && scrollY.value < 8 * screenHeight) ||
      (scrollY.value > 14 * screenHeight && scrollY.value < 15 * screenHeight) ||
      (scrollY.value > 21 * screenHeight && scrollY.value < 22 * screenHeight) ||
      (scrollY.value > 28 * screenHeight && scrollY.value < 29 * screenHeight) ||
      (scrollY.value > 35 * screenHeight && scrollY.value < 36 * screenHeight) ||
      (scrollY.value > 42 * screenHeight && scrollY.value < 43 * screenHeight) ||
      (scrollY.value > 49 * screenHeight && scrollY.value < 50 * screenHeight) ||
      (scrollY.value > 56 * screenHeight && scrollY.value < 57 * screenHeight) ||
      (scrollY.value > 63 * screenHeight && scrollY.value < 64 * screenHeight) ||
      (scrollY.value > 70 * screenHeight && scrollY.value < 71 * screenHeight) ||
      (scrollY.value > 77 * screenHeight && scrollY.value < 78 * screenHeight)
    );

    return {
      opacity: shouldBeVisible ? 1 : 0,
    };
  });

  const scrollHandlerY = useAnimatedScrollHandler({
      onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
      },
  });

  return (
      <View style = {styles.container}>
  
      <Animated.ScrollView onScroll={scrollHandlerY} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>  
      {elements.map((Element, index) => {
      const animatedStyle = useAnimatedStyle(() => {
        return {
          opacity: interpolate(
            scrollY.value,
            [
              screenHeight * index - screenHeight*0.7,
              screenHeight * index,
              screenHeight * index + screenHeight*0.2,
            ],
            [0, 1, 0]
          ),
        };
      });
              return (
              <Animated.View key={index} style={index % 7 === 0 ? null:animatedStyle}>
                  {Element}
              </Animated.View>
              );
          })}
        </Animated.ScrollView> 
        <TouchableWithoutFeedback onPress={() => navigation.navigate('nav')}>
          <Animated.View style = {[styles.heliosLogo, logoStyle]}>
            <View/>
          </Animated.View>
          </TouchableWithoutFeedback>
  
        </View>     
    
      );    
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  page: {
    height: screenHeight + 20, // Set appropriate height
  },
  heliosLogo: {
    position: 'absolute',
    width: 34,
    alignItems: 'center',
    height: 35,
    zIndex: 0, 
    borderRadius: 40,
    transform: [{scaleY:1.4}],
    top: (screenHeight) / 6,
    left: screenWidth/2.3,

    backgroundColor: '#EC7318',
    },
});

export default LostScreen;
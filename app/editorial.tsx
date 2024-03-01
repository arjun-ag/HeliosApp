import { StyleSheet, Dimensions, ScrollView, 
    NativeSyntheticEvent, NativeScrollEvent, TouchableWithoutFeedback } from 'react-native';
  import { useState, useEffect } from 'react';
  import StoryHelios from '@/components/storyHelios';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import { Text, View } from '@/components/Themed';
  import Animated, {useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate} from 'react-native-reanimated';
  import * as sections from '../components/editorialSections';
  
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const elements = [
    <sections.i7/>,<sections.s1 />,<sections.s2 />,<sections.s3 />,<sections.s4 />,<sections.s5 />,<sections.s6 />,<sections.i1/>,<sections.s7 />,<sections.s8 />,<sections.s9 />,<sections.s10 />,<sections.s11 />,<sections.s12 />,<sections.s13 />,<sections.i2/>,<sections.s14 />,<sections.s15 />,
    <sections.s16 />,<sections.s17 />,<sections.s18 />,<sections.s19 />,<sections.i3/>,<sections.s20 />,<sections.s21 />,<sections.s22 />,<sections.s23 />,<sections.s24 />,<sections.s25 />,<sections.i4/>,<sections.s26 />,<sections.s27 />,<sections.s28 />,<sections.s29 />,<sections.s30 />,
    <sections.s31 />,<sections.i5/>,<sections.s32 />,<sections.s33 />,<sections.s34 />,<sections.s35 />,<sections.s36 />,,<sections.s37 />,<sections.i6/>,<sections.s38 />,<sections.s39 />,<sections.s40 />,<sections.s41 />,<sections.s42 />,
  ];
  
  type Props = {
    navigation: NativeStackNavigationProp<any>;
  };
  
  const EditorialScreen:React.FC<Props> = ({ navigation }) => {
  
    const scrollY = useSharedValue(0);

    const scrollHandlerY = useAnimatedScrollHandler({
        onScroll: (event) => {
        scrollY.value = event.contentOffset.y;
        },
    });
    const logoStyle = useAnimatedStyle(() => {
        const shouldBeVisible = !(
          (scrollY.value > 0 && scrollY.value < screenHeight) ||
          (scrollY.value > 5 * screenHeight && scrollY.value < 6 * screenHeight) ||
          (scrollY.value > 10 * screenHeight && scrollY.value < 11 * screenHeight)
        );
    
        return {
          opacity: shouldBeVisible ? 1 : 0,
        };
      });
  
    return (
        <View>
    
        <Animated.ScrollView onScroll={scrollHandlerY} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>  
        {elements.map((Element, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          return {
            opacity: interpolate(
              scrollY.value,
              [
                screenHeight * index - screenHeight*0.7,
                screenHeight * index,
                screenHeight * index + screenHeight*0.1,
              ],
              [0, 1, 0]
            ),
          };
        });
                return (
                <Animated.View key={index} style={ index%7 === 0? null:animatedStyle}>
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
    heliosLogo: {
        position: 'absolute',
        width: 50,
        alignItems: 'center',
        height: 50,
        zIndex: 1, // Make sure it stacks above the scroll content
        borderRadius: 50,
        transform: [{scaleY:1.6}],
        top: (screenHeight) / 6,
        left: screenWidth/2.3,
    
        backgroundColor: '#EC7318',
      },
  });
  
export default EditorialScreen;
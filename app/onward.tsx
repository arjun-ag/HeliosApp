import { StyleSheet, Dimensions, ScrollView, 
    NativeSyntheticEvent, NativeScrollEvent, TouchableWithoutFeedback} from 'react-native';
  import StoryHelios from '@/components/storyHelios';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import { Text, View } from '@/components/Themed';
  import Animated, {useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate} from 'react-native-reanimated';
  import * as sections from '../components/onwardSections';
import { useEffect, useState } from 'react';
  
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const elements = [
    <sections.i1/>,<sections.s1 />,<sections.s2 />,<sections.s3 />,<sections.s4 />,<sections.i2/>,<sections.s5 />,<sections.s6 />,<sections.s7 />,<sections.s8 />,,<sections.i3/>,<sections.s9 />,<sections.s10 />,<sections.s11 />,<sections.s12 />,<sections.i3/>,<sections.s13 />,<sections.s14 />,<sections.s15 />,
    <sections.s16 />,<sections.i4/>,<sections.s17 />
  ];
  
  type Props = {
    navigation: NativeStackNavigationProp<any>;
  };
  
  const OnwardScreen:React.FC<Props> = ({ navigation }) => {
  
    const scrollY = useSharedValue(0);
    // const [isVisible, setIsVisible] = useState(true);



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
                screenHeight * index + screenHeight*0.3,
              ],
              [0, 1, 0]
            ),
          };
        });
                return (
                <Animated.View key={index} style={index % 5 === 0? null:animatedStyle}>
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
  
export default OnwardScreen;
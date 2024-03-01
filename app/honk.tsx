import { StyleSheet, Dimensions, ScrollView, 
    NativeSyntheticEvent, NativeScrollEvent, Image, TouchableWithoutFeedback, Animated} from 'react-native';
  import { Text, View } from '@/components/Themed';
  import {useRef} from 'react';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import * as sections from '../components/honkSections';
  
  
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },

    page: {
      height: screenHeight + 20, 
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
      img: {
        zIndex : 10
      }
  });

const elements = [
    <sections.s1 />,
    <sections.i1 />,
    <sections.s2 />,
    <sections.i2 />,
    <sections.s3 />,
    <sections.i3 />,
    <sections.s4 />,
    <sections.i4 />
  ];

  
  type Props = {
    navigation: NativeStackNavigationProp<any>;
  };
  
  const HonkScreen:React.FC<Props> = ({ navigation }) => {
    const scrollY = useRef(new Animated.Value(0)).current;
    let isVisible = true;
    const scrollHandlerY = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        // Update the scrollY value
        scrollY.setValue(event.nativeEvent.contentOffset.y);
      };

      const fadeInStartFactor = 0.1;  // Start fading earlier
      const fadeInEndFactor = 0.9;    // End fading later
    
      const logoOpacity = scrollY.interpolate({
        inputRange: elements.flatMap((_, idx) => [
          screenHeight * (idx - fadeInStartFactor),
          screenHeight * idx,
          screenHeight * (idx + fadeInEndFactor),
        ]),
        outputRange: elements.flatMap((_, idx) => [
          idx % 2 === 0 ? 1 : 0, // Fade out for sections.ix
          0.1,                     // Fully visible
          idx % 2 === 0 ? 1 : 0, // Fade out for sections.ix
        ]),
        extrapolate: 'clamp',
      });
    return (
    <View style={styles.container}>
    
    <ScrollView onScroll={scrollHandlerY} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>  
    {elements.map((Element, index) => {
            const inputRange = [
                (index - 0.5) * screenHeight * 1,
                index * screenHeight * 1,
                (index + 0.25) * screenHeight * 1,
                // (index + 0.5) * screenHeight * 0.75
            ];
            const animatedStyle = {
                opacity: scrollY.interpolate({
                  inputRange,
                  outputRange: [0, 1,0],
                  extrapolate: 'clamp',
                }),
              };
            return (
            <Animated.View key={index} style={ index%2 ===0? animatedStyle :null}>
                {Element}
            </Animated.View>
            );
        })}
      </ScrollView> 
      <TouchableWithoutFeedback onPress={() => navigation.navigate('nav')}>
          <Animated.View style = {[styles.heliosLogo, {opacity:logoOpacity}]}>
            <View/>
          </Animated.View>
          </TouchableWithoutFeedback>

      </View>     
  
    );
  }
  

  
export default HonkScreen;
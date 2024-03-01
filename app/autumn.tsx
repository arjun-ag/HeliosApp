import { StyleSheet, Dimensions, ScrollView, 
    NativeSyntheticEvent, NativeScrollEvent, TouchableWithoutFeedback } from 'react-native';
  import { Text, View } from '@/components/Themed';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import Animated, {useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate} from 'react-native-reanimated';
  import * as sections from '../components/autumnSections';
  
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const elements = [
    <sections.i1/>,<sections.s1 />,<sections.s2 />,<sections.s3 />,<sections.i2/>,<sections.s4 />,<sections.s5 />,<sections.s6 />,<sections.i3/>,<sections.s7 />,<sections.s8 />,<sections.s9 />,<sections.i1/>,<sections.s10 />,<sections.s11 />,<sections.s12 />,<sections.i4/>,<sections.s13 />,<sections.s14 />
  ];
  
  type Props = {
    navigation: NativeStackNavigationProp<any>;
  };
  
  const AutumnScreen:React.FC<Props> = ({ navigation }) => {
  
    const scrollY = useSharedValue(0);

    const scrollHandlerY = useAnimatedScrollHandler({
        onScroll: (event) => {
        scrollY.value = event.contentOffset.y;
        },
    });
    const logoStyle = useAnimatedStyle(() => {
        const shouldBeVisible = !(
          (scrollY.value > 0 && scrollY.value < screenHeight) ||
          (scrollY.value > 4 * screenHeight && scrollY.value < 5 * screenHeight) ||
          (scrollY.value > 8 * screenHeight && scrollY.value < 9 * screenHeight) ||
          (scrollY.value > 12 * screenHeight && scrollY.value < 13 * screenHeight) ||
          (scrollY.value > 16 * screenHeight && scrollY.value < 17 * screenHeight)
        );
    
        return {
          opacity: shouldBeVisible ? 1 : 0,
        };
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
                <Animated.View key={index} style={index % 4 === 0 ?null:animatedStyle}>
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
  
export default AutumnScreen;
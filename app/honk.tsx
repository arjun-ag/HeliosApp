import { StyleSheet, Dimensions, ScrollView, 
    NativeSyntheticEvent, NativeScrollEvent, Image, TouchableWithoutFeedback } from 'react-native';
  import { Text, View } from '@/components/Themed';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import * as sections from '../components/honkSections';
  import Animated, {useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate} from 'react-native-reanimated';
  
  
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
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
        zIndex: 0, // Make sure it stacks above the scroll content
        borderRadius: 50,
        transform: [{scaleY:1.6}],
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
    const scrollY = useSharedValue(0);
    let isVisible = true;
    const scrollHandlerY = useAnimatedScrollHandler({
        onScroll: (event) => {
        scrollY.value = event.contentOffset.y;
        isVisible = scrollY.value < screenHeight || (scrollY.value > 2*screenHeight && scrollY.value < 3*screenHeight) ||
    (scrollY.value > 4*screenHeight && scrollY.value < 5*screenHeight) || (scrollY.value > 6*screenHeight && scrollY.value < 7*screenHeight);
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
            <Animated.View key={index} style={ index%2 === 0? animatedStyle:null}>
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
  

  
export default HonkScreen;
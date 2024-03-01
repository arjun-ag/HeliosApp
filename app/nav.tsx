import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import EditScreenInfo from '@/components/storyHelios';
import { Text, View } from '@/components/Themed';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const NavScreen:React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.editorial}>
        <TouchableOpacity onPress={() => navigation.navigate('editorial')}>
            <Image source={require('../assets/images/nav/editorial.jpeg')} style={{ width: screenWidth/2, height: screenHeight/3 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.dream}>
        <TouchableOpacity onPress={() => navigation.navigate('dream')}>
            <Image source={require('../assets/images/nav/dream.jpeg')} style={{ width: screenWidth/2, height: screenHeight/3 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.onward}>
        <TouchableOpacity onPress={() => navigation.navigate('onward')}>
            <Image source={require('../assets/images/nav/onward.jpeg')} style={{ width: screenWidth/2, height: screenHeight/3 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.autumn}>
        <TouchableOpacity onPress={() => navigation.navigate('autumn')}>
            <Image source={require('../assets/images/nav/autumn.jpeg')} style={{ width: screenWidth/2, height: screenHeight/3 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.lost}>
        <TouchableOpacity onPress={() => navigation.navigate('lost')}>
            <Image source={require('../assets/images/nav/lost.jpeg')} style={{ width: screenWidth/2, height: screenHeight/3 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.honk}>
        <TouchableOpacity onPress={() => navigation.navigate('honk')}>
            <Image source={require('../assets/images/nav/honk.jpeg')} style={{ width: screenWidth/2, height: screenHeight/3 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
    editorial: {
        position: 'absolute',
        left: 0,
        top: 0,
        color: '#000000',
      },
  text: {
    fontSize: 20,
    fontStyle: 'normal',
    textAlign: 'center',
    letterSpacing: -0.015,
    alignItems: 'center',
    fontFamily: 'Baskerville',
    lineHeight: 54,
    display: 'flex',
  },
  dream: {
    position: 'absolute',
    left: screenWidth/2,
    top: 0,
    color: '#000000',
  },
  onward: {
    position: 'absolute',
    left: screenWidth/2,
    top: screenHeight*0.3333,
    color: '#000000',
  },
  autumn: {
    position: 'absolute',
    left: screenWidth/2,
    top: screenHeight *0.6666,
    color: '#000000',
  },
  lost: {
    position: 'absolute',
    left: 0,
    top: screenHeight*0.3333,
    color: '#000000',
  },
  honk: {
    position: 'absolute',
    left: 0,
    top: screenHeight*0.6666,
    color: '#000000',
  },
  

  container : {
    flex:1
  }

});

export default NavScreen;
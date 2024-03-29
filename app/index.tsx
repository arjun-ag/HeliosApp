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

const HomeScreen:React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.log}>
        <TouchableOpacity onPress={() => navigation.navigate('nav')}>
            <Image source={require('../assets/images/heliosLogo.png')} style={{ width: screenWidth, height: 80 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  log: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 148,
    height: 54,
    left: screenWidth/100,
    top: screenHeight / 9,
    color: '#000000',
  },
  onward: {
    position: 'absolute',
    width: 148,
    height: 54,
    left: screenWidth/1.7,
    top: screenHeight / 9,
    color: '#000000',
  },
  autumn: {
    position: 'absolute',
    width: 148,
    height: 54,
    left: screenWidth/100,
    top: screenHeight / 1.5,
    color: '#000000',
  },
  lost: {
    position: 'absolute',
    width: 148,
    height: 54,
    left: screenWidth/1.7,
    top: screenHeight / 1.5,
    color: '#000000',
  },
  honk: {
    position: 'absolute',
    width: 190,
    height: 54,
    left: screenWidth/3.9,
    top: screenHeight / 3.5,
    color: '#000000',
  },
  

  container : {
    flex:1
  }

});

export default HomeScreen;
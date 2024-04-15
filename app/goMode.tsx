import { StyleSheet, Dimensions, ScrollView,  Image, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import { Text, View } from '@/components/Themed';
import {useRef, useState} from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

const {width, height} = Dimensions.get('window');

type Props = { navigation: NativeStackNavigationProp<any>; };
  
const GoModeScreen:React.FC<Props> = ({ navigation }) => {
const [goMode, setGoMode] = useState(true);

const sections1 = [
  {
    key: '1',
    image: require('../assets/images2/7.png'),
    headline: 'Dream',
    subtext1: '...or why being lost is fun',
  },
  {
    key: '2',
    image: require('../assets/images2/p3.png'),
    headline: 'Autumn',
    subtext1: '...or make hay while the sun shines',
  },
  {
    key: '3',
    image: require('../assets/images2/3.png'),
    headline: 'Autumn',
    subtext1: '...or make hay while the sun shines',
  },
  {
    key: '4',
    image: require('../assets/images2/4.png'),
    headline: 'Autumn',
    subtext1: '...or make hay while the sun shines',
  },
];

  const goModeHandler = () => {
    setGoMode(false);
    navigation.navigate('stayMode');
    setGoMode(true);
  }
    
    return (
      <View style = {styles.container}>

      <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
        <View style={styles.stickyHeader}>
          <Image
            source={require('../assets/images/heliosLogo.png')} // Replace with your image URL or local source
            style={styles.headerImage}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('editorial')} activeOpacity={1}>
        <ImageBackground
          source={require('../assets/images2/GoMode1.png')} // Replace with your own image URL
          resizeMode="cover" // Cover the entire area of the View
          style={styles.section1}>
          <Text style = {[styles.subText, styles.editorialPos1]}>editorial</Text>
          <Text style={[styles.titleText, styles.editorialTitle]}>Sunshine</Text>
          <Text style = {[styles.subText,styles.editorialPos2]}>...or why you should continue listening to this</Text>
        </ImageBackground>
      </TouchableOpacity>
      <View style={[styles.line]} />
    <Text style = {styles.rightText}> intuitions</Text>

    <FlatList
      data={sections1}
      horizontal={true}
      pagingEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style = {styles.section2}>
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={styles.section1Container}>
            {/* <Text style={[styles.titleText, styles.bottomTextTitle]}>{item.headline}</Text>
            <Text style={[styles.subText, styles.bottomTextsubTitle]}>{item.subtext1}</Text> */}
          </ImageBackground>
        </View>
      )}
      keyExtractor={item => item.key}
    />
      </ScrollView>

      <View style ={styles.footer} >
    <TouchableOpacity onPress={goModeHandler} activeOpacity={1}>
        <View style={goMode ? styles.imageBox : styles.imageBoxActive}>
          <Image source={require('../assets/images2/stayMode.png')} style={styles.imageFooter} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setGoMode(true)} activeOpacity={1}>
      <View style={goMode ? styles.imageBoxActive : styles.imageBox}>
          <Image source={require('../assets/images2/goMode.png')} style={styles.imageFooter}/>
        </View>
      </TouchableOpacity>
    </View>
    

    </View>
  
    );
  }


  const styles = StyleSheet.create({
    section1Container: {
      width: height*0.22, 
      height: height*0.22,
      justifyContent:'center',
      // margin:15,
      borderRadius: 10,
      overflow:"hidden",
      marginLeft:10,
      marginRight:10,
    },
    section1: {
      position: 'relative',
      width: width,
      height: height*0.4,
      resizeMode:'contain',
      justifyContent: 'flex-end', // Center the child at the bottom
      alignItems: 'flex-start', // Center the child on the left
      marginBottom: 10,
    },
    section2: {
      position: 'relative',
      width: height*0.2,
      height: height*0.2,
      resizeMode:'contain',
      justifyContent: 'flex-end', // Center the child at the bottom
      alignItems: 'flex-start', // Center the child on the left
      // borderRadius: 10,
      // overflow:'hidden'
    },
    stickyHeader: {
      height: height/8.5,
      backgroundColor: 'white',
      // justifyContent: 'flex-end',
      position: 'relative',  // Ensures absolute positioning is relative to the header
      alignItems: 'center',
      zIndex: 1,
    },
    container : {
      flex:1,
      backgroundColor: '#fff',
    },
    headerImage: {
      width: 150,  
      bottom: -30,       
      height: 90,  
      resizeMode: 'contain',
    },
    imageBox: {},
    imageBoxActive: {
      borderRadius: 10,
      justifyContent:'center',
      alignItems:'center',
      width:50,
      height:50,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#000',  // Example: change to a red border
      marginLeft:10,
      marginRight:10,
    },
    imageFooter:{
      width: 30,  // Fixed width
      height: 30,  // Fixed height
      resizeMode: 'contain'  // Maintain aspect ratio
    },
    footer: {
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row'
    },
    subText : {
      fontSize: 16,
      fontStyle: 'normal',
      textAlign: 'center',
      color: '#000',
      letterSpacing: -0.24,
      alignItems: 'center',
      fontFamily: 'Bodoni',
      lineHeight: 20,
      fontWeight: '400',
    },
  
    titleText: {
      fontSize: 32,
      fontStyle: 'normal',
      textAlign: 'center',
      width: width,
      color: '#FFFFFF',
      letterSpacing: -0.23,
      alignItems: 'center',
      fontFamily: 'Bodoni',
      lineHeight: 30,
      fontWeight: '400',
    },
    editorialPos1: {
      bottom:height/15,
      left:width/7,
    },
    editorialPos2:{
      width: width/3,
      bottom:height/20,
      left:width/20,
    },
    editorialTitle :{
      bottom:height/20,
      left:width/20,
      width:width/3,
    },
    line: {
      position:"relative",
      width: width/1.1, // This is the thickness of the line
      backgroundColor: '#000', // This sets the color of the line
      marginVertical: 5, // This adds horizontal space around the line
      height: 1, // This makes the line span the full height of the container
      top:1,
      left: width/20,
    },
    rightText: {
      fontSize: 16,
      fontStyle: 'normal',
      textAlign: 'right',
      color: '#000',
      alignItems: 'center',
      fontFamily: 'Bodoni',
      // top:height/3.9,
      right:width/20,
      marginBottom:10
    },
    // linearGradient: {
    //   width: '100%',
    //   height: height*0.4, // Adjust the height of the gradient as needed
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   top:height,
    // },
  });


  

  
export default GoModeScreen;
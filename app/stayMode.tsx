import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useCallback } from 'react';
import { Platform, StyleSheet, Image, Dimensions, ViewToken , ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';


import { Text, View } from '@/components/Themed';

const {width, height} = Dimensions.get('window');

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

interface Item {
  key: string;
  image: any;
  headline: string;
  subtext1: string;
}
const sections1 = [
  {
    key: '1',
    image: require('../assets/images2/dream.jpeg'),
    headline: 'Dream',
    subtext1: '...or why being lost is fun',
  },
  {
    key: '2',
    image: require('../assets/images2/autumn.jpeg'),
    headline: 'Autumn',
    subtext1: '...or make hay while the sun shines',
  },
  {
    key: '3',
    image: require('../assets/images2/2.png'),
    headline: 'Onward',
    subtext1: 'coming soon',
  },
  {
    key: '4',
    image: require('../assets/images2/lost.png'),
    headline: 'Lost',
    subtext1: 'roaming about',
  }
];

const sections2 = [
  {
    key: '1',
    image: require('../assets/images2/homeFilm.png'),
    headline: 'Home',
    subtext1: 'coming soon',
  },
  {
    key: '2',
    image: require('../assets/images2/1.png'),
    headline: 'Light',
    subtext1: 'coming soon',
  },
]

const sections3 = [
  {
    key: '1',
    image: require('../assets/images2/hamlet.png'),
    headline: 'Playing Hamlet',
    subtext1: '...or why we don\'t understand art',
  },
  {
    key: '2',
    image: require('../assets/images2/5.png'),
    headline: "Einstein",
    subtext1: '...or why be a genius',
  },
  {
    key: '3',
    image: require('../assets/images2/6.png'),
    headline: "Picasso",
    subtext1: '...or why draw',
  }
]

const sections4 = [
  {
    key: '1',
    image: require('../assets/images2/honk.png'),
    headline: "One Wayward Honk",
    subtext1: 'homeward',
    subtext2: '...or the joys of aloneness',
  }

]


const StayModeScreen:React.FC<Props> = ({ navigation }) => {
  const [goMode, setGoMode] = useState(false);

  const goModeHandler = () => {
    setGoMode(true);
    navigation.navigate('goMode');
    setGoMode(false);
  }

  const [currentSection1Image, setCurrentSection1Image] = useState(0);
  const [currentSection2Image, setCurrentSection2Image] = useState(0);
  const [currentSection3Image, setCurrentSection3Image] = useState(0);
  const [currentSection4Image, setCurrentSection4Image] = useState(0);

  const section1ItemsChanged = React.useCallback(({ viewableItems }: { viewableItems: ViewToken[], changed: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      if (viewableItems[0].index == null) {
        setCurrentSection1Image(0);
      } else {
        setCurrentSection1Image(viewableItems[0].index);
      }
    }
  }, []);

  const section2ItemsChanged = React.useCallback(({ viewableItems }: { viewableItems: ViewToken[], changed: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      if (viewableItems[0].index == null) {
        setCurrentSection2Image(0);
      } else {
        setCurrentSection2Image(viewableItems[0].index);
      }
    }
  }, []);
  const section3ItemsChanged = React.useCallback(({ viewableItems }: { viewableItems: ViewToken[], changed: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      if (viewableItems[0].index == null) {
        setCurrentSection3Image(0);
      } else {
        setCurrentSection3Image(viewableItems[0].index);
      }
    }
  }, []);
  const section4ItemsChanged = React.useCallback(({ viewableItems }: { viewableItems: ViewToken[], changed: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      if (viewableItems[0].index != null) {
        if (viewableItems[0].index == 0) {
          setCurrentSection4Image(viewableItems[0].index);
        }
      }
    }
  }, []);

  const handleSection1 = React.useCallback(({ viewableItems }: { viewableItems: ViewToken[], changed: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      if (viewableItems[0].index == null) {
        setCurrentSection4Image(0);
      } else {
        navigation.navigate('dream')
      }
    }
  }, []);


  return (
    
    <View style = {styles.container}>

    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <View style={styles.stickyHeader}>
        <Image
          source={require('../assets/images/heliosLogo.png')} // Replace with your image URL or local source
          style={styles.headerImage}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('editorial')} activeOpacity={0.999}>
        <ImageBackground
          source={require('../assets/images2/manifesto.png')} // Replace with your own image URL
          resizeMode="cover" // Cover the entire area of the View
          style={styles.section1}>
          <LinearGradient
              colors={['#000', 'rgba(0,66,94,0)']}  // Starting from a solid color, fading to transparent
              start={{ x: 0, y: -1 }}  // Gradient starts t the left
              end={{ x: 1, y: -1 }}    // Gradient ends at the right
              style={styles.linearGradient}/>
          <Text style = {[styles.subText, styles.editorialPos1]}>editorial</Text>
          <Text style={[styles.titleText, styles.editorialTitle]}>The Essential Manifesto</Text>
          <Text style = {[styles.subText,styles.editorialPos2]}>...or why you should continue reading this</Text>
        </ImageBackground>
      </TouchableOpacity>


      <View style={styles.line} />
      <Text style = {styles.rightText}> impressions</Text>

      <FlatList
      data={sections1}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={section1ItemsChanged}
      keyExtractor={item => item.key}
      renderItem={({ item }) => (
        <TouchableOpacity 
            onPress={() => 
              item.key === '1' ? navigation.navigate('dream') :
              item.key === '2' ? navigation.navigate('autumn') :
              item.key === '3' ? navigation.navigate('onward') :
              item.key === '4' ? navigation.navigate('lost'): 2 } 
            activeOpacity={0.9}
        >
        <View style = {{width, height: height*0.35}}>
              
              <ImageBackground
                source={item.image}
                resizeMode="cover"
                style={styles.section2}>
                
                <Text style={[styles.titleText, styles.bottomTextTitle]}>{item.headline}</Text>
                <Text style={[styles.subText, styles.bottomTextsubTitle]}>{item.subtext1}</Text>
                
              </ImageBackground>
              
            </View>
        </TouchableOpacity>
      )}
    />
    <View style={styles.indicatorContainer}>
        {sections1.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSection1Image === index ? styles.activeIndicator : null,
            ]}
          />
        ))}
    </View>
    <View style={[styles.line, styles.line2]} />
    <Text style = {styles.rightText}> motion pictures</Text>
 
    <FlatList
      data={sections2}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={section2ItemsChanged}
      renderItem={({ item }) => (
        <View style = {{width, height: height*0.7}}>
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={styles.filmSection}>
            <Text style={[styles.titleText, styles.topTextTitle]}>{item.headline}</Text>
            <Text style={[styles.subText, styles.topTextsubTitle]}>{item.subtext1}</Text>
          </ImageBackground>
        </View>
      )}
      keyExtractor={item => item.key}
    />
    <View style={styles.indicatorContainer}>
        {sections2.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSection2Image === index ? styles.activeIndicator : null,
            ]}
          />
        ))}
    </View>

    <View style={[styles.line,styles.line2]} />
    <Text style = {styles.rightText}> reason</Text>

    <ImageBackground
            source={require("../assets/images2/revolution.png")}
            resizeMode="cover"
            style={styles.section2}>
            <Text style={[styles.titleText, styles.bottomTextTitle]}>Revolution</Text>
            <Text style={[styles.subText, styles.bottomTextsubTitle]}>...or the ontology of change</Text>
          </ImageBackground>

    <View style={[styles.line]} />
    <Text style = {styles.rightText}> intuitions</Text>


    <FlatList
      data={sections3}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={section3ItemsChanged}
      renderItem={({ item }) => (
        <TouchableOpacity 
            onPress={() => 
              item.key === '1' ? navigation.navigate('hamlet') :
              item.key === '2' ? navigation.navigate('lost') : 2 } 
            activeOpacity={0.9}
        >
            <View style = {{width, height: height*0.35}}>
              <ImageBackground
                source={item.image}
                resizeMode="cover"
                style={styles.section2}>
                <Text style={[styles.titleText, styles.bottomTextTitle]}>{item.headline}</Text>
                <Text style={[styles.subText, styles.bottomTextsubTitle]}>{item.subtext1}</Text>
              </ImageBackground>
            </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.key}
    />
    <View style={styles.indicatorContainer}>
        {sections3.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSection3Image === index ? styles.activeIndicator : null,
            ]}
          />
        ))}
    </View>

    <View style={[styles.line, styles.line2]} />
    <Text style = {styles.rightText}> verse</Text>

    <FlatList
      data={sections4}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={section4ItemsChanged}
      renderItem={({ item }) => (
        <View style = {{width, height: height*0.35}}>
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={styles.section2}>
            <Text style={[styles.titleText, styles.rightTitle]}>{item.headline}</Text>
            <Text style={[styles.subText, styles.rightTextsubTitle1]}>{item.subtext1}</Text>
            <Text style={[styles.subText, styles.rightTextsubTitle2]}>{item.subtext2}</Text>
          </ImageBackground>
        </View>
      )}
      keyExtractor={item => item.key}
    />
    <View style={styles.indicatorContainer}>
        {sections4.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSection4Image === index ? styles.activeIndicator : null,
            ]}
          />
        ))}
    </View>

  
    </ScrollView>

    <View style ={styles.footer} >
    <TouchableOpacity onPress={() => setGoMode(false)}>
        <View style={goMode ? styles.imageBox : styles.imageBoxActive}>
          <Image source={require('../assets/images2/stayMode.png')} style={styles.imageFooter} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={goModeHandler}>
      <View style={goMode ? styles.imageBoxActive : styles.imageBox}>
          <Image source={require('../assets/images2/goMode.png')} style={styles.imageFooter}/>
        </View>
      </TouchableOpacity>
    </View>

  </View>

  );
}



const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth:1,
    borderColor : 'black',
    marginHorizontal: 5
  },
  activeIndicator: {
    backgroundColor: '#FFA600',
  },

  imageFooter:{
    width: 30,  // Fixed width
    height: 30,  // Fixed height
    resizeMode: 'contain'  // Maintain aspect ratio
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
  line: {
    position:"relative",
    width: width/1.1, // This is the thickness of the line
    backgroundColor: '#000', // This sets the color of the line
    marginVertical: 5, // This adds horizontal space around the line
    height: 1, // This makes the line span the full height of the container
    top:1,
    left: width/20,
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
  stickyHeader: {
    height: height/8.5,
    backgroundColor: 'white',
    // justifyContent: 'flex-end',
    position: 'relative',  // Ensures absolute positioning is relative to the header
    alignItems: 'center',
    zIndex: 1,
  },
  headerImage: {
    width: 150,  
    bottom: -30,       
    height: 90,  
    resizeMode: 'contain',
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
  line2:{
    marginTop: 12
  },
  section2: {
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'relative',
    width: width,
    height: height*0.35,
    resizeMode:'contain',
    marginBottom: 20,
  },

  filmSection: {
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'relative',
    width: width,
    height: height*0.7,
    resizeMode:'contain',
    marginBottom: 20,
  },

  topTextTitle: {
    bottom:height/4,
  },
  topTextsubTitle: {
    bottom:height/3.1,
  },

  subText : {
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#FFA600',
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
  bottomTextTitle: {
    top:height/9,
  },
  bottomTextsubTitle:{
    top:height/8.5
  },
  rightTitle: {
    top:height/23,
    left:width/3,
    width: width/3
  },
  rightTextsubTitle1:{
    bottom: height/10,
    left: width/3
  },
  rightTextsubTitle2:{
    top: height/35,
    left: width/3,
    width: width/4
  },
  footer: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  container : {
    flex:1,
    backgroundColor: '#fff',
  },   
  linearGradient: {
    width: '100%',
    height: height*0.4, // Adjust the height of the gradient as needed
    justifyContent: 'center',
    alignItems: 'center',
    top:height*0.175,
  },

});

export default StayModeScreen;
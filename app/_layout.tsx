import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {
  LibreBaskerville_400Regular,
  LibreBaskerville_400Regular_Italic,
  LibreBaskerville_700Bold,
} from '@expo-google-fonts/libre-baskerville';
import HomeScreen from './index';
import AutumnScreen from './autumn';
import EditorialScreen from './editorial';
import GoModeScreen from './goMode';
import OnwardScreen from './onward';
import DreamScreen from './dream';
import LostScreen from './lost'
import StayModeScreen from './stayMode';
import HamletScreen from './hamlet';

const Stack = createNativeStackNavigator();


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function HomeLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Baskerville: LibreBaskerville_400Regular,
    BaskervilleItalics: LibreBaskerville_400Regular_Italic,
    Bodoni: require('../assets/fonts/BodoniSvtyTwoSCITCTT-Book.woff.otf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
//   <Stack>
//   {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
//   {/* <Stack.Screen name="story"/> */}
//   <Stack.Screen name="story"/>
// </Stack>
  return (
    <ThemeProvider value= {DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="index" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="stayMode" component={StayModeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="hamlet" component={HamletScreen} options={{headerShown: false}}/>
        <Stack.Screen name="editorial" component={EditorialScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="goMode" component={GoModeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="dream" component={DreamScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="autumn" component={AutumnScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="onward" component={OnwardScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="lost" component={LostScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </ThemeProvider>
  );
}

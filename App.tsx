/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/HomeScreen';
import DetailScreen from './src/screens/details/detailScreen';
import LottieView from 'lottie-react-native';
import SplashIntro from './src/components/SplashIntro';
import TabNavigation from './navigation/TabNavigation';
const Stack = createNativeStackNavigator();
function App(props: any): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  function hideSplash() {
    setShowSplash(false);
  }
  return showSplash ? (
    <SplashIntro />
  ) : (
    <NavigationContainer onReady={hideSplash}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

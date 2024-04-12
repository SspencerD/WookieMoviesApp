/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import LottieView from 'lottie-react-native';

import {View} from 'react-native';

const SplashIntro = () => {
  return (
    <View className="items-center justify-center flex-1 w-full bg-black">
      <LottieView
        autoPlay
        source={require('../../assets/animations/wookieflixintro.json')}
        style={{
          aspectRatio: 1,
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  );
};
export default SplashIntro;

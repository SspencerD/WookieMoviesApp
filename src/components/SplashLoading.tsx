/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import LottieView from 'lottie-react-native';
import {View} from 'react-native';

const SplashLoading = () => {
  return (
    <View className="flex-1 w-full bg-black">
      <LottieView
        autoPlay
        source={require('../../assets/animations/Splash-WookieFlix.json')}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

export default SplashLoading;

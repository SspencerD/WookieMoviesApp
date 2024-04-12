/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import LogoW from '../../assets/svg/WookieFlix.svg';
import OnlyW from '../../assets/svg/W.svg';
import {Animated, View, useAnimatedValue} from 'react-native';
import {useEffect} from 'react';

const LogoComponent = () => {
  const translateY = useAnimatedValue(10);
  const translateX = useAnimatedValue(2);
  const opacityWookieFlix = new Animated.Value(1);
  const opacityW = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacityWookieFlix, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityW, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(translateY, {
        toValue: -80,
        duration: 1200,
        useNativeDriver: true,
      }).start();

      Animated.timing(translateX, {
        toValue: -120,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1200);
  }, []);

  return (
    <View className="items-center justify-center w-full ">
      <Animated.View
        style={{
          opacity: opacityWookieFlix,
        }}>
        <LogoW
          style={{
            width: 120,
            aspectRatio: 3.5,
          }}
        />
      </Animated.View>

      <Animated.View
        style={{
          opacity: opacityW,
          transform: [{translateY: translateY}, {translateX: translateX}],
        }}>
        <OnlyW
          style={{
            width: 100,
            aspectRatio: 1,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default LogoComponent;

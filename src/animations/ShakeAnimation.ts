import {Animated} from 'react-native';

type ShakeAnimationProps = (
  animatedValue: Animated.Value,
) => Animated.CompositeAnimation;

const shakeAnimation: ShakeAnimationProps = (animatedValue) =>
  Animated.sequence([
    Animated.timing(animatedValue, {
      toValue: 25,
      duration: 10,
      useNativeDriver: true,
    }),
    Animated.timing(animatedValue, {
      toValue: -25,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(animatedValue, {
      toValue: 10,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(animatedValue, {
      toValue: -10,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(animatedValue, {
      toValue: 5,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
  ]);

export default shakeAnimation;

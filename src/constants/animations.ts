import { withSpring, withTiming, Easing } from 'react-native-reanimated';

export const Animations = {
  // Mascot animations
  mascotGreeting: {
    scale: withSpring(1.2, { damping: 10, stiffness: 100 }),
    rotate: withSpring('5deg', { damping: 10, stiffness: 100 }),
  },
  
  mascotThinking: {
    scale: withSpring(1, { damping: 15, stiffness: 150 }),
    rotate: withTiming('-10deg', { duration: 1000, easing: Easing.inOut(Easing.ease) }),
  },
  
  mascotExcited: {
    scale: withSpring(1.3, { damping: 5, stiffness: 200 }),
    rotate: withSpring('15deg', { damping: 5, stiffness: 200 }),
  },
  
  mascotDefault: {
    scale: withSpring(1, { damping: 15, stiffness: 150 }),
    rotate: withSpring('0deg', { damping: 15, stiffness: 150 }),
  },

  // UI animations
  fadeIn: {
    opacity: withTiming(1, { duration: 300 }),
  },
  
  fadeOut: {
    opacity: withTiming(0, { duration: 300 }),
  },
  
  slideUp: {
    translateY: withTiming(0, { duration: 300, easing: Easing.out(Easing.cubic) }),
  },
  
  slideDown: {
    translateY: withTiming(100, { duration: 300, easing: Easing.in(Easing.cubic) }),
  },

  // Button animations
  buttonPress: {
    scale: withSpring(0.95, { damping: 15, stiffness: 150 }),
  },
  
  buttonRelease: {
    scale: withSpring(1, { damping: 15, stiffness: 150 }),
  },
} as const;
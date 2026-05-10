/// <reference types="expo/types" />

// Fix for TypeScript errors when Expo modules are not yet installed
declare module 'expo' {
  export * from 'expo/types';
}

declare module 'expo-constants' {
  export interface Constants {
    manifest: any;
    [key: string]: any;
  }
  export const Constants: Constants;
  export default Constants;
}

declare module 'expo-location' {
  export * from 'expo-location';
}

declare module 'expo-speech' {
  export * from 'expo-speech';
}

declare module 'expo-status-bar' {
  export * from 'expo-status-bar';
}

declare module 'react-native-reanimated' {
  export * from 'react-native-reanimated';
}

declare module 'react-native-maps' {
  export * from 'react-native-maps';
}

declare module '@react-navigation/native' {
  export * from '@react-navigation/native';
}

declare module '@react-navigation/stack' {
  export * from '@react-navigation/stack';
}

declare module '@react-navigation/bottom-tabs' {
  export * from '@react-navigation/bottom-tabs';
}

declare module 'react-native-vector-icons' {
  export * from 'react-native-vector-icons';
}

declare module 'lucide-react-native' {
  export * from 'lucide-react-native';
}
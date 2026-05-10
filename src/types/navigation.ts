export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Journey: undefined;
  Modes: undefined;
  Settings: undefined;
};

export type AIAgentMode = 'foodie' | 'history' | 'adventure' | 'shopping' | 'cultural';

export type DietaryCategory = 'halal' | 'vegetarian' | 'vegan' | 'budget' | 'luxury';

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
  name: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  dietaryCategories: DietaryCategory[];
  location: Location;
  culturalContext: string;
  imageUrl?: string;
}

export interface Destination {
  id: string;
  name: string;
  location: Location;
  duration: number; // in minutes
  culturalTip: string;
}

export interface RouteStep {
  from: Destination;
  to: Destination;
  travelTime: number; // in minutes
  travelMode: 'walking' | 'driving' | 'public';
}

export interface JourneyPlan {
  destinations: Destination[];
  optimizedRoute: RouteStep[];
  totalTime: number;
  culturalTips: string[];
}
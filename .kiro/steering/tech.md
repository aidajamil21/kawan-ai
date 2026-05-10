# Technology Stack & Build System

## Primary Technology Stack

### Mobile Framework
- **React Native with Expo**: Chosen for rapid prototyping and cross-platform development
- **Expo CLI**: For quick setup and development workflow
- **Target Platforms**: iOS and Android

### Core Libraries
- **React Native Reanimated 3**: For smooth mascot character animations
- **React Navigation 6**: Navigation with custom mascot-integrated transitions
- **React Native Elements**: UI components with Malaysian flag color theming
- **React Context API**: State management (prototype simplicity over Redux)

### Animation & UI
- **React Native Reanimated**: Mascot animations (greeting, thinking, excited, explaining, listening)
- **Lottie React Native**: For complex mascot expressions and reactions
- **React Native Vector Icons**: Malaysian-themed icons and cultural symbols

### Voice & Audio
- **React Native Voice**: Speech-to-text with Malaysian English support
- **React Native TTS**: Text-to-speech with Malaysian accent simulation
- **React Native Audio Recorder Player**: Voice message recording and playback

### Maps & Location
- **React Native Maps**: Map display and location services
- **React Native Geolocation**: GPS positioning for hyperlocal recommendations
- **Linking API**: Deep links to Waze and Google Maps for navigation
- **Route Optimization**: Custom algorithm for multi-destination journey planning with cultural timing intelligence

### Styling & Theme
- **Styled Components**: Component-level styling with Malaysian flag colors
- **Color Palette**: Red (#FF0000), Blue (#0000FF), White (#FFFFFF), Yellow (#FFFF00)

## Development Commands

### Setup & Installation
```bash
# Install Expo CLI globally
npm install -g expo-cli

# Create new Expo project
expo init KawanAI --template react-native

# Install dependencies
npm install react-native-reanimated react-navigation react-native-elements
npm install react-native-voice react-native-tts react-native-maps
npm install @react-navigation/native @react-navigation/bottom-tabs

# Install journey planning dependencies
npm install geolib haversine-distance
```

### Development Workflow
```bash
# Start development server
expo start

# Run on iOS simulator
expo start --ios

# Run on Android emulator  
expo start --android

# Run on physical device (scan QR code with Expo Go app)
expo start --tunnel
```

### Testing Commands
```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run cultural validation tests
npm run test:cultural
```

### Build Commands
```bash
# Build for production (iOS)
expo build:ios

# Build for production (Android)
expo build:android

# Create development build
expo install --dev-client
```

## Code Style Guidelines

### Malaysian Cultural Code Patterns
- Use Malaysian English terminology in variable names: `makanRecommendation`, `jomLepakMode`
- Comment cultural context: `// Mamak stall - 24/7 Indian-Muslim eatery`
- Respect religious considerations in food categorization logic

### Animation Naming Conventions
```typescript
// Mascot animation states
enum MascotAnimation {
  GREETING = 'salam_greeting',      // Malaysian greeting
  THINKING = 'fikir_thinking',      // Thinking animation  
  EXCITED = 'shiok_excited',        // Excited/happy state
  EXPLAINING = 'cakap_explaining'   // Speaking/explaining
}
```

### Journey Planning Code Patterns
```typescript
// Journey optimization with cultural timing
interface JourneyPlanner {
  destinations: Destination[];
  culturalTiming: CulturalTimingRules;
  
  optimizeRoute(destinations: Destination[]): OptimizedJourney;
  calculateCulturalScore(destination: Destination, timeSlot: TimeSlot): number;
}

// Cultural timing intelligence
const CulturalTiming = {
  temples: { 
    optimal: 'morning',           // Cooler, peaceful
    avoid: 'midday',             // Too hot
    cultural_note: 'Morning prayers are beautiful'
  },
  mamak: { 
    optimal: 'anytime',          // 24/7 culture
    peak: 'supper_time',         // 10PM-2AM Malaysian culture
    cultural_note: 'Mamak supper is Malaysian tradition'
  },
  shopping_malls: {
    optimal: 'afternoon_evening', // Air-con comfort
    avoid: 'morning',            // Many shops closed
    cultural_note: 'Malaysians love mall culture'
  }
};
```

## Performance Considerations

### Hackathon Optimization
- **Animation Performance**: 30+ FPS for mascot animations
- **Voice Response Time**: <3 seconds for speech processing
- **App Startup**: <5 seconds cold start time
- **Map Loading**: <2 seconds for location display
- **Journey Calculation**: <1 second for route optimization (up to 5 destinations)

### Memory Management
- Preload mascot animations for smooth transitions
- Cache cultural responses to avoid repeated processing
- Optimize image assets for Malaysian flag colors and mascot graphics
- Cache journey planning results for common destination combinations

## Cultural Development Notes

### Malaysian Context Integration
- All hardcoded responses must be validated by Malaysian cultural experts
- Slang usage should be authentic and contextually appropriate
- Religious sensitivity required for dietary recommendations
- Neighborhood knowledge should reflect real Malaysian locations (SS15, Bangsar, Mid Valley)

### Language Processing
- Support Malaysian English patterns and pronunciation
- Implement progressive slang learning with tooltips
- Maintain cultural authenticity across all slang levels
- Provide respectful explanations of cultural practices
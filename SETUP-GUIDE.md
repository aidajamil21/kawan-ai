# Kawan AI - Development Environment Setup Guide

## Prerequisites Installation

### 1. Install Node.js (Required for all team members)

**Windows:**
1. Download from: https://nodejs.org/
2. Choose **LTS version** (Recommended)
3. Run installer with default settings
4. Verify installation:
   ```cmd
   node --version
   npm --version
   ```
   Should show versions like: `v20.11.0` and `10.2.4`

**macOS:**
```bash
brew install node
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Install Expo CLI (Required for all team members)
```bash
npm install -g expo-cli
```

## Project Setup

### 1. Clone the repository (if not already done)
```bash
git clone https://github.com/aidajamil21/kawan-ai.git
cd kawan-ai
```

### 2. Install project dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm start
```

## Development Workflow

### Running on Different Platforms
```bash
# Start Expo development server
npm start

# Run on Android (requires Android Studio/emulator)
npm run android

# Run on iOS (requires Xcode/macOS)
npm run ios

# Run on Web
npm run web
```

### Common Commands
```bash
# Check TypeScript types
npm run type-check

# Run linter
npm run lint

# Run tests
npm test

# Build for production
npm run build
```

## Team Member Specific Setup

### Person 1 (UI Lead)
- Focus on: `src/components/mascot/`, `src/components/chat/`, `src/screens/`
- Required skills: React Native, React Native Reanimated
- First task: Create basic mascot component with Malaysian colors

### Person 2 (Logic Lead)
- Focus on: `src/services/`, `src/data/cultural/`, `src/data/responses/`
- Required skills: TypeScript, Malaysian cultural knowledge
- First task: Create cultural data structure and basic recommendation engine

### Person 3 (Tech Lead)
- Focus on: `src/services/` (VoiceService, LocationService), project configuration
- Required skills: React Native APIs, external integrations
- First task: Set up voice services and map integration

## Troubleshooting

### "expo is not recognized"
```bash
# Reinstall Expo CLI
npm uninstall -g expo-cli
npm install -g expo-cli

# Clear npm cache
npm cache clean --force
```

### "Module not found" errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Metro bundler issues
```bash
# Clear Metro cache
npx expo start --clear

# Or manually
rm -rf .expo
rm -rf node_modules/.cache
```

## Development Tools Recommendations

### VS Code Extensions
1. **React Native Tools** - Microsoft
2. **ES7+ React/Redux/React-Native snippets** 
3. **Prettier - Code formatter**
4. **ESLint**
5. **TypeScript and JavaScript Language Features**

### Android Setup
1. Install Android Studio: https://developer.android.com/studio
2. Create a virtual device in AVD Manager
3. Enable USB debugging for physical devices

### iOS Setup (macOS only)
1. Install Xcode from App Store
2. Install Xcode command line tools
3. Set up iOS simulator

## Quick Start for Hackathon

If you're in a hurry during the hackathon:

1. **Install Node.js** (if not already installed)
2. **Run one-time setup:**
   ```bash
   cd kawan-ai
   npm install
   ```
3. **Start development:**
   ```bash
   npm start
   ```
4. **Use Expo Go app** on your phone:
   - Install "Expo Go" from App Store/Play Store
   - Scan QR code from terminal
   - App loads on your phone instantly

## Notes
- The project uses **TypeScript** for type safety
- **Malaysian flag colors** are defined in `src/constants/colors.ts`
- **Navigation structure** is set up in `App.tsx`
- **All dependencies** are configured in `package.json`

## Getting Help
- Check Expo documentation: https://docs.expo.dev/
- React Native documentation: https://reactnative.dev/
- Team coordination: Refer to `/.kiro/steering/team-division.md`
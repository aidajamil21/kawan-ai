# Project Structure & Organization

## Root Directory Structure

```
KawanAI/
├── .kiro/                          # Kiro configuration and specs
│   ├── specs/kawan-ai/            # Feature specifications
│   │   ├── requirements.md         # Business requirements
│   │   ├── design.md              # Technical design document
│   │   └── tasks.md               # Implementation tasks
│   └── steering/                   # Development guidelines
│       ├── product.md             # Product overview
│       ├── tech.md                # Technology stack
│       └── structure.md           # This file
├── src/                           # Source code
│   ├── components/                # Reusable UI components
│   ├── screens/                   # Screen components
│   ├── navigation/                # Navigation configuration
│   ├── services/                  # Business logic and APIs
│   ├── data/                      # Cultural data and responses
│   ├── utils/                     # Utility functions
│   ├── types/                     # TypeScript type definitions
│   └── constants/                 # App constants and themes
├── assets/                        # Static assets
│   ├── images/                    # Mascot graphics and icons
│   ├── animations/                # Lottie animation files
│   └── audio/                     # Voice samples and sounds
├── __tests__/                     # Test files
└── docs/                          # Documentation
```

## Source Code Organization

### `/src/components/` - Reusable Components
```
components/
├── mascot/
│   ├── MascotCharacter.tsx        # Main mascot component
│   ├── MascotAnimations.tsx       # Animation controller
│   └── MascotModes.tsx           # AI agent mode switching
├── chat/
│   ├── ChatInterface.tsx         # Main chat UI
│   ├── MessageBubble.tsx         # Individual message component
│   ├── VoiceInput.tsx            # Voice recording component
│   └── LanguageSlider.tsx        # Slang level controller
├── recommendations/
│   ├── RecommendationCard.tsx    # Recommendation display
│   ├── DietaryBadge.tsx          # Dietary category labels
│   ├── MapView.tsx               # Location display
│   └── JourneyPlanner.tsx        # Multi-destination journey planning
└── common/
    ├── Button.tsx                # Malaysian-themed buttons
    ├── Input.tsx                 # Text input components
    └── Loading.tsx               # Loading animations
```

### `/src/screens/` - Screen Components
```
screens/
├── HomeScreen.tsx                # Main chat interface
├── ModeSelectionScreen.tsx       # AI agent mode picker
├── JourneyPlannerScreen.tsx      # Multi-destination trip planning
├── SettingsScreen.tsx            # User preferences
├── OnboardingScreen.tsx          # First-time user setup
└── AboutScreen.tsx               # App information
```

### `/src/services/` - Business Logic
```
services/
├── RecommendationEngine.ts       # Core recommendation logic
├── CulturalContext.ts            # Malaysian cultural intelligence
├── LanguageProcessor.ts          # Slang translation system
├── JourneyOptimizer.ts           # Multi-destination route planning with cultural timing
├── VoiceService.ts               # Speech processing
├── LocationService.ts            # GPS and mapping
└── ResponseGenerator.ts          # Chat response selection
```

### `/src/data/` - Cultural Data
```
data/
├── responses/
│   ├── greetings.ts              # Mascot greeting variants
│   ├── recommendations.ts        # Hardcoded recommendations
│   ├── explanations.ts           # Cultural explanations
│   └── reactions.ts              # Mascot reactions
├── cultural/
│   ├── neighborhoods.ts          # Malaysian area knowledge
│   ├── food-culture.ts           # Dietary and food data
│   ├── slang-dictionary.ts       # Malaysian slang terms
│   ├── customs.ts                # Cultural practices
│   └── timing-intelligence.ts    # Cultural timing rules for journey planning
└── mock/
    ├── users.ts                  # Demo user profiles
    ├── scenarios.ts              # Hackathon demo data
    └── journey-examples.ts       # Sample multi-destination trips
```

### `/src/types/` - TypeScript Definitions
```
types/
├── mascot.ts                     # Mascot-related interfaces
├── chat.ts                       # Chat and messaging types
├── recommendations.ts            # Recommendation data types
├── cultural.ts                   # Cultural context types
├── journey.ts                    # Journey planning and route optimization types
├── user.ts                       # User profile types
└── navigation.ts                 # Navigation parameter types
```

### `/src/constants/` - App Constants
```
constants/
├── colors.ts                     # Malaysian flag color palette
├── animations.ts                 # Animation configurations
├── cultural.ts                   # Cultural constants
└── config.ts                     # App configuration
```

## Asset Organization

### `/assets/images/` - Visual Assets
```
images/
├── mascot/
│   ├── jom-jom/                  # Jom Lepak Lu mode mascot
│   ├── shiok/                    # Tempat Healing mode mascot
│   ├── lah-lah/                  # Makan Boss mode mascot
│   └── biu/                      # Jalan-Jalan mode mascot
├── icons/
│   ├── malaysian-flag/           # Flag-themed icons
│   ├── dietary/                  # Food category icons
│   ├── journey/                  # Journey planning icons (route, timing, optimization)
│   └── navigation/               # UI navigation icons
└── backgrounds/
    ├── chat-bg.png               # Chat interface background
    └── mode-selection-bg.png     # Mode selection background
```

### `/assets/animations/` - Lottie Files
```
animations/
├── mascot-greeting.json          # Welcome animation
├── mascot-thinking.json          # Processing animation
├── mascot-excited.json           # Happy reaction
├── mascot-explaining.json        # Speaking animation
└── loading-spinner.json          # Malaysian-themed loader
```

## File Naming Conventions

### Component Files
- **PascalCase** for component files: `MascotCharacter.tsx`
- **camelCase** for utility files: `culturalProcessor.ts`
- **kebab-case** for asset files: `mascot-greeting.json`

### Cultural Context Naming
- Use Malaysian terminology in file names where appropriate
- Example: `makanRecommendations.ts`, `jomLepakMode.ts`
- Include cultural context in comments: `// Mamak - Indian-Muslim 24/7 eatery`

### Test File Organization
```
__tests__/
├── components/
│   ├── mascot/
│   │   └── MascotCharacter.test.tsx
│   └── chat/
│       └── ChatInterface.test.tsx
├── services/
│   ├── RecommendationEngine.test.ts
│   └── CulturalContext.test.ts
├── cultural/
│   ├── slang-accuracy.test.ts    # Malaysian language validation
│   └── dietary-filtering.test.ts # Religious sensitivity tests
└── integration/
    ├── user-journey.test.ts      # End-to-end scenarios
    └── cultural-authenticity.test.ts
```

## Configuration Files

### Root Level Configuration
- `package.json` - Dependencies and scripts
- `app.json` - Expo configuration
- `tsconfig.json` - TypeScript configuration
- `babel.config.js` - Babel transpilation
- `metro.config.js` - Metro bundler configuration

### Development Configuration
- `.env.development` - Development environment variables
- `.env.production` - Production environment variables
- `jest.config.js` - Testing configuration

## Import Path Conventions

### Absolute Imports Setup
```typescript
// Use absolute imports from src/
import { MascotCharacter } from 'components/mascot/MascotCharacter';
import { CulturalContext } from 'services/CulturalContext';
import { MalaysianColors } from 'constants/colors';
```

### Cultural Data Imports
```typescript
// Import cultural data with descriptive names
import { makanRecommendations } from 'data/cultural/food-culture';
import { malaysianSlang } from 'data/cultural/slang-dictionary';
import { ss15Neighborhood } from 'data/cultural/neighborhoods';
```

## Development Workflow

### Feature Development Process
1. **Spec Review**: Check `.kiro/specs/kawan-ai/` for requirements
2. **Cultural Validation**: Ensure Malaysian authenticity
3. **Component Creation**: Build in appropriate `/src/` directory
4. **Testing**: Add tests in `__tests__/` with cultural validation
5. **Integration**: Test with mascot character and chat interface

### Cultural Authenticity Checklist
- [ ] Malaysian slang usage validated by native speakers
- [ ] Religious and dietary sensitivity respected
- [ ] Neighborhood references are accurate
- [ ] Cultural explanations are appropriate
- [ ] Visual design uses Malaysian flag colors consistently

### Hackathon Optimization
- Focus on `/src/components/mascot/` and `/src/screens/HomeScreen.tsx` for core demo
- Prioritize `/src/data/responses/` for impressive cultural authenticity
- Use `/assets/animations/` for visual impact during presentation
- Prepare `/src/data/mock/scenarios.ts` for reliable demo scenarios
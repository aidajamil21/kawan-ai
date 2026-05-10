Write-Host "===========================================" -ForegroundColor Cyan
Write-Host "Kawan AI - Development Environment Setup" -ForegroundColor Cyan
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host ""

# Check Node.js installation
Write-Host "Step 1: Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js is installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js from:" -ForegroundColor Yellow
    Write-Host "https://nodejs.org/" -ForegroundColor Blue
    Write-Host ""
    Write-Host "Download the LTS version and run the installer." -ForegroundColor Yellow
    Write-Host "Then run this script again." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check npm installation
Write-Host ""
Write-Host "Step 2: Checking npm installation..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✅ npm is installed: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not working properly!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Try reinstalling Node.js or check your PATH." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Install Expo CLI
Write-Host ""
Write-Host "Step 3: Installing Expo CLI globally..." -ForegroundColor Yellow
npm install -g expo-cli

# Install project dependencies
Write-Host ""
Write-Host "Step 4: Installing project dependencies..." -ForegroundColor Yellow
npm install

# Success message
Write-Host ""
Write-Host "===========================================" -ForegroundColor Green
Write-Host "SETUP COMPLETE!" -ForegroundColor Green
Write-Host "===========================================" -ForegroundColor Green
Write-Host ""

Write-Host "To start the development server, run:" -ForegroundColor Yellow
Write-Host "  npm start" -ForegroundColor White
Write-Host ""

Write-Host "Development commands:" -ForegroundColor Yellow
Write-Host "  npm run android    # Run on Android (requires setup)" -ForegroundColor Gray
Write-Host "  npm run ios        # Run on iOS (requires macOS)" -ForegroundColor Gray
Write-Host "  npm run web        # Run in browser" -ForegroundColor Gray
Write-Host "  npm test           # Run tests" -ForegroundColor Gray
Write-Host "  npm run lint       # Run linter" -ForegroundColor Gray
Write-Host ""

Write-Host "Team coordination:" -ForegroundColor Yellow
Write-Host "  See /.kiro/steering/team-division.md for task assignments" -ForegroundColor Gray
Write-Host ""

Write-Host "Happy hacking! 🚀" -ForegroundColor Cyan
Read-Host "Press Enter to continue"
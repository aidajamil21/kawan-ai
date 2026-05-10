@echo off
echo ===========================================
echo Kawan AI - Development Environment Setup
echo ===========================================
echo.

echo Step 1: Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo.
    echo Please install Node.js from:
    echo https://nodejs.org/
    echo.
    echo Download the LTS version and run the installer.
    echo Then run this script again.
    pause
    exit /b 1
)

echo ✅ Node.js is installed
node --version

echo.
echo Step 2: Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not working properly!
    echo.
    echo Try reinstalling Node.js or check your PATH.
    pause
    exit /b 1
)

echo ✅ npm is installed
npm --version

echo.
echo Step 3: Installing Expo CLI globally...
call npm install -g expo-cli

echo.
echo Step 4: Installing project dependencies...
call npm install

echo.
echo ===========================================
echo SETUP COMPLETE!
echo ===========================================
echo.
echo To start the development server, run:
echo   npm start
echo.
echo To run on different platforms:
echo   npm run android    (requires Android setup)
echo   npm run ios        (requires macOS and Xcode)
echo   npm run web        (runs in browser)
echo.
echo For team coordination, see:
echo   /.kiro/steering/team-division.md
echo.
echo Happy hacking! 🚀
pause
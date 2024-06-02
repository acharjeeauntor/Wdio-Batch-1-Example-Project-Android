## App Automated Testing

## Technology: <br>

- Automation Framework: webdriverio with Appium <br>
- Build tool: npm <br>
- Bundled Tools: Mocha, Chai <br>
- Language: Javascript <br>
- Design Pattern: POM <br>
- Report: Allure,spec <br>
- "dependencies": {
    "@wdio/appium-service": "^8.36.1",
    "@wdio/local-runner": "^8.36.1",
    "@wdio/mocha-framework": "^8.36.1",
    "@wdio/spec-reporter": "^8.36.1",
    "appium-uiautomator2-driver": "^3.3.0"
  } <br>
- IDE: Visual Studio Code <br>

## Prerequisite & Environment Setup:

The following software are required:

1. nodejs : Download and Install Node JS from<br>
   https://nodejs.org/en/download/<br>
2. Android Studio : Download and Install Android Studio from<br>
   https://developer.android.com/studio<br>
3. Install the virtual Devices (If needed) from Android Studio.<br>
4. Install the following Android SDK tools from Android Studio. (From Preferences -> Android SDK)<br>
   > Android SDK Platform-Tools<br>
   > Android SDK Tools (Obsolete) [You will found this option after clicking on Hide Obsolete Packages Checkbox]<br>
5. Install Java 11 or above, Allure Reports require Java 11 or higher.<br>
6. allure commandline : Install allure command line for generating Allure Reports using<br>
   npm install -g allure-commandline<br>
7. Set ANDROID_HOME & JAVA_HOME path in ~/.zshenv by following:<br>
   export JAVA_HOME=$(/usr/libexec/java_home)<br>
export ANDROID_HOME="/Users/**UserNameOfLaptop**/Library/Android/sdk"<br>
export PATH=$ANDROID_HOME/platform-tools:$PATH<br>
export PATH=$ANDROID_HOME/tools:$PATH<br>
export PATH=$ANDROID_HOME/tools/bin:$PATH<br>
export PATH=$ANDROID_HOME/build-tools:$PATH<br>
export ADB=$ANDROID_HOME/platform-tools/adb:$PATH<br>
8. Install appium up to version 2.0 globally (cmd: sudo npm install -g appium@next)<br>
9. Install drivers:<br>
   i. appium driver install uiautomator2<br>
10. Install appium doctor globally (cmd: sudo npm install -g appium-doctor)<br>
11. Run appium-doctor for confirm env setup (cmd: appium-doctor --android)<br>

## Installation:

1. Clone the repo<br>
2. Navigate to folder and install npm packages using:<br>
   npm install<br>

## Usage:

1. To run test in local machine: npm run wdio<br>

## Important Note:

1. Make sure you connect the android device<br>
2. Make sure apk file is present in app folder<br>
3. Make sure the capabilities is updated based on the device configuration & APK name in wdio.conf.js file<br>

## TroubleShoot:

1. Kill Appium Server (error: Server is already in use/running)
   > pkill -9 -f appium

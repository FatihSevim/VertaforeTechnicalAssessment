# Vertafore Technical Assessment

[![React Native](https://img.shields.io/badge/React%20Native-0.76.2-blue)](https://reactnative.dev/)  
A React Native application developed as part of a technical assessment for Vertafore.

## 📋 Project Overview

This project implements basic state management feature. The app showcases the use of modern development practices, efficient state management, and responsive UI components.

## 🚀 Features

- **Navigation**: Integrated with `@react-navigation/native` for seamless screen transitions.
- **State Management**: Leveraging Redux Toolkit and `redux-persist` for robust state handling.
- **Storage**: Local storage functionality using `@react-native-async-storage`.
- **Styling**: TailwindCSS for scalable and maintainable styling.
- **Cross-Platform**: Fully compatible with Android and iOS.

## 🔧 Tech Stack

- **Core Framework**: React Native (v0.76.2)
- **State Management**: Redux Toolkit, Redux Persist
- **Navigation**: React Navigation
- **Styling**: TailwindCSS, NativeWind
- **Dependencies**: Node.js (>=18)

## 🛠️ Installation and Setup

### Prerequisites

- Node.js (v18 or higher)
- React Native CLI
- Android Studio and/or Xcode for emulators

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/FatihSevim/VertaforeTechnicalAssessment.git
   cd VertaforeTechnicalAssessment

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the Metro server:

   ```bash
   npm start

   ```

4. Run the app:

- Androd:
  ```bash
  npx react-native run-android
  ```
- IOS:
  ```bash
  npx react-native run-ios
  ```

## 📂 Project Structure

VertaforeTechnicalAssessment/
├── src/
│ ├── components/ # Reusable UI components
│ ├── screens/ # Application screens
│ ├── redux/ # Redux slices and store configuration
│ ├── utils/ # Utility functions
│ └── navigation/ # Navigation setup
├── App.js # Root component
├── package.json # Dependencies and scripts
└── README.md # Project documentation

## ⚙️ Key Implementation Details

- Redux State:
  Configured slices for modular state management.
- Persisted Storage:
  Redux Persist ensures state remains intact across the app restarts.
- Reusable Components:
  Modular components for better scalability and maintainability.

## 📄 License

This project is licensed under the MIT License.

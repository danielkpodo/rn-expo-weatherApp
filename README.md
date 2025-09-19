# 🌤️ WeatherApp

A beautiful and modern weather application built with React Native and Expo, featuring real-time weather data and elegant UI design.

## ✨ Features

- 🌍 **Real-time Weather Data** - Get current weather conditions using Open-Meteo API
- 📍 **Location Detection** - Automatic location detection with permission handling
- 📱 **7-Day Forecast** - View detailed weather forecasts for the week ahead
- 🎨 **Beautiful UI** - Clean, modern interface with weather-specific icons
- 🔄 **Pull-to-Refresh** - Easy data refresh with pull-down gesture
- 📊 **Weather Details** - Temperature highs/lows, weather codes, and descriptions
- 🌡️ **Temperature Display** - Celsius temperature readings with intuitive layout

## 🚀 Getting Started

### Prerequisites

- Node.js (14 or newer)
- Expo CLI
- iOS Simulator (for iOS development) or Android Emulator (for Android development)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd weatherApp
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_BASE_WEATHER_API_URL=https://api.open-meteo.com/v1
```

4. Start the development server:

```bash
npm start
```

5. Run on your preferred platform:

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router
- **State Management**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Location Services**: Expo Location
- **Icons**: Lucide React Native
- **Date Handling**: Moment.js
- **Storage**: AsyncStorage with Query Persistence

## 📱 App Structure

```
app/
├── _layout.tsx          # Root layout
├── index.tsx            # Home screen
components/
├── ActivityIndicator.tsx # Loading indicator
├── Error.tsx            # Error handling component
├── Page.tsx             # Base page wrapper
└── Text.tsx             # Custom text component
screens/
└── home/
    └── _components/
        ├── CurrentWeather.tsx  # Current weather display
        ├── ForeCastRow.tsx     # Forecast list item
        └── PageHeader.tsx      # Header with location
services/
├── apiClient.ts         # Axios configuration
├── getWeatherInfo.ts    # Weather API service
└── index.ts             # Service exports
hooks/
├── useLocation.ts       # Location hook
├── useWeatherForecast.ts # Weather data hook
└── useLoadedFonts.ts    # Font loading hook
```

## 🌐 API

This app uses the [Open-Meteo API](https://open-meteo.com/) for weather data:

- Free to use with no API key required
- Provides accurate weather forecasts
- Global coverage with high resolution data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

If you encounter any issues or have suggestions, please [create an issue](../../issues).

---

Built with ❤️ using React Native and Expo

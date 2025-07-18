import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.islamic.app.enhanced',
  appName: 'التطبيق الإسلامي الشامل',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#2E7D32",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#FFFFFF",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
    StatusBar: {
      style: "LIGHT_CONTENT",
      backgroundColor: "#2E7D32"
    },
    App: {
      launchUrl: "index.html"
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#2E7D32",
      sound: "beep.wav",
    },
    Geolocation: {
      permissions: ["ACCESS_COARSE_LOCATION", "ACCESS_FINE_LOCATION"]
    },
    Device: {
      permissions: []
    },
    Network: {
      permissions: []
    }
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined,
      releaseType: "APK"
    },
    webContentsDebuggingEnabled: true,
    loggingBehavior: "DEBUG",
    mixedContentMode: "MIXED_CONTENT_COMPATIBILITY_MODE",
    captureInput: true,
    webViewZoomEnabled: true,
    hideLogs: false,
    allowMixedContent: true
  }
};

export default config;
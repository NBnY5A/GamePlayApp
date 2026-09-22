import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Schedule from "./screens/Schedule";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Rajdhani-Regular": require("../../assets/fonts/Rajdhani-Regular.ttf"),
    "Rajdhani-Bold": require("../../assets/fonts/Rajdhani-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Schedule />;
}

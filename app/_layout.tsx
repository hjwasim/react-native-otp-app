import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {

  const [fontloaded, fonterror] = useFonts({
    Inter_Regular: Inter_400Regular,
  });

  useEffect(() => {
    if (fontloaded || fonterror) {
      SplashScreen.hideAsync();
    }
  }, [fontloaded, fonterror]);

  if (!fontloaded && !fonterror) {
    return null;
  }

  return <>
    <Stack screenOptions={{ headerShown: false }} />
  </>
}

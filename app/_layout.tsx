import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
import { ConvexReactClient } from "convex/react";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexAuthProvider client={convex} storage={AsyncStorage}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </ConvexAuthProvider>
  );
}

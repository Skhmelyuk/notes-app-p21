import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const { colors, toggleDarkMode } = useTheme();

  const styles = createSettingStyles(colors);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle Dark Mode</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const createSettingStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg,
    },
    text: {
      fontSize: 45,
      color: colors.text,
    },
  });
  return styles;
};

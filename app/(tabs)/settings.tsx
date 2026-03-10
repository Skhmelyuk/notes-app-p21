import DangerZone from "@/components/DangerZone";
import Preferences from "@/components/Preferences";
import ProgressStats from "@/components/ProgressStats";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  const { colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  // TODO: Add settings functionality

  return (
    <SafeAreaView style={settingsStyles.safeArea}>
      <View style={settingsStyles.container}>
        {/* HEADER */}
        <View style={settingsStyles.header}>
          <View style={settingsStyles.titleContainer}>
            <View style={settingsStyles.iconContainer}>
              <Ionicons name="settings" size={28} color="#ffffff" />
            </View>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>

        <ScrollView
          style={settingsStyles.scrollView}
          contentContainerStyle={settingsStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />
          <Preferences />
          <DangerZone />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default SettingsScreen;

const createSettingsStyles = (colors: ColorScheme) => {
  return {
    container: {
      flex: 1,
      backgroundColor: colors.bg,
    },
    safeArea: {
      flex: 1,
    },
    header: {
      paddingHorizontal: 24,
      paddingVertical: 32,
      paddingBottom: 24,
    },
    titleContainer: {
      flexDirection: "row" as const,
      alignItems: "center" as const,
    },
    iconContainer: {
      width: 56,
      height: 56,
      borderRadius: 16,
      justifyContent: "center" as const,
      alignItems: "center" as const,
      marginRight: 16,
      backgroundColor: colors.primary,
    },
    title: {
      fontSize: 32,
      fontWeight: "700" as const,
      letterSpacing: -1,
      color: colors.text,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 20,
      gap: 20,
      paddingBottom: 120,
    },
  };
};

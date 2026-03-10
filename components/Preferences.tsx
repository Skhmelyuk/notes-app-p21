import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const { isDarkMode, toggleDarkMode, colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);

  return (
    <View style={settingsStyles.section}>
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>

      {/* DARK MODE */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <View style={settingsStyles.settingIcon}>
            <Ionicons name="moon" size={18} color="#fff" />
          </View>
          <Text style={settingsStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.primary }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* NOTIFICATONS */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <View
            style={[
              settingsStyles.settingIcon,
              { backgroundColor: colors.warning },
            ]}
          >
            <Ionicons name="notifications" size={18} color="#fff" />
          </View>
          <Text style={settingsStyles.settingText}>Notifications</Text>
        </View>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={() =>
            setIsNotificationsEnabled(!isNotificationsEnabled)
          }
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.warning }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* AUTO-SYNC */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <View
            style={[
              settingsStyles.settingIcon,
              { backgroundColor: colors.success },
            ]}
          >
            <Ionicons name="notifications" size={18} color="#fff" />
          </View>
          <Text style={settingsStyles.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.success }}
          ios_backgroundColor={colors.border}
        />
      </View>
    </View>
  );
};

export default Preferences;

const createSettingsStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    section: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 20,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "700" as const,
      marginBottom: 16,
      color: colors.text,
    },
    settingItem: {
      flexDirection: "row" as const,
      alignItems: "center" as const,
      justifyContent: "space-between" as const,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    settingLeft: {
      flexDirection: "row" as const,
      alignItems: "center" as const,
      gap: 12,
    },
    settingIcon: {
      width: 36,
      height: 36,
      borderRadius: 10,
      justifyContent: "center" as const,
      alignItems: "center" as const,
      backgroundColor: colors.primary,
    },
    settingText: {
      fontSize: 16,
      fontWeight: "600" as const,
      color: colors.text,
    },
  });

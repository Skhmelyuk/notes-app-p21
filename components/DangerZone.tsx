import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DangerZone = () => {
  const { colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  // TODO: Add reset app functionality

  const handleResetApp = async () => {
    // TODO: Implement reset app functionality
  };

  return (
    <View style={settingsStyles.section}>
      <Text style={settingsStyles.sectionTitleDanger}>Danger Zone</Text>

      <TouchableOpacity
        style={[settingsStyles.actionButton, { borderBottomWidth: 0 }]}
        onPress={handleResetApp}
        activeOpacity={0.7}
      >
        <View style={settingsStyles.actionLeft}>
          <View style={settingsStyles.actionIcon}>
            <Ionicons name="trash" size={18} color="#ffffff" />
          </View>
          <Text style={settingsStyles.actionTextDanger}>Reset App</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </TouchableOpacity>
    </View>
  );
};

export default DangerZone;

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
    sectionTitleDanger: {
      fontSize: 18,
      fontWeight: "700" as const,
      marginBottom: 16,
      color: colors.danger,
    },
    actionButton: {
      flexDirection: "row" as const,
      alignItems: "center" as const,
      justifyContent: "space-between" as const,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    actionLeft: {
      flexDirection: "row" as const,
      alignItems: "center" as const,
      gap: 12,
    },
    actionIcon: {
      width: 36,
      height: 36,
      borderRadius: 10,
      justifyContent: "center" as const,
      alignItems: "center" as const,
      backgroundColor: colors.danger,
    },
    actionTextDanger: {
      fontSize: 16,
      fontWeight: "600" as const,
      color: colors.danger,
    },
  });

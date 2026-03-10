import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  totalNotes: number;
  completedNotes: number;
}

export const Header = ({ totalNotes, completedNotes }: HeaderProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const progressPercentage = 0;

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="flash-outline" size={28} color="#fff" />
        </View>

        <View style={styles.titleTextContainer}>
          <Text style={styles.title}>Today&apos;s Tasks</Text>
          <Text style={styles.subtitle}>
            {completedNotes} of {totalNotes} completed
          </Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${progressPercentage}%` }]}
            />
          </View>
          <Text style={styles.progressText}>{progressPercentage}%</Text>
        </View>
      </View>
    </View>
  );
};

const createStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    header: {
      paddingVertical: 32,
      paddingBottom: 24,
    },
    titleContainer: {
      flexDirection: "row" as const,
      alignItems: "center" as const,
      marginBottom: 20,
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
    titleTextContainer: {
      flex: 1,
    },
    title: {
      fontSize: 32,
      fontWeight: "700" as const,
      letterSpacing: -1,
      marginBottom: 4,
      color: colors.text,
    },
    subtitle: {
      fontSize: 17,
      fontWeight: "500" as const,
      color: colors.textMuted,
    },
    progressContainer: {
      marginTop: 8,
    },
    progressBarContainer: {
      flexDirection: "row" as const,
      alignItems: "center" as const,
      gap: 16,
    },
    progressBar: {
      flex: 1,
      height: 12,
      borderRadius: 6,
      overflow: "hidden" as const,
      backgroundColor: colors.border,
    },
    progressFill: {
      height: "100%" as const,
      borderRadius: 6,
      backgroundColor: colors.success,
    },
    progressText: {
      fontSize: 16,
      fontWeight: "700" as const,
      minWidth: 40,
      textAlign: "right" as const,
      color: colors.success,
    },
  });

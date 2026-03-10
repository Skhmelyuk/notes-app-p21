import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const ProgressStats = () => {
  const { colors } = useTheme();
  const styles = createProgressStatsStyles(colors);

  const totalTodos = 10;
  const completedTodos = 7;
  const activeTodos = 3;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Progress Stats</Text>

      <View style={styles.statsContainer}>
        {/* TOTAL TODOS */}
        <View style={[styles.statCard, { borderLeftColor: colors.primary }]}>
          <View style={styles.statIconContainer}>
            <View
              style={[styles.statIcon, { backgroundColor: colors.primary }]}
            >
              <Ionicons name="list" size={20} color="#fff" />
            </View>
          </View>

          <View>
            <Text style={styles.statNumber}>{totalTodos}</Text>
            <Text style={styles.statLabel}>Total Todos</Text>
          </View>
        </View>

        {/* COMPLETED TODOS */}
        <View style={[styles.statCard, { borderLeftColor: colors.success }]}>
          <View style={styles.statIconContainer}>
            <View
              style={[styles.statIcon, { backgroundColor: colors.success }]}
            >
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
            </View>
          </View>

          <View>
            <Text style={styles.statNumber}>{completedTodos}</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </View>

        {/* ACTIVE TODOS */}

        <View style={[styles.statCard, { borderLeftColor: colors.warning }]}>
          <View style={styles.statIconContainer}>
            <View
              style={[styles.statIcon, { backgroundColor: colors.warning }]}
            >
              <Ionicons name="time" size={20} color="#fff" />
            </View>
          </View>

          <View>
            <Text style={styles.statNumber}>{activeTodos}</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressStats;

const createProgressStatsStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    section: {
      borderRadius: 20,
      padding: 24,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
      backgroundColor: colors.surface,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "700" as const,
      marginBottom: 20,
      letterSpacing: -0.5,
      color: colors.text,
      backgroundColor: colors.bg,
    },
    sectionTitleDanger: {
      fontSize: 20,
      fontWeight: "700" as const,
      marginBottom: 20,
      letterSpacing: -0.5,
      color: colors.danger,
    },
    statsContainer: {
      gap: 16,
    },
    statCard: {
      flexDirection: "row" as const,
      alignItems: "center" as const,
      padding: 20,
      borderRadius: 16,
      borderLeftWidth: 4,
    },
    statIconContainer: {
      marginRight: 16,
    },
    statIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center" as const,
      alignItems: "center" as const,
    },
    statNumber: {
      fontSize: 28,
      fontWeight: "800" as const,
      letterSpacing: -1,
      color: colors.text,
    },
    statLabel: {
      fontSize: 14,
      fontWeight: "600" as const,
      marginTop: 2,
      color: colors.textMuted,
    },
    dangerText: {
      color: colors.danger,
    },
  });

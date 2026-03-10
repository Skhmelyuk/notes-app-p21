import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { LinearGradient } from "expo-linear-gradient";

interface ItemNoteProps {
  title: string;
  isCompleted: boolean;
  id: Id<"notes">;
}

export function ItemNote({ title, isCompleted, id }: ItemNoteProps) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const toggleNote = useMutation(api.notes.toggleNote);
  const deleteNote = useMutation(api.notes.deleteNote);

  return (
    <View style={styles.todoItemWrapper}>
      <View style={styles.todoItem}>
        <TouchableOpacity
          style={styles.checkbox}
          activeOpacity={0.7}
          onPress={async () => {
            await toggleNote({ id });
          }}
        >
          <View
            style={[
              styles.checkboxInner,
              {
                borderColor: isCompleted ? "transparent" : colors.border,
                backgroundColor: isCompleted ? colors.success : colors.empty,
              },
            ]}
          >
            {isCompleted && (
              <Ionicons name="checkmark" size={18} color="#fff" />
            )}
          </View>
        </TouchableOpacity>

        <View style={styles.todoTextContainer}>
          <Text
            style={[
              styles.todoText,
              isCompleted && {
                textDecorationLine: "line-through",
                color: colors.textMuted,
                opacity: 0.6,
              },
            ]}
          >
            {title}
          </Text>

          <View style={styles.todoActions}>
            <TouchableOpacity
              onPress={async () => {
                await deleteNote({ id });
              }}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={colors.gradients.danger}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={styles.actionButton}
              >
                <Ionicons name="trash" size={14} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const createStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    todoItemWrapper: {
      marginVertical: 12,
    },
    todoItem: {
      flexDirection: "row" as const,
      alignItems: "flex-start" as const,
      padding: 20,
      borderRadius: 20,
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
    checkbox: {
      marginRight: 16,
      marginTop: 2,
    },
    checkboxInner: {
      width: 32,
      height: 32,
      borderRadius: 16,
      borderWidth: 2,
      justifyContent: "center" as const,
      alignItems: "center" as const,
    },
    todoTextContainer: {
      flex: 1,
    },
    todoText: {
      fontSize: 17,
      lineHeight: 24,
      fontWeight: "500" as const,
      marginBottom: 16,
      color: colors.text,
    },
    todoActions: {
      flexDirection: "row" as const,
      gap: 12,
    },
    actionButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center" as const,
      alignItems: "center" as const,
      backgroundColor: colors.danger,
    },
  });

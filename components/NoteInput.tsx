import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { LinearGradient } from "expo-linear-gradient";

export const NoteInput = () => {
  const { colors } = useTheme();
  const homeStyles = createNoteInputStyles(colors);

  const [newNote, setNewNote] = useState<string>("");

  const createNote = useMutation(api.notes.createNote);

  const handleAddNote = async () => {
    await createNote({ title: newNote, completed: false });
    setNewNote("");
  };

  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          style={homeStyles.input}
          placeholder="What needs to be done?"
          value={newNote}
          onChangeText={setNewNote}
          onSubmitEditing={handleAddNote}
          placeholderTextColor={colors.textMuted}
        />
        <TouchableOpacity
          onPress={handleAddNote}
          activeOpacity={0.8}
          disabled={!newNote.trim()}
          style={[
            homeStyles.addButton,
            !newNote.trim() && homeStyles.addButtonDisabled,
          ]}
        >
          <Ionicons name="add" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createNoteInputStyles = (colors: ColorScheme) => {
  return StyleSheet.create({
    inputSection: {
      paddingBottom: 24,
    },
    inputWrapper: {
      flexDirection: "row" as const,
      alignItems: "center" as const,
      gap: 12,
      backgroundColor: colors.surface,
      borderRadius: 20,
      padding: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
    },
    input: {
      flex: 1,
      fontSize: 17,
      paddingHorizontal: 16,
      paddingVertical: 12,
      color: colors.text,
      backgroundColor: colors.backgrounds.input,
      borderRadius: 16,
    },
    addButton: {
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: "center" as const,
      alignItems: "center" as const,
      backgroundColor: colors.primary,
      shadowColor: colors.primary,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    addButtonDisabled: {
      backgroundColor: colors.empty,
      opacity: 0.5,
      shadowOpacity: 0,
      elevation: 0,
    },
  });
};

import { Header } from "@/components/HeaderHome";
import { ItemNote } from "@/components/ItemNote";
import useTheme, { ColorScheme } from "@/hooks/useTheme";

import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NoteInput } from "@/components/NoteInput";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Index() {
  const notes = useQuery(api.notes.getNotes);

  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header totalNotes={100} completedNotes={50} />
        <NoteInput />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={notes}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <ItemNote
              title={item.title}
              isCompleted={item.completed}
              id={item._id}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const createStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.bg,
    },
    container: {
      flex: 1,
      backgroundColor: colors.bg,
      paddingInline: 12,
    },
    listContent: {
      paddingHorizontal: 24,
      paddingBottom: 24,
    },
  });

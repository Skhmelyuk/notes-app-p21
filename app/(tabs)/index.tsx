import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Note {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Index() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((respose) => respose.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>My Notes</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
              <TouchableOpacity>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: "grey",
    fontSize: 18,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 2,
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    marginBottom: 16,
    color: "green",
  },
});

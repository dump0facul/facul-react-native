import { Pressable, StyleSheet, Text, View } from "react-native";
import useHasPress from "./hooks/useHasPress";

export default function AsyncStorageScreen() {
  const { hasPress, onPress } = useHasPress();

  const color = hasPress ? "#dcee75" : "#beee";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AsyncStorage Example</Text>
      </View>
      <View>
        <Pressable onPress={onPress}>
          <View style={[styles.button, { backgroundColor: color }]}>
            <Text style={styles.buttonText}>Press to change color</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#dcee75",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
});

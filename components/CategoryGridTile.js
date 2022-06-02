import { Pressable, Text, View, StyleSheet } from "react-native";
import { Platform } from "react-native-web";
const CategoryGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPress : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={props.onPress}
      >
        <View
          style={[styles.innerContainer, , { backgroundColor: props.color }]}
        >
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonPress: {
    opacity: 0.5,
  },
});

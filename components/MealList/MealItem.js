import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import MealDetails from "../MealDetails";
const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPress : null
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={props.onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: props.image }} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <MealDetails
            duration={props.duration}
            complexity={props.complexity}
            affordability={props.affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;
const styles = StyleSheet.create({
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8
  },
  button: {
    flex: 1
  },
  buttonPress: {
    opacity: 0.5
  }
});

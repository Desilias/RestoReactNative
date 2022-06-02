import { Pressable, View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const IconButton = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={(pressed) => pressed && styles.pressed}
      android_ripple={{ color: "#ccc" }}
    >
      <Ionicons name={props.icon} size={24} color={props.color} />
    </Pressable>
  );
};
export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
});

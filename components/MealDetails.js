import { View, Text, StyleSheet } from "react-native";
const MealDetails = (props) => {
  return (
    <View style={[styles.details, props.style]}>
      <Text style={[styles.detail, props.textStyle]}>{props.duration}m</Text>
      <Text style={[styles.detail, props.textStyle]}>{props.complexity}</Text>
      <Text style={[styles.detail, props.textStyle]}>
        {props.affordability}
      </Text>
    </View>
  );
};
export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8
  },
  detail: {
    marginHorizontal: 4,
    fontSize: 12
  }
});

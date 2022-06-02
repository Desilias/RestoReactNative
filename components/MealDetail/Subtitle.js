import { Text, View, StyleSheet } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
const Subtitle = (props) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{props.children}</Text>
    </View>
  );
};
export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "white",
    borderBottomWidth: 2
  }
});

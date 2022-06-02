import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      image: item.imageUrl
    };
    const detailHanler = () => {
      props.mealDetailHandler(mealItemProps.id);
    };

    return <MealItem {...mealItemProps} onPress={detailHanler} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={props.displayMeals}
        renderItem={renderMealItem}
        key={(item) => {
          item.id;
        }}
      />
    </View>
  );
};
export default MealList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

import { StyleSheet, View, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

const MealsOverViewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const titlecategory = CATEGORIES.find((category) => {
      return category.id === categoryId;
    }).title;
    navigation.setOptions({ title: titlecategory });
  }, [categoryId, navigation]);

  const mealDetailHandler = (id) => {
    console.log(id);
    navigation.navigate("MealDetail", {
      mealId: id
    });
  };

  return (
    <MealList
      displayMeals={displayMeals}
      mealDetailHandler={mealDetailHandler}
    />
  );
};
export default MealsOverViewScreen;
const styles = StyleSheet.create({});

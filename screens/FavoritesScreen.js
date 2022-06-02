import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/contex/favorites-contex";
import { MEALS } from "../data/dummy-data";
const FavoritesScreen = () => {
  const favoritesMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoritesMealsCtx.ids.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorites yet .</Text>
      </View>
    );
  }
  return <MealList displayMeals={favoriteMeals} />;
};
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
});

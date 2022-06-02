import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useContext } from "react";
import { FavoritesContext } from "../store/contex/favorites-contex";
const MealDetailScreen = ({ route, navigation }) => {
  const favoritesMealsCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealsFavorites = favoritesMealsCtx.ids.includes(mealId);
  const buttonHandler = () => {
    if (mealsFavorites) {
      favoritesMealsCtx.removeFavorite(mealId);
    } else {
      favoritesMealsCtx.addFavorite(mealId);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealsFavorites ? "star" : "star-outline"}
            color="white"
            onPress={buttonHandler}
          />
        );
      }
    });
  }, [navigation, buttonHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.outerContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MealDetailScreen;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#e2b497"
  },
  detailText: {
    color: "white"
  },
  listContainer: {
    width: "80%"
  },
  outerContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  rootContainer: {
    marginBottom: 32
  }
});

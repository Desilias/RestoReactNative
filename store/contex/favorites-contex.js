import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});

const FavoritesContextProvider = (props) => {
  const [favoritesMealsIds, setFavoritesMealsIds] = useState([]);
  const addFavorite = (id) => {
    setFavoritesMealsIds((currentFavIds) => [...currentFavIds, id]);
  };
  const removeFavorite = (id) => {
    setFavoritesMealsIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoritesMealsIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  };

  return (
    <FavoritesContext.Provider value={value}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContextProvider;

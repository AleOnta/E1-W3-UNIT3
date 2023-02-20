export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addFavouriteCompany = (data) => ({
  type: ADD_TO_FAVOURITES,
  payload: data,
});

export const removeFavouriteCompany = (index) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: index,
});

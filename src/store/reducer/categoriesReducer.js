const initialState = {
  categories: [],
  isLoading: false,
};

export const uploadCategories = () => {
  return async (dispatch) => {
    dispatch({ type: "UPLOAD_CATEGORIES_PENDING" });
    const res = await fetch("https://unicode-blog.onrender.com/categories");
    const data = await res.json();
    dispatch({ type: "UPLOAD_CATEGORIES_FULLFILLED", payload: data });
  };
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_CATEGORIES_PENDING":
      return { ...state, isLoading: true };
    case "UPLOAD_CATEGORIES_FULLFILLED":
      return { ...state, categories: action.payload, isLoading: false };
    default:
      return state;
  }
};

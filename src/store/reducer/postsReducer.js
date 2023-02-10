const initialState = {
  posts: [],
  isLoading: false,
};

export const uploadPosts = () => {
  return async (dispatch) => {
    dispatch({ type: "UPLOAD_POSTS_PENDING" });
    const res = await fetch("https://unicode-blog.onrender.com/posts");
    const data = await res.json();
    dispatch({ type: "UPLOAD_POSTS_FULLFILLED", payload: data });
  };
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_POSTS_PENDING":
      return { ...state, isLoading: true };
    case "UPLOAD_POSTS_FULLFILLED":
      return { ...state, posts: action.payload, isLoading: false };
    default:
      return state;
  }
};

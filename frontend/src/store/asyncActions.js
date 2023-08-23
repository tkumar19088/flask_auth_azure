// store/asyncActions.js
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_START" });

    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };
};

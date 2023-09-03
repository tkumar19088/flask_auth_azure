const initialState = {
  // Use "initialState" with a capital "S"
  sellinforecast: false,
  selloutforecast: false,
  oosrisk: false,
  irregularpo: false,
  reallocation: false,
  filterstatus: false,
  userDetails: {},
  overviewhighriskdata: [],
  expandedItem: null,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SELLINFORECAST":
      return {
        ...state,
        sellinforecast: action.payload,
        selloutforecast: false,
        oosrisk: false,
        irregularpo: false,
        reallocation: false,
      };
    case "FETCH_SELLOUTFORECAST":
      return {
        ...state,
        sellinforecast: false,
        selloutforecast: action.payload,
        oosrisk: false,
        irregularpo: false,
        reallocation: false,
      };
    case "FETCH_OOSRISK":
      return {
        ...state,
        sellinforecast: false,
        selloutforecast: false,
        oosrisk: action.payload,
        irregularpo: false,
        reallocation: false,
      };
    case "FETCH_IRREGULARPO":
      return {
        ...state,
        sellinforecast: false,
        selloutforecast: false,
        oosrisk: false,
        irregularpo: action.payload,
        reallocation: false,
      };
    case "FETCH_REALLOCATION":
      return {
        ...state,
        sellinforecast: false,
        selloutforecast: false,
        oosrisk: false,
        irregularpo: false,
        reallocation: action.payload,
      };
    case "FETCH_FILTERSTATUS":
      return {
        ...state,
        filterstatus: action.payload,
      };
    case "FETCH_USERDETAILS":
      return {
        ...state,
        userDetails: action.payload,
      };
    case "FETCH_OVERVIEWHIGHRISKDATA":
      return {
        ...state,
        overviewhighriskdata: action.payload,
      };
    case "FETCH_EXPANDEDITEM":
      return {
        ...state,
        expandedItem: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;

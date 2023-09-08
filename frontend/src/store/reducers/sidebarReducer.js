const initialState = {
  // Use "initialState" with a capital "S"
  sellinforecast: false,
  selloutforecast: false,
  oosrisk: false,
  irregularpo: false,
  reallocation: false,
  filterstatus: false,
  userDetails: {
    Name: "Moka Keerthi",
    Email: "keerthi.moka@artefact.com",
    Customer: ["Asda", "Amazon"],
    Location: ["United Kingdom", "Australia"],
    Brand: ["Airwick", "Durex"],
    "Business Unit": ["Nutrition", "Hygiene", "Health"],
    Role: "admin",
  },
  overviewhighriskdata: [],
  overviewcustomerdata: [],
  stockreallocation: [],
  filteredOHRdata: [],
  expandedItem: null,
  loader: false,
  customer: 0,
  reckittsupply: [],
  reckittdemand: [],
  reckittexpectedsoh: [],
  reckittwoc: [],
  reckittcaseshortages: [],
  reckittexpectedservice: [],
  reckittstockposition: [],
  customerhistoric: [],
  customersellout: [],
  customersellin: [],
  customerstockposition: [],
  customerola: [],
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
    case "FETCH_OVERVIEWCUSTOMERDATA":
      return {
        ...state,
        overviewcustomerdata: action.payload,
      };
    case "FETCH_STOCKREALLOCATIONDATA":
      return {
        ...state,
        stockreallocation: action.payload,
      };
    case "FETCH_EXPANDEDITEM":
      return {
        ...state,
        expandedItem: action.payload,
      };
    case "UPDATE_LOADER":
      return {
        ...state,
        loader: action.payload,
      };
    case "UPDATE_CUSTOMER":
      return {
        ...state,
        customer: action.payload,
      };
    case "FETCH_RECKITTSUPPLY":
      return {
        ...state,
        reckittsupply: action.payload,
      };
    case "FETCH_RECKITTDEMAND":
      return {
        ...state,
        reckittdemand: action.payload,
      };
    case "FETCH_RECKITTEXPECTEDSOH":
      return {
        ...state,
        reckittexpectedsoh: action.payload,
      };
    case "FETCH_RECKITTWOC":
      return {
        ...state,
        reckittwoc: action.payload,
      };
    case "FETCH_RECKITTCASESHORTAGES":
      return {
        ...state,
        reckittcaseshortages: action.payload,
      };
    case "FETCH_RECKITTEXPECTEDSERVICE":
      return {
        ...state,
        reckittexpectedservice: action.payload,
      };
    case "FETCH_RECKITTSTOCKPOSITION":
      return {
        ...state,
        reckittstockposition: action.payload,
      };
    case "FETCH_CUSTOMERHESTORIC":
      return {
        ...state,
        customerhistoric: action.payload,
      };
    case "FETCH_CUSTOMERSELLOUT":
      return {
        ...state,
        customersellout: action.payload,
      };
    case "FETCH_CUSTOMERSELLIN":
      return {
        ...state,
        customersellin: action.payload,
      };
    case "FETCH_CUSTOMERSTOCKPOSITION":
      return {
        ...state,
        customerstockposition: action.payload,
      };
    case "FETCH_CUSTOMEROLA":
      return {
        ...state,
        customerola: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;

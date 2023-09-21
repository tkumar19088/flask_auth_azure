const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const firstDayOfYear = new Date(currentYear, 0, 1);
const dayDifference = Math.floor(
  (currentDate - firstDayOfYear) / (24 * 60 * 60 * 1000)
);
const currentWeek = Math.ceil((dayDifference + 1) / 7);
const initialState = {
  // Use "initialState" with a capital "S"
  currentWeekNumber: currentWeek,
  sellinforecast: false,
  selloutforecast: false,
  oosrisk: false,
  irregularpo: false,
  reallocation: false,
  filterstatus: false,
  business: "",
  location: "",
  customerfilter: "",
  brand: "",
  apply: false,
  businessEmpty: false,
  locationEmpty: false,
  alerts: [],
  userDetails: {
    Brand: ["Airwick", "Gaviscon"],
    "Business Unit": ["Hygiene", "Health"],
    Customer: ["Asda", "Amazon"],
    Email: "keerthi.moka@artefact.com",
    Location: ["United Kingdom"],
    Name: "",
    Role: "admin",
  },
  overviewhighriskdata: [],
  filteredoverviewhighriskdata: [],
  isragfilterohr: false,
  overviewcustomerdata: [],
  filteredcustomerdata: [],
  isragfiltercustomer: false,
  stockreallocation: {
    constraints: [
      {
        Label: 0,
        Name: "PCT DEVIATION FROM INIT ALLOC",
        Value: "5",
      },
      {
        Label: 1,
        Name: "MIN Expected Service Level",
        Value: "95",
      },
      {
        Label: 2,
        Name: "MIN Deviation from Target WOC",
        Value: 4,
      },
      {
        Label: 2,
        Name: "MAZ Deviation from Target WOC",
        Value: 8,
      },
    ],
    otherrows: [],
    results: [
      {
        Name: "AVG EXP SERVICE LEVEL",
        Value: "100%",
      },
      {
        Name: "EXP OLA",
        Value: "99%",
      },
    ],
    staticrow: {},
  },
  suggectedRecord: {
    AvgYTDsellout: 600,
    Brand: "Airwick",
    "Business Unit": "Health",
    Channel: "Pharmacy",
    Customer: "Asda",
    Location: "Germany",
    "RB SKU": "3247398",
    "Sell out": 600,
    allocationconsumed: 180,
    cmuscore: 7.44,
    currentallocation: 400,
    newallocation: "-",
    currentcustSOH: 400,
    "custsoh-current": 1000,
    "custsoh-target": 900,
    "custwoc-current": 2,
    "custwoc-target": 4,
    expectedservicelevel: 0.94,
    idealallocationvalues: 800,
    openorders: 180,
    remainingallocation: 220,
    "sif-atf": 900,
    "sif-reckitt": 800,
    stocksafetoreallocate: 36,
    suggestedallocation: 2,
    sumofPOsinalloccycle: 900,
    testReallocation: 0,
  },
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
  updateresults: false,
  exporttabledata: [],
  taburl: "",
  search: false,
  isWithinChannel: true,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CURRENTWEEK":
      return {
        ...state,
        currentWeekNumber: action.payload,
      };
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
    case "FETCH_FILTEREDOVERVIEWHIGHRISKDATA":
      return {
        ...state,
        filteredoverviewhighriskdata: action.payload,
      };
    case "RESET_RAGFILTERSOHR":
      return {
        ...state,
        filteredoverviewhighriskdata: [],
      };
    case "FLAG_RAGFILTERSOHR":
      return {
        ...state,
        isragfilterohr: action.payload,
      };
    case "FETCH_FILTEREDCUSTOMERDATA":
      return {
        ...state,
        filteredcustomerdata: action.payload,
      };
    case "RESET_RAGFILTERSCUSTOMER":
      return {
        ...state,
        filteredcustomerdata: [],
      };
    case "FLAG_RAGFILTERSCUSTOMER":
      return {
        ...state,
        isragfiltercustomer: action.payload,
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
    case "FETCH_STATICROW":
      return {
        ...state,
        suggectedRecord: action.payload,
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
    case "UPDATE_RESULTS":
      return {
        ...state,
        updateresults: action.payload,
      };
    case "UPDATE_EXPORTTABLEDATA":
      return {
        ...state,
        exporttabledata: action.payload,
      };
    case "FETCH_BUSINESS":
      return {
        ...state,
        business: action.payload,
      };
    case "FETCH_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "FETCH_CUSTOMER":
      return {
        ...state,
        customerfilter: action.payload,
      };
    case "FETCH_BRAND":
      return {
        ...state,
        brand: action.payload,
      };
    case "FETCH_BUSINESSEMPTY":
      return {
        ...state,
        businessEmpty: action.payload,
      };
    case "FETCH_LOCATIONEMPTY":
      return {
        ...state,
        locationEmpty: action.payload,
      };
    case "FETCH_FILTERAPPLY":
      return {
        ...state,
        apply: action.payload,
      };
    case "FETCH_ALERTS":
      return {
        ...state,
        alerts: action.payload,
      };
    case "FETCH_TABURL":
      return {
        ...state,
        taburl: action.payload,
      };
    case "UPDATE_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "UPDATE_ISWITHINCHANNEL":
      return {
        ...state,
        isWithinChannel: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;

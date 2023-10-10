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
  alertsreset: [],
  userDetails: {
    Brand: ["Airwick", "Gaviscon"],
    "Business Unit": ["Hygiene", "Health"],
    Customer: ["Asda", "Amazon"],
    Email: "keerthi.moka@artefact.com",
    Location: ["United Kingdom"],
    Name: "",
    Role: "admin",
  },
  userDetailsreset: {},
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
        Name: "PCT Deviation From Init Alloc %",
        Value: 5,
      },
      {
        Label: 1,
        Name: "MIN Expected Service Level %",
        Value: 95,
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
    otherrows: [
      {
        AvgYTDsellout: 200,
        Brand: "Airwick",
        Channel: "Pure Play",
        Customer: "Ocado",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 200,
        "Supply to Reallocate": 0,
        allocationconsumed: 904,
        cmuscore: 4.5,
        currentallocation: 1306.5,
        currentcustSOH: 7034.0,
        "custsoh-current": 6020,
        "custsoh-target": 10452,
        "custwoc-current": 35.17,
        "custwoc-target": 6,
        expectedservicelevel: "75%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 310,
        remainingallocation: 402.5,
        "sif-atf": 900,
        "sif-reckitt": 1742,
        stocksafetoreallocate: 0,
        suggestedallocation: -1306.5,
        sumofPOsinalloccycle: 904,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Asda",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 1230,
        cmuscore: 5.0,
        currentallocation: 1802.0,
        currentcustSOH: 6234.0,
        "custsoh-current": 5002,
        "custsoh-target": 5520,
        "custwoc-current": 62.34,
        "custwoc-target": 3,
        expectedservicelevel: "98%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 102,
        remainingallocation: 572.0,
        "sif-atf": 900,
        "sif-reckitt": 1840,
        stocksafetoreallocate: 0,
        suggestedallocation: -1802.0,
        sumofPOsinalloccycle: 1230,
      },
      {
        AvgYTDsellout: 200,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Waitrose",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 300,
        "Supply to Reallocate": 0,
        allocationconsumed: 1024,
        cmuscore: 3.2,
        currentallocation: 2004.0,
        currentcustSOH: 5135.0,
        "custsoh-current": 4359,
        "custsoh-target": 3128,
        "custwoc-current": 25.675,
        "custwoc-target": 2,
        expectedservicelevel: "100%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 52,
        remainingallocation: 980.0,
        "sif-atf": 900,
        "sif-reckitt": 1564,
        stocksafetoreallocate: 440,
        suggestedallocation: -2004.0,
        sumofPOsinalloccycle: 1024,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Morrisons",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 0,
        cmuscore: 3.2,
        currentallocation: 1230.0,
        currentcustSOH: 7943.0,
        "custsoh-current": 8043,
        "custsoh-target": 7200,
        "custwoc-current": 79.43,
        "custwoc-target": 5,
        expectedservicelevel: "85%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 0,
        remainingallocation: 1230.0,
        "sif-atf": 900,
        "sif-reckitt": 1440,
        stocksafetoreallocate: 692,
        suggestedallocation: -1230.0,
        sumofPOsinalloccycle: 902,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Tesco",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 0,
        cmuscore: 4.3,
        currentallocation: 3039.0,
        currentcustSOH: 8802.0,
        "custsoh-current": 8800,
        "custsoh-target": 7000,
        "custwoc-current": 88.02,
        "custwoc-target": 4,
        expectedservicelevel: "100%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 102,
        remainingallocation: 3039.0,
        "sif-atf": 900,
        "sif-reckitt": 1750,
        stocksafetoreallocate: 2493,
        suggestedallocation: -3039.0,
        sumofPOsinalloccycle: 1204,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Sainsburys",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 0,
        cmuscore: 2.7,
        currentallocation: 1402.0,
        currentcustSOH: 2240.0,
        "custsoh-current": 2340,
        "custsoh-target": 4960,
        "custwoc-current": 22.4,
        "custwoc-target": 4,
        expectedservicelevel: "100%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 0,
        remainingallocation: 1402.0,
        "sif-atf": 900,
        "sif-reckitt": 1240,
        stocksafetoreallocate: 802,
        suggestedallocation: -1402.0,
        sumofPOsinalloccycle: 640,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Discounter",
        Customer: "TJ Morris",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 502,
        cmuscore: 3.1,
        currentallocation: 751.5,
        currentcustSOH: 5853.0,
        "custsoh-current": 5400,
        "custsoh-target": 3006,
        "custwoc-current": 58.53,
        "custwoc-target": 3,
        expectedservicelevel: "75%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 51,
        remainingallocation: 249.5,
        "sif-atf": 900,
        "sif-reckitt": 1002,
        stocksafetoreallocate: 0,
        suggestedallocation: -751.5,
        sumofPOsinalloccycle: 502,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Discounter",
        Customer: "Lidl",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 320,
        cmuscore: 3.9,
        currentallocation: 1402.0,
        currentcustSOH: 5863.0,
        "custsoh-current": 5430,
        "custsoh-target": 2486,
        "custwoc-current": 58.63,
        "custwoc-target": 2,
        expectedservicelevel: "100%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 213,
        remainingallocation: 1082.0,
        "sif-atf": 900,
        "sif-reckitt": 1243,
        stocksafetoreallocate: 159,
        suggestedallocation: -1402.0,
        sumofPOsinalloccycle: 320,
      },
    ],
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
    staticrow: {
      AvgYTDsellout: 100,
      Brand: "Airwick",
      Channel: "Pure Play",
      Customer: "Amazon",
      Location: "United Kingdom",
      "RB SKU": "3247398",
      "Sell out": 100,
      "Supply to Reallocate": 0,
      allocationconsumed: 1440,
      cmuscore: 2.2,
      currentallocation: 1519.5,
      currentcustSOH: 6421.5,
      "custsoh-current": 5002,
      "custsoh-target": 8104,
      "custwoc-current": 64.215,
      "custwoc-target": 4,
      expectedservicelevel: "75%",
      idealallocationvalues: 0,
      newallocation: 0,
      openorders: 266,
      remainingallocation: 79.5,
      "sif-atf": 900,
      "sif-reckitt": 2026,
      stocksafetoreallocate: 0,
      suggestedallocation: -1519.5,
      sumofPOsinalloccycle: 1440,
    },
  },
  withinChannelData: {
    constraints: [
      {
        Label: 0,
        Name: "PCT Deviation From Init Alloc %",
        Value: 5,
      },
      {
        Label: 1,
        Name: "MIN Expected Service Level %",
        Value: 95,
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
    otherrows: [
      {
        AvgYTDsellout: 200,
        Brand: "Airwick",
        Channel: "Pure Play",
        Customer: "Ocado",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 200,
        "Supply to Reallocate": 0,
        allocationconsumed: 904,
        cmuscore: 4.5,
        currentallocation: 1306.5,
        currentcustSOH: 7034.0,
        "custsoh-current": 6020,
        "custsoh-target": 10452,
        "custwoc-current": 35.17,
        "custwoc-target": 6,
        expectedservicelevel: "75%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 310,
        remainingallocation: 402.5,
        "sif-atf": 900,
        "sif-reckitt": 1742,
        stocksafetoreallocate: 0,
        suggestedallocation: -1306.5,
        sumofPOsinalloccycle: 904,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Asda",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 1230,
        cmuscore: 5.0,
        currentallocation: 1802.0,
        currentcustSOH: 6234.0,
        "custsoh-current": 5002,
        "custsoh-target": 5520,
        "custwoc-current": 62.34,
        "custwoc-target": 3,
        expectedservicelevel: "98%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 102,
        remainingallocation: 572.0,
        "sif-atf": 900,
        "sif-reckitt": 1840,
        stocksafetoreallocate: 0,
        suggestedallocation: -1802.0,
        sumofPOsinalloccycle: 1230,
      },
      {
        AvgYTDsellout: 200,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Waitrose",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 300,
        "Supply to Reallocate": 0,
        allocationconsumed: 1024,
        cmuscore: 3.2,
        currentallocation: 2004.0,
        currentcustSOH: 5135.0,
        "custsoh-current": 4359,
        "custsoh-target": 3128,
        "custwoc-current": 25.675,
        "custwoc-target": 2,
        expectedservicelevel: "100%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 52,
        remainingallocation: 980.0,
        "sif-atf": 900,
        "sif-reckitt": 1564,
        stocksafetoreallocate: 440,
        suggestedallocation: -2004.0,
        sumofPOsinalloccycle: 1024,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Morrisons",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 0,
        cmuscore: 3.2,
        currentallocation: 1230.0,
        currentcustSOH: 7943.0,
        "custsoh-current": 8043,
        "custsoh-target": 7200,
        "custwoc-current": 79.43,
        "custwoc-target": 5,
        expectedservicelevel: "85%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 0,
        remainingallocation: 1230.0,
        "sif-atf": 900,
        "sif-reckitt": 1440,
        stocksafetoreallocate: 692,
        suggestedallocation: -1230.0,
        sumofPOsinalloccycle: 902,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Tesco",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 0,
        cmuscore: 4.3,
        currentallocation: 3039.0,
        currentcustSOH: 8802.0,
        "custsoh-current": 8800,
        "custsoh-target": 7000,
        "custwoc-current": 88.02,
        "custwoc-target": 4,
        expectedservicelevel: "100%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 102,
        remainingallocation: 3039.0,
        "sif-atf": 900,
        "sif-reckitt": 1750,
        stocksafetoreallocate: 2493,
        suggestedallocation: -3039.0,
        sumofPOsinalloccycle: 1204,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Sainsburys",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 0,
        cmuscore: 2.7,
        currentallocation: 1402.0,
        currentcustSOH: 2240.0,
        "custsoh-current": 2340,
        "custsoh-target": 4960,
        "custwoc-current": 22.4,
        "custwoc-target": 4,
        expectedservicelevel: "100%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 0,
        remainingallocation: 1402.0,
        "sif-atf": 900,
        "sif-reckitt": 1240,
        stocksafetoreallocate: 802,
        suggestedallocation: -1402.0,
        sumofPOsinalloccycle: 640,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Discounter",
        Customer: "TJ Morris",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 502,
        cmuscore: 3.1,
        currentallocation: 751.5,
        currentcustSOH: 5853.0,
        "custsoh-current": 5400,
        "custsoh-target": 3006,
        "custwoc-current": 58.53,
        "custwoc-target": 3,
        expectedservicelevel: "75%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 51,
        remainingallocation: 249.5,
        "sif-atf": 900,
        "sif-reckitt": 1002,
        stocksafetoreallocate: 0,
        suggestedallocation: -751.5,
        sumofPOsinalloccycle: 502,
      },
      {
        AvgYTDsellout: 100,
        Brand: "Airwick",
        Channel: "Discounter",
        Customer: "Lidl",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 100,
        "Supply to Reallocate": 0,
        allocationconsumed: 320,
        cmuscore: 3.9,
        currentallocation: 1402.0,
        currentcustSOH: 5863.0,
        "custsoh-current": 5430,
        "custsoh-target": 2486,
        "custwoc-current": 58.63,
        "custwoc-target": 2,
        expectedservicelevel: "100%",
        idealallocationvalues: 0,
        newallocation: 0,
        openorders: 213,
        remainingallocation: 1082.0,
        "sif-atf": 900,
        "sif-reckitt": 1243,
        stocksafetoreallocate: 159,
        suggestedallocation: -1402.0,
        sumofPOsinalloccycle: 320,
      },
    ],
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
    staticrow: {
      AvgYTDsellout: 100,
      Brand: "Airwick",
      Channel: "Pure Play",
      Customer: "Amazon",
      Location: "United Kingdom",
      "RB SKU": "3247398",
      "Sell out": 100,
      "Supply to Reallocate": 0,
      allocationconsumed: 1440,
      cmuscore: 2.2,
      currentallocation: 1519.5,
      currentcustSOH: 6421.5,
      "custsoh-current": 5002,
      "custsoh-target": 8104,
      "custwoc-current": 64.215,
      "custwoc-target": 4,
      expectedservicelevel: "75%",
      idealallocationvalues: 0,
      newallocation: 0,
      openorders: 266,
      remainingallocation: 79.5,
      "sif-atf": 900,
      "sif-reckitt": 2026,
      stocksafetoreallocate: 0,
      suggestedallocation: -1519.5,
      sumofPOsinalloccycle: 1440,
      testReallocation: "",
    },
  },
  filteredOHRdata: [],
  expandedItem: 0,
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
  applyfilterserror: false,
  searchvalue: "",
  tabname: "overview",
  ragfilters: [
    {
      cwr: false,
      cwa: false,
      cwg: false,
    },
    {
      cw1r: false,
      cw1a: false,
      cw1g: false,
    },
    {
      cw2r: false,
      cw2a: false,
      cw2g: false,
    },
    {
      cw3r: false,
      cw3a: false,
      cw3g: false,
    },
  ],
  customerragfilters: [
    {
      cwr: false,
      cwa: false,
      cwg: false,
    },
    {
      cw1r: false,
      cw1a: false,
      cw1g: false,
    },
    {
      cw2r: false,
      cw2a: false,
      cw2g: false,
    },
    {
      cw3r: false,
      cw3a: false,
      cw3g: false,
    },
  ],
  skulist: [],
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
    case "FETCH_USERDETAILSRESET":
      return {
        ...state,
        userDetailsreset: action.payload,
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
    case "FETCH_ALERTSRESET":
      return {
        ...state,
        alertsreset: action.payload,
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
    case "UPDATE_APPLYFILTERSERROR":
      return {
        ...state,
        applyfilterserror: action.payload,
      };
    case "UPDATE_SEARCHVALUE":
      return {
        ...state,
        searchvalue: action.payload,
      };
    case "UPDATE_TABNAME":
      return {
        ...state,
        tabname: action.payload,
      };
    case "UPDATE_RAGFILTERS":
      return {
        ...state,
        ragfilters: action.payload,
      };
    case "UPDATE_CUSTOMERRAGFILTERS":
      return {
        ...state,
        customerragfilters: action.payload,
      };
    case "UPDATE_SKULIST":
      return {
        ...state,
        skulist: action.payload,
      };
    case "UPDATE_WITHINCHANNELDATA":
      return {
        ...state,
        withinChannelData: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;

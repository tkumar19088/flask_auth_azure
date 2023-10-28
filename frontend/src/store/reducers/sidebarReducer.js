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
    other_rows: [
      {
        AvgYTDsellout: 281,
        Brand: "Airwick",
        Channel: "Pure Play",
        Customer: "Ocado",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 273,
        "Supply to Reallocate": 0,
        allocationconsumed: 36,
        cmuscore: 4.5,
        currentallocation: 116,
        currentcustSOH: 230,
        "custsoh-current": 123,
        "custsoh-target": 1685,
        "custwoc-current": 0.4,
        "custwoc-target": 6,
        expectedservicelevel: "75%",
        idealallocationvalues: 166,
        newallocation: 0,
        openorders: 41,
        remainingallocation: 130,
        "sif-atf": 221,
        "sif-reckitt": 1742,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 36,
      },
      {
        AvgYTDsellout: 689,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Asda",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 579,
        "Supply to Reallocate": 0,
        allocationconsumed: 37,
        cmuscore: 5,
        currentallocation: 456,
        currentcustSOH: 182,
        "custsoh-current": 59,
        "custsoh-target": 2067,
        "custwoc-current": 0.1,
        "custwoc-target": 3,
        expectedservicelevel: "100%",
        idealallocationvalues: 413,
        newallocation: 0,
        openorders: 46,
        remainingallocation: 419,
        "sif-atf": 413,
        "sif-reckitt": 1840,
        stocksafetoreallocate: 43,
        suggestedallocation: -43,
        sumofPOsinalloccycle: 37,
      },
      {
        AvgYTDsellout: 422,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Waitrose",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 406,
        "Supply to Reallocate": 0,
        allocationconsumed: 56,
        cmuscore: 3.2,
        currentallocation: 326,
        currentcustSOH: 116,
        "custsoh-current": 36,
        "custsoh-target": 844,
        "custwoc-current": 0.1,
        "custwoc-target": 2,
        expectedservicelevel: "75%",
        idealallocationvalues: 326,
        newallocation: 0,
        openorders: 78,
        remainingallocation: 270,
        "sif-atf": 434,
        "sif-reckitt": 1564,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 56,
      },
      {
        AvgYTDsellout: 152,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Morrisons",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 127,
        "Supply to Reallocate": 0,
        allocationconsumed: 3,
        cmuscore: 3.2,
        currentallocation: 108,
        currentcustSOH: 256,
        "custsoh-current": 236,
        "custsoh-target": 761,
        "custwoc-current": 1.6,
        "custwoc-target": 5,
        expectedservicelevel: "75%",
        idealallocationvalues: 108,
        newallocation: 0,
        openorders: 5,
        remainingallocation: 104,
        "sif-atf": 143,
        "sif-reckitt": 1440,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 3,
      },
      {
        AvgYTDsellout: 290,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Tesco",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 274,
        "Supply to Reallocate": 0,
        allocationconsumed: 31,
        cmuscore: 4.3,
        currentallocation: 191,
        currentcustSOH: 220,
        "custsoh-current": 137,
        "custsoh-target": 1160,
        "custwoc-current": 0.5,
        "custwoc-target": 4,
        expectedservicelevel: "75%",
        idealallocationvalues: 191,
        newallocation: 0,
        openorders: 33,
        remainingallocation: 160,
        "sif-atf": 255,
        "sif-reckitt": 1750,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 31,
      },
      {
        AvgYTDsellout: 345,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Sainsburys",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 352,
        "Supply to Reallocate": 0,
        allocationconsumed: 34,
        cmuscore: 2.7,
        currentallocation: 272,
        currentcustSOH: 102,
        "custsoh-current": 22,
        "custsoh-target": 1381,
        "custwoc-current": 0.1,
        "custwoc-target": 4,
        expectedservicelevel: "75%",
        idealallocationvalues: 272,
        newallocation: 0,
        openorders: 37,
        remainingallocation: 238,
        "sif-atf": 363,
        "sif-reckitt": 1240,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 34,
      },
      {
        AvgYTDsellout: 401,
        Brand: "Airwick",
        Channel: "Discounter",
        Customer: "TJ Morris",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 436,
        "Supply to Reallocate": 0,
        allocationconsumed: 77,
        cmuscore: 3.1,
        currentallocation: 376,
        currentcustSOH: 17,
        "custsoh-current": 0,
        "custsoh-target": 1204,
        "custwoc-current": 0.0,
        "custwoc-target": 3,
        expectedservicelevel: "75%",
        idealallocationvalues: 376,
        newallocation: 0,
        openorders: 51,
        remainingallocation: 300,
        "sif-atf": 502,
        "sif-reckitt": 1002,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 77,
      },
      {
        AvgYTDsellout: 483,
        Brand: "Airwick",
        Channel: "Discounter",
        Customer: "Lidl",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 498,
        "Supply to Reallocate": 0,
        allocationconsumed: 54,
        cmuscore: 3.9,
        currentallocation: 358,
        currentcustSOH: 103,
        "custsoh-current": 0,
        "custsoh-target": 965,
        "custwoc-current": 0.0,
        "custwoc-target": 2,
        expectedservicelevel: "100%",
        idealallocationvalues: 332,
        newallocation: 0,
        openorders: 68,
        remainingallocation: 304,
        "sif-atf": 332,
        "sif-reckitt": 1243,
        stocksafetoreallocate: 26,
        suggestedallocation: -26,
        sumofPOsinalloccycle: 54,
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
    static_row: {
      AvgYTDsellout: 387,
      Brand: "Airwick",
      Channel: "Pure Play",
      Customer: "Amazon",
      Location: "United Kingdom",
      "RB SKU": "3247398",
      "Sell out": 387,
      "Supply to Reallocate": 0,
      allocationconsumed: 26,
      cmuscore: 2.2,
      currentallocation: 310,
      currentcustSOH: 259,
      "custsoh-current": 182,
      "custsoh-target": 1546,
      "custwoc-current": 0.5,
      "custwoc-target": 4,
      expectedservicelevel: "75%",
      idealallocationvalues: 379,
      newallocation: 0,
      openorders: 23,
      remainingallocation: 285,
      "sif-atf": 414,
      "sif-reckitt": 2026,
      stocksafetoreallocate: 0,
      suggestedallocation: 69,
      sumofPOsinalloccycle: 26,
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
    other_rows: [
      {
        AvgYTDsellout: 281,
        Brand: "Airwick",
        Channel: "Pure Play",
        Customer: "Ocado",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 273,
        "Supply to Reallocate": 0,
        allocationconsumed: 36,
        cmuscore: 4.5,
        currentallocation: 1306.5,
        currentcustSOH: 230,
        "custsoh-current": 123,
        "custsoh-target": 1685,
        "custwoc-current": 0.4,
        "custwoc-target": 6,
        expectedservicelevel: "75%",
        idealallocationvalues: 166,
        newallocation: 0,
        openorders: 41,
        remainingallocation: 130,
        "sif-atf": 221,
        "sif-reckitt": 1742,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 36,
      },
      {
        AvgYTDsellout: 689,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Asda",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 579,
        "Supply to Reallocate": 0,
        allocationconsumed: 37,
        cmuscore: 5,
        currentallocation: 456,
        currentcustSOH: 182,
        "custsoh-current": 59,
        "custsoh-target": 2067,
        "custwoc-current": 0.1,
        "custwoc-target": 3,
        expectedservicelevel: "100%",
        idealallocationvalues: 413,
        newallocation: 0,
        openorders: 46,
        remainingallocation: 419,
        "sif-atf": 413,
        "sif-reckitt": 1840,
        stocksafetoreallocate: 43,
        suggestedallocation: -43,
        sumofPOsinalloccycle: 37,
      },
      {
        AvgYTDsellout: 422,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Waitrose",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 406,
        "Supply to Reallocate": 0,
        allocationconsumed: 56,
        cmuscore: 3.2,
        currentallocation: 326,
        currentcustSOH: 116,
        "custsoh-current": 36,
        "custsoh-target": 844,
        "custwoc-current": 0.1,
        "custwoc-target": 2,
        expectedservicelevel: "75%",
        idealallocationvalues: 326,
        newallocation: 0,
        openorders: 78,
        remainingallocation: 270,
        "sif-atf": 434,
        "sif-reckitt": 1564,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 56,
      },
      {
        AvgYTDsellout: 152,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Morrisons",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 127,
        "Supply to Reallocate": 0,
        allocationconsumed: 3,
        cmuscore: 3.2,
        currentallocation: 108,
        currentcustSOH: 256,
        "custsoh-current": 236,
        "custsoh-target": 761,
        "custwoc-current": 1.6,
        "custwoc-target": 5,
        expectedservicelevel: "75%",
        idealallocationvalues: 108,
        newallocation: 0,
        openorders: 5,
        remainingallocation: 104,
        "sif-atf": 143,
        "sif-reckitt": 1440,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 3,
      },
      {
        AvgYTDsellout: 290,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Tesco",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 274,
        "Supply to Reallocate": 0,
        allocationconsumed: 31,
        cmuscore: 4.3,
        currentallocation: 191,
        currentcustSOH: 220,
        "custsoh-current": 137,
        "custsoh-target": 1160,
        "custwoc-current": 0.5,
        "custwoc-target": 4,
        expectedservicelevel: "75%",
        idealallocationvalues: 191,
        newallocation: 0,
        openorders: 33,
        remainingallocation: 160,
        "sif-atf": 255,
        "sif-reckitt": 1750,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 31,
      },
      {
        AvgYTDsellout: 345,
        Brand: "Airwick",
        Channel: "Grocery",
        Customer: "Sainsburys",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 352,
        "Supply to Reallocate": 0,
        allocationconsumed: 34,
        cmuscore: 2.7,
        currentallocation: 272,
        currentcustSOH: 102,
        "custsoh-current": 22,
        "custsoh-target": 1381,
        "custwoc-current": 0.1,
        "custwoc-target": 4,
        expectedservicelevel: "75%",
        idealallocationvalues: 272,
        newallocation: 0,
        openorders: 37,
        remainingallocation: 238,
        "sif-atf": 363,
        "sif-reckitt": 1240,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 34,
      },
      {
        AvgYTDsellout: 401,
        Brand: "Airwick",
        Channel: "Discounter",
        Customer: "TJ Morris",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 436,
        "Supply to Reallocate": 0,
        allocationconsumed: 77,
        cmuscore: 3.1,
        currentallocation: 376,
        currentcustSOH: 17,
        "custsoh-current": 0,
        "custsoh-target": 1204,
        "custwoc-current": 0.0,
        "custwoc-target": 3,
        expectedservicelevel: "75%",
        idealallocationvalues: 376,
        newallocation: 0,
        openorders: 51,
        remainingallocation: 300,
        "sif-atf": 502,
        "sif-reckitt": 1002,
        stocksafetoreallocate: 0,
        suggestedallocation: 0,
        sumofPOsinalloccycle: 77,
      },
      {
        AvgYTDsellout: 483,
        Brand: "Airwick",
        Channel: "Discounter",
        Customer: "Lidl",
        Location: "United Kingdom",
        "RB SKU": "3247398",
        "Sell out": 498,
        "Supply to Reallocate": 0,
        allocationconsumed: 54,
        cmuscore: 3.9,
        currentallocation: 358,
        currentcustSOH: 103,
        "custsoh-current": 0,
        "custsoh-target": 965,
        "custwoc-current": 0.0,
        "custwoc-target": 2,
        expectedservicelevel: "100%",
        idealallocationvalues: 332,
        newallocation: 0,
        openorders: 68,
        remainingallocation: 304,
        "sif-atf": 332,
        "sif-reckitt": 1243,
        stocksafetoreallocate: 26,
        suggestedallocation: -26,
        sumofPOsinalloccycle: 54,
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
    static_row: {
      AvgYTDsellout: 387,
      Brand: "Airwick",
      Channel: "Pure Play",
      Customer: "Amazon",
      Location: "United Kingdom",
      "RB SKU": "3247398",
      "Sell out": 387,
      "Supply to Reallocate": 0,
      allocationconsumed: 26,
      cmuscore: 2.2,
      currentallocation: 310,
      currentcustSOH: 259,
      "custsoh-current": 182,
      "custsoh-target": 1546,
      "custwoc-current": 0.5,
      "custwoc-target": 4,
      expectedservicelevel: "75%",
      idealallocationvalues: 379,
      newallocation: 0,
      openorders: 23,
      remainingallocation: 285,
      "sif-atf": 414,
      "sif-reckitt": 2026,
      stocksafetoreallocate: 0,
      suggestedallocation: 69,
      sumofPOsinalloccycle: 26,
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
  irregulardata: [],
  irregularchartdata: {},
  errormodalopen: false,
  errortextmessage: "Error Response Not Received",
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
    case "FETCH_IRREGULARDATA":
      return {
        ...state,
        irregulardata: action.payload,
      };
    case "FETCH_IRREGULARCHARTDATA":
      return {
        ...state,
        irregularchartdata: action.payload,
      };
    case "UPDATE_ERRORMODALPOPUP":
      return {
        ...state,
        errormodalopen: action.payload,
      };
    case "UPDATE_ERRORTEXTMESSAGE":
      return {
        ...state,
        errortextmessage: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;

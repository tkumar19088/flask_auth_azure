const initialState = {
  // Use "initialState" with a capital "S"
  sellinforecast: false,
  selloutforecast: false,
  oosrisk: false,
  irregularpo: false,
  reallocation: false,
  filterstatus: false,
  business: "",
  location: "",
  customer: "",
  brand: "",
  apply: false,
  businessEmpty: false,
  locationEmpty: false,
  alerts: [
    {
      DATA: [
        {
          Name: "AWICK,GB,FM PUR CB 3X2X250ML",
          Value: "76%",
        },
        {
          Name: "AWICK,GB,AERO M WINE 6X250ML",
          Value: "94%",
        },
        {
          Name: "AWICK,GB,FM RF MORNIN 4X250ML",
          Value: "85%",
        },
      ],
      Title: "OOS Risk Detected on Airwick Australia SKUs",
    },
    {
      DATA: [
        {
          Name: "AWICK,GB,SPNG DEL 4X250ML",
          Value: "90%",
        },
        {
          Name: "AWICK,GB,FM RF PNKSP 392X250ML",
          Value: "80%",
        },
        {
          Name: "AWICK,GB,FM TW RF RW 8X250ML",
          Value: "83%",
        },
      ],
      Title: "OOS Risk Detected on Airwick United Kingdom SKUs",
    },
    {
      DATA: [
        {
          Name: "PONUM 154292",
          Value: "17-08-2023",
        },
        {
          Name: "PONUM 102343",
          Value: "08-09-2023",
        },
        {
          Name: "PONUM 18392",
          Value: "04-09-2023",
        },
      ],
      Title: "Irregular PO Detected for Airwick Australia SKUs",
    },
    {
      DATA: [
        {
          Name: "PONUM 44088",
          Value: "29-08-2023",
        },
        {
          Name: "PONUM 106722",
          Value: "03-09-2023",
        },
        {
          Name: "PONUM 85306",
          Value: "01-09-2023",
        },
      ],
      Title: "Irregular PO Detected for Airwick United Kingdom SKUs",
    },
    {
      DATA: [
        {
          Name: "PONUM 44088",
          Value: "29-08-2023",
        },
        {
          Name: "PONUM 106722",
          Value: "03-09-2023",
        },
        {
          Name: "PONUM 85306",
          Value: "01-09-2023",
        },
      ],
      Title: "Irregular PO Detected for Airwick United Kingdom SKUs",
    },
  ],
  userDetails: {
    Brand: ["Airwick", "Gaviscon"],
    "Business Unit": ["Hygiene", "Health"],
    Customer: ["Asda", "Amazon"],
    Email: "keerthi.moka@artefact.com",
    Location: ["United Kingdom", "Australia"],
    Name: "Moka  Keerthi",
    Role: "admin",
  },
  overviewhighriskdata: [
    {
      "Active Promo": "No",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Asda",
      Description: "AWICK,GB,6XELECRFL, WVANBEAN",
      "Exp NR CW": 7903.59,
      "Exp NR CW+1": 8176.6,
      "Exp NR CW+2": 2312.34,
      "Exp NR CW+3": 5834.32,
      Location: "United Kingdom",
      PPG: 4974042,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "374197",
      "Reason Code": "E1",
      "Reckitt WOC": 4.0,
      "SL CW": 0.67,
      "SL CW+1": 0.92,
      "SL CW+2": 0.85,
      "SL CW+3": 0.88,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Amazon",
      Description: "AWICK,GB,SPNG DEL 4X250ML",
      "Exp NR CW": 7013.79,
      "Exp NR CW+1": 2636.81,
      "Exp NR CW+2": 8571.15,
      "Exp NR CW+3": 4328.53,
      Location: "United Kingdom",
      PPG: 6208713,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3038049",
      "Reason Code": "E0",
      "Reckitt WOC": 2.0,
      "SL CW": 0.9,
      "SL CW+1": 0.93,
      "SL CW+2": 0.75,
      "SL CW+3": 0.8,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Amazon",
      Description: "AWICK,GB,FM RF PNKSP 392X250ML",
      "Exp NR CW": 6450.2,
      "Exp NR CW+1": 1552.21,
      "Exp NR CW+2": 9601.16,
      "Exp NR CW+3": 3852.26,
      Location: "United Kingdom",
      PPG: 2849279,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3209375",
      "Reason Code": "E2",
      "Reckitt WOC": 2.0,
      "SL CW": 0.8,
      "SL CW+1": 0.69,
      "SL CW+2": 0.71,
      "SL CW+3": 0.93,
    },
    {
      "Active Promo": "No",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Asda",
      Description: "AWICK,GB,CAR PB FLWR BLS1UNX20",
      "Exp NR CW": 7354.64,
      "Exp NR CW+1": 3865.97,
      "Exp NR CW+2": 3489.03,
      "Exp NR CW+3": 1952.62,
      Location: "United Kingdom",
      PPG: 1953190,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3103968",
      "Reason Code": "E2",
      "Reckitt WOC": 6.0,
      "SL CW": 0.87,
      "SL CW+1": 0.7,
      "SL CW+2": 0.83,
      "SL CW+3": 0.85,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Amazon",
      Description: "AWICK,GB,FM TW RF RW 8X250ML",
      "Exp NR CW": 1875.75,
      "Exp NR CW+1": 601.93,
      "Exp NR CW+2": 9659.78,
      "Exp NR CW+3": 5099.76,
      Location: "United Kingdom",
      PPG: 9014190,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3232106",
      "Reason Code": "E1",
      "Reckitt WOC": 2.0,
      "SL CW": 0.83,
      "SL CW+1": 0.68,
      "SL CW+2": 0.77,
      "SL CW+3": 0.68,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Amazon",
      Description: "AWICK,GB,NA3,PSP 6X300ML",
      "Exp NR CW": 8200.01,
      "Exp NR CW+1": 2845.82,
      "Exp NR CW+2": 2369.84,
      "Exp NR CW+3": 8515.46,
      Location: "United Kingdom",
      PPG: 4725387,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3246983",
      "Reason Code": "E3",
      "Reckitt WOC": 2.0,
      "SL CW": 0.69,
      "SL CW+1": 0.92,
      "SL CW+2": 0.71,
      "SL CW+3": 0.78,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Amazon",
      Description: "AWICK,GB,BOOSTER ROSE 12X300ML",
      "Exp NR CW": 4315.24,
      "Exp NR CW+1": 4317.08,
      "Exp NR CW+2": 5791.16,
      "Exp NR CW+3": 8106.23,
      Location: "United Kingdom",
      PPG: 6876698,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3136081",
      "Reason Code": "E1",
      "Reckitt WOC": 2.4,
      "SL CW": 0.83,
      "SL CW+1": 0.87,
      "SL CW+2": 0.87,
      "SL CW+3": 0.8,
    },
    {
      "Active Promo": "No",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Amazon",
      Description: "AWICK,GB,REED ESO PBFIG 5X33ML",
      "Exp NR CW": 3106.96,
      "Exp NR CW+1": 6893.84,
      "Exp NR CW+2": 1003.19,
      "Exp NR CW+3": 2229.75,
      Location: "United Kingdom",
      PPG: 5227394,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3167124",
      "Reason Code": "E0",
      "Reckitt WOC": 2.4,
      "SL CW": 0.84,
      "SL CW+1": 0.91,
      "SL CW+2": 0.79,
      "SL CW+3": 0.91,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Asda",
      Description: "AWICK,GB,MULL WINE REED 5X33ML",
      "Exp NR CW": 7237.7,
      "Exp NR CW+1": 7156.36,
      "Exp NR CW+2": 5212.38,
      "Exp NR CW+3": 8385.51,
      Location: "United Kingdom",
      PPG: 2971431,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3192432",
      "Reason Code": "E3",
      "Reckitt WOC": 2.4,
      "SL CW": 0.79,
      "SL CW+1": 0.74,
      "SL CW+2": 0.73,
      "SL CW+3": 0.69,
    },
    {
      "Active Promo": "No",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  0;  0",
      Customer: "Amazon",
      Description: "AWICK,GB,LE RF VAN BEAN 6X19ML",
      "Exp NR CW": 8219.94,
      "Exp NR CW+1": 3594.56,
      "Exp NR CW+2": 4246.13,
      "Exp NR CW+3": 3249.36,
      Location: "United Kingdom",
      PPG: 3035131,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3200683",
      "Reason Code": "E3",
      "Reckitt WOC": 2.4,
      "SL CW": 0.73,
      "SL CW+1": 0.9,
      "SL CW+2": 0.77,
      "SL CW+3": 0.91,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Amazon",
      Description: "AWICK,GB,LE RF BERRY 2X5X19ML",
      "Exp NR CW": 4644.51,
      "Exp NR CW+1": 7638.38,
      "Exp NR CW+2": 919.87,
      "Exp NR CW+3": 4606.88,
      Location: "United Kingdom",
      PPG: 6572089,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3205304",
      "Reason Code": "E2",
      "Reckitt WOC": 2.4,
      "SL CW": 0.79,
      "SL CW+1": 0.67,
      "SL CW+2": 0.67,
      "SL CW+3": 0.78,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Asda",
      Description: "AWICK,GB,LE RF MOONLILY 6X19ML",
      "Exp NR CW": 7750.62,
      "Exp NR CW+1": 5999.94,
      "Exp NR CW+2": 582.5,
      "Exp NR CW+3": 7415.49,
      Location: "United Kingdom",
      PPG: 4702680,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3200685",
      "Reason Code": "E2",
      "Reckitt WOC": 2.4,
      "SL CW": 0.92,
      "SL CW+1": 0.69,
      "SL CW+2": 0.76,
      "SL CW+3": 0.72,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Asda",
      Description: "AWICK,GB,PINK S PEA TW 5X19ML",
      "Exp NR CW": 4787.05,
      "Exp NR CW+1": 7868.65,
      "Exp NR CW+2": 8255.97,
      "Exp NR CW+3": 5872.77,
      Location: "United Kingdom",
      PPG: 2055854,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3202847",
      "Reason Code": "E0",
      "Reckitt WOC": 2.4,
      "SL CW": 0.68,
      "SL CW+1": 0.9,
      "SL CW+2": 0.68,
      "SL CW+3": 0.85,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Asda",
      Description: "AWICK,GB,JAS BLOOM RSP 8X237ML",
      "Exp NR CW": 5225.94,
      "Exp NR CW+1": 317.29,
      "Exp NR CW+2": 2525.4,
      "Exp NR CW+3": 1422.43,
      Location: "United Kingdom",
      PPG: 1343219,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3209776",
      "Reason Code": "E2",
      "Reckitt WOC": 3.0,
      "SL CW": 0.86,
      "SL CW+1": 0.78,
      "SL CW+2": 0.86,
      "SL CW+3": 0.74,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Asda",
      Description: "AWICK,GB,PINE FM RF 2X3X250ML",
      "Exp NR CW": 3308.84,
      "Exp NR CW+1": 999.93,
      "Exp NR CW+2": 4273.43,
      "Exp NR CW+3": 8813.81,
      Location: "United Kingdom",
      PPG: 6361224,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3228801",
      "Reason Code": "E3",
      "Reckitt WOC": 2.0,
      "SL CW": 0.76,
      "SL CW+1": 0.87,
      "SL CW+2": 0.95,
      "SL CW+3": 0.85,
    },
    {
      "Active Promo": "No",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  prod on 12.07;  relaunch, next prod on wk28",
      Customer: "Amazon",
      Description: "AWICK,GB,APPLE LE RF 6X19ML",
      "Exp NR CW": 770.12,
      "Exp NR CW+1": 7261.83,
      "Exp NR CW+2": 8181.35,
      "Exp NR CW+3": 3213.63,
      Location: "United Kingdom",
      PPG: 2824041,
      "RAG CW": "A",
      "RAG CW+1": "A",
      "RAG CW+2": "A",
      "RAG CW+3": "G",
      "RB SKU": "3228650",
      "Reason Code": "E0",
      "Reckitt WOC": 3.0,
      "SL CW": 0.77,
      "SL CW+1": 0.83,
      "SL CW+2": 0.75,
      "SL CW+3": 0.75,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Asda",
      Description: "AWICK,GB,KIT EUCALY 4X228ML",
      "Exp NR CW": 1911.56,
      "Exp NR CW+1": 7890.35,
      "Exp NR CW+2": 5463.85,
      "Exp NR CW+3": 4817.86,
      Location: "United Kingdom",
      PPG: 8094890,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3247124",
      "Reason Code": "E2",
      "Reckitt WOC": 3.0,
      "SL CW": 0.7,
      "SL CW+1": 0.78,
      "SL CW+2": 0.69,
      "SL CW+3": 0.73,
    },
    {
      "Active Promo": "No",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  prod on wk30-31;  0",
      Customer: "Amazon",
      Description: "AWICK,GB,LE RF MALDIVES 5X19ML",
      "Exp NR CW": 2419.54,
      "Exp NR CW+1": 583.15,
      "Exp NR CW+2": 3706.75,
      "Exp NR CW+3": 8351.84,
      Location: "United Kingdom",
      PPG: 6439551,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3252952",
      "Reason Code": "E0",
      "Reckitt WOC": 3.0,
      "SL CW": 0.71,
      "SL CW+1": 0.75,
      "SL CW+2": 0.75,
      "SL CW+3": 0.77,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause":
        ";  ;  4032 cs IT ETA wk24/07;  4032 cs IT ETA wk24/07",
      Customer: "Amazon",
      Description: "AWICK,GB,EM RF APP&CIN 6X20ML",
      "Exp NR CW": 9379.44,
      "Exp NR CW+1": 6390.61,
      "Exp NR CW+2": 3306.47,
      "Exp NR CW+3": 6408.84,
      Location: "United Kingdom",
      PPG: 5281278,
      "RAG CW": "A",
      "RAG CW+1": "A",
      "RAG CW+2": "A",
      "RAG CW+3": "G",
      "RB SKU": "3266914",
      "Reason Code": "E1",
      "Reckitt WOC": 3.0,
      "SL CW": 0.85,
      "SL CW+1": 0.93,
      "SL CW+2": 0.9,
      "SL CW+3": 0.79,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Asda",
      Description: "AWICK,GB,FM BH BLISS 3X2X250ML",
      "Exp NR CW": 612.99,
      "Exp NR CW+1": 1315.22,
      "Exp NR CW+2": 6766.56,
      "Exp NR CW+3": 5904.58,
      Location: "United Kingdom",
      PPG: 9086507,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3255125",
      "Reason Code": "E2",
      "Reckitt WOC": 2.0,
      "SL CW": 0.79,
      "SL CW+1": 0.86,
      "SL CW+2": 0.68,
      "SL CW+3": 0.86,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause":
        ";  ;  0 in transit; 0 SOH; ProdOrd: 5006 on 18/07;  0 in transit; 0 SOH; Prodord 5k on 18/07;",
      Customer: "Asda",
      Description: "AWICK,GB,FM RF MDVES 3X2X250ML",
      "Exp NR CW": 6226.26,
      "Exp NR CW+1": 6275.39,
      "Exp NR CW+2": 957.37,
      "Exp NR CW+3": 8888.55,
      Location: "United Kingdom",
      PPG: 8354572,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3256334",
      "Reason Code": "E0",
      "Reckitt WOC": 2.0,
      "SL CW": 0.86,
      "SL CW+1": 0.87,
      "SL CW+2": 0.91,
      "SL CW+3": 0.8,
    },
    {
      "Active Promo": "No",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": "at SS;  ;  ;  0",
      Customer: "Asda",
      Description: "AWICK,GB,RED BER FM RF 4X250ML",
      "Exp NR CW": 6714.28,
      "Exp NR CW+1": 486.12,
      "Exp NR CW+2": 6271.89,
      "Exp NR CW+3": 5778.68,
      Location: "United Kingdom",
      PPG: 7025825,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "R",
      "RB SKU": "3259481",
      "Reason Code": "E3",
      "Reckitt WOC": 2.0,
      "SL CW": 0.75,
      "SL CW+1": 0.95,
      "SL CW+2": 0.95,
      "SL CW+3": 0.95,
    },
    {
      "Active Promo": "Yes",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Amazon",
      Description: "AWICK,GB,NOEL CNDL 6X105G",
      "Exp NR CW": 2285.79,
      "Exp NR CW+1": 6215.34,
      "Exp NR CW+2": 4931.48,
      "Exp NR CW+3": 6313.94,
      Location: "United Kingdom",
      PPG: 6317266,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3228482",
      "Reason Code": "E0",
      "Reckitt WOC": 6.0,
      "SL CW": 0.77,
      "SL CW+1": 0.83,
      "SL CW+2": 0.67,
      "SL CW+3": 0.86,
    },
    {
      "Active Promo": "No",
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Comment RootCause": ";  ;  ;  0",
      Customer: "Amazon",
      Description: "AWICK,GB,PMP FWTR GEL 12X70G",
      "Exp NR CW": 4269.78,
      "Exp NR CW+1": 119.35,
      "Exp NR CW+2": 9069.67,
      "Exp NR CW+3": 2757.12,
      Location: "United Kingdom",
      PPG: 8392919,
      "RAG CW": "G",
      "RAG CW+1": "G",
      "RAG CW+2": "G",
      "RAG CW+3": "G",
      "RB SKU": "3234661",
      "Reason Code": "E1",
      "Reckitt WOC": 7.0,
      "SL CW": 0.92,
      "SL CW+1": 0.83,
      "SL CW+2": 0.8,
      "SL CW+3": 0.68,
    },
  ],
  filteredoverviewhighriskdata: [],
  isragfilterohr: false,
  overviewcustomerdata: [
    {
      Brand: "Airwick",
      "Business Unit": "Nutrition",
      "Cust SOH": 1800,
      "Cust WOC": 4,
      Customer: "Asda",
      Description: "AWICK,IE,STICK UP LAVX12",
      Location: "Australia",
      PPG: 4742620,
      Promo: "No",
      "RAG CW": "A",
      "RAG CW +1": "G",
      "RAG CW+2": "A",
      "RAG CW+3": "R",
      "RB SKU": "10613",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Nutrition",
      "Cust SOH": 2200,
      "Cust WOC": 8,
      Customer: "Amazon",
      Description: "AWICK,GB,C/LINEN,4X250ML, C/L",
      Location: "United Kingdom",
      PPG: 6042872,
      Promo: "Yes",
      "RAG CW": "R",
      "RAG CW +1": "A",
      "RAG CW+2": "A",
      "RAG CW+3": "A",
      "RB SKU": "223600",
    },
    {
      Brand: "Airwick",
      "Business Unit": "Hygiene",
      "Cust SOH": 1700,
      "Cust WOC": 8,
      Customer: "Asda",
      Description: "AWICK,GB,6XELECRFL, WVANBEAN",
      Location: "United Kingdom",
      PPG: 4974042,
      Promo: "No",
      "RAG CW": "R",
      "RAG CW +1": "R",
      "RAG CW+2": "R",
      "RAG CW+3": "G",
      "RB SKU": "374197",
    },
  ],
  filteredcustomerdata: [],
  isragfiltercustomer: false,
  stockreallocation: [
    {
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
    },
    {
      AvgYTDsellout: 500,
      Brand: "Finish",
      "Business Unit": "Nutrition",
      Channel: "PurePlay",
      Customer: "Amazon",
      Location: "United Kingdom",
      "RB SKU": "3256793",
      "Sell out": 300,
      allocationconsumed: 243,
      cmuscore: 3.84,
      currentallocation: 500,
      currentcustSOH: 1000,
      "custsoh-current": 600,
      "custsoh-target": 1000,
      "custwoc-current": 10,
      "custwoc-target": 10,
      expectedservicelevel: 0.9,
      idealallocationvalues: 600,
      openorders: 243,
      remainingallocation: 257,
      "sif-atf": 400,
      "sif-reckitt": 1000,
      stocksafetoreallocate: 243,
      suggestedallocation: 186,
      sumofPOsinalloccycle: 800,
    },
    {
      AvgYTDsellout: 800,
      Brand: "Airwick",
      "Business Unit": "Health",
      Channel: "PurePlay",
      Customer: "Asda",
      Location: "Australia",
      "RB SKU": "3194812",
      "Sell out": 800,
      allocationconsumed: 12,
      cmuscore: 1.46,
      currentallocation: 400,
      currentcustSOH: 700,
      "custsoh-current": 300,
      "custsoh-target": 400,
      "custwoc-current": 7,
      "custwoc-target": 11,
      expectedservicelevel: 0.9,
      idealallocationvalues: 700,
      openorders: 12,
      remainingallocation: 388,
      "sif-atf": 200,
      "sif-reckitt": 400,
      stocksafetoreallocate: 57,
      suggestedallocation: 9,
      sumofPOsinalloccycle: 500,
    },
    {
      AvgYTDsellout: 300,
      Brand: "Harpic",
      "Business Unit": "Health",
      Channel: "PurePlay",
      Customer: "Amazon",
      Location: "Australia",
      "RB SKU": "3250240",
      "Sell out": 200,
      allocationconsumed: 270,
      cmuscore: 8.0,
      currentallocation: 900,
      currentcustSOH: 900,
      "custsoh-current": 600,
      "custsoh-target": 1000,
      "custwoc-current": 10,
      "custwoc-target": 14,
      expectedservicelevel: 0.87,
      idealallocationvalues: 500,
      openorders: 270,
      remainingallocation: 630,
      "sif-atf": 200,
      "sif-reckitt": 300,
      stocksafetoreallocate: 315,
      suggestedallocation: 286,
      sumofPOsinalloccycle: 200,
    },
    {
      AvgYTDsellout: 900,
      Brand: "Vanish",
      "Business Unit": "Hygiene",
      Channel: "PurePlay",
      Customer: "Amazon",
      Location: "Australia",
      "RB SKU": "3173447",
      "Sell out": 400,
      allocationconsumed: 38,
      cmuscore: 5.69,
      currentallocation: 1000,
      currentcustSOH: 700,
      "custsoh-current": 700,
      "custsoh-target": 300,
      "custwoc-current": 4,
      "custwoc-target": 8,
      expectedservicelevel: 0.86,
      idealallocationvalues: 900,
      openorders: 38,
      remainingallocation: 962,
      "sif-atf": 1000,
      "sif-reckitt": 200,
      stocksafetoreallocate: 681,
      suggestedallocation: 188,
      sumofPOsinalloccycle: 900,
    },
    {
      AvgYTDsellout: 600,
      Brand: "Vanish",
      "Business Unit": "Hygiene",
      Channel: "PurePlay",
      Customer: "Amazon",
      Location: "United Kingdom",
      "RB SKU": "3066078",
      "Sell out": 200,
      allocationconsumed: 300,
      cmuscore: 4.18,
      currentallocation: 600,
      currentcustSOH: 900,
      "custsoh-current": 200,
      "custsoh-target": 200,
      "custwoc-current": 3,
      "custwoc-target": 7,
      expectedservicelevel: 0.91,
      idealallocationvalues: 500,
      openorders: 300,
      remainingallocation: 300,
      "sif-atf": 700,
      "sif-reckitt": 300,
      stocksafetoreallocate: 19,
      suggestedallocation: 4,
      sumofPOsinalloccycle: 500,
    },
    {
      AvgYTDsellout: 800,
      Brand: "Napisan",
      "Business Unit": "Health",
      Channel: "Groceries",
      Customer: "Asda",
      Location: "Australia",
      "RB SKU": "3102862",
      "Sell out": 800,
      allocationconsumed: 200,
      cmuscore: 5.89,
      currentallocation: 800,
      currentcustSOH: 900,
      "custsoh-current": 800,
      "custsoh-target": 900,
      "custwoc-current": 3,
      "custwoc-target": 7,
      expectedservicelevel: 0.91,
      idealallocationvalues: 400,
      openorders: 200,
      remainingallocation: 600,
      "sif-atf": 700,
      "sif-reckitt": 200,
      stocksafetoreallocate: 257,
      suggestedallocation: 142,
      sumofPOsinalloccycle: 200,
    },
    {
      AvgYTDsellout: 300,
      Brand: "Vanish",
      "Business Unit": "Hygiene",
      Channel: "Groceries",
      Customer: "Amazon",
      Location: "Germany",
      "RB SKU": "3173443",
      "Sell out": 400,
      allocationconsumed: 200,
      cmuscore: 4.14,
      currentallocation: 1000,
      currentcustSOH: 400,
      "custsoh-current": 200,
      "custsoh-target": 1000,
      "custwoc-current": 2,
      "custwoc-target": 7,
      expectedservicelevel: 0.88,
      idealallocationvalues: 800,
      openorders: 200,
      remainingallocation: 800,
      "sif-atf": 400,
      "sif-reckitt": 1000,
      stocksafetoreallocate: 54,
      suggestedallocation: 40,
      sumofPOsinalloccycle: 400,
    },
    {
      AvgYTDsellout: 500,
      Brand: "Airwick",
      "Business Unit": "Health",
      Channel: "Groceries",
      Customer: "Asda",
      Location: "Germany",
      "RB SKU": "3221252",
      "Sell out": 300,
      allocationconsumed: 348,
      cmuscore: 9.23,
      currentallocation: 400,
      currentcustSOH: 800,
      "custsoh-current": 1000,
      "custsoh-target": 800,
      "custwoc-current": 10,
      "custwoc-target": 12,
      expectedservicelevel: 0.91,
      idealallocationvalues: 800,
      openorders: 348,
      remainingallocation: 52,
      "sif-atf": 800,
      "sif-reckitt": 400,
      stocksafetoreallocate: 200,
      suggestedallocation: 128,
      sumofPOsinalloccycle: 500,
    },
    {
      AvgYTDsellout: 800,
      Brand: "Finish",
      "Business Unit": "Nutrition",
      Channel: "Pharmacy",
      Customer: "Amazon",
      Location: "United Kingdom",
      "RB SKU": "3252404",
      "Sell out": 300,
      allocationconsumed: 400,
      cmuscore: 0.47,
      currentallocation: 600,
      currentcustSOH: 300,
      "custsoh-current": 200,
      "custsoh-target": 500,
      "custwoc-current": 4,
      "custwoc-target": 9,
      expectedservicelevel: 0.86,
      idealallocationvalues: 600,
      openorders: 400,
      remainingallocation: 200,
      "sif-atf": 500,
      "sif-reckitt": 400,
      stocksafetoreallocate: 299,
      suggestedallocation: 99,
      sumofPOsinalloccycle: 1000,
    },
  ],
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
        customer: action.payload,
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
    default:
      return state;
  }
};

export default sidebarReducer;

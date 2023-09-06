export const fetchSellinForecast = (newValue) => {
  return {
    type: "FETCH_SELLINFORECAST",
    payload: newValue,
  };
};
export const fetchSelloutForecast = (newValue) => {
  return {
    type: "FETCH_SELLOUTFORECAST",
    payload: newValue,
  };
};

export const fetchOOSRisk = (newValue) => {
  return {
    type: "FETCH_OOSRISK",
    payload: newValue,
  };
};

export const fetchIrregular = (newValue) => {
  return {
    type: "FETCH_IRREGULARPO",
    payload: newValue,
  };
};

export const fetchReallocation = (newValue) => {
  return {
    type: "FETCH_REALLOCATION",
    payload: newValue,
  };
};
export const fetchfilterstatus = (newValue) => {
  return {
    type: "FETCH_FILTERSTATUS",
    payload: newValue,
  };
};
export const fetchuserdetails = (newValue) => {
  return {
    type: "FETCH_USERDETAILS",
    payload: newValue,
  };
};
export const fetchoverviewhighriskdata = (newValue) => {
  return {
    type: "FETCH_OVERVIEWHIGHRISKDATA",
    payload: newValue,
  };
};
export const fetchexpandeditem = (newValue) => {
  return {
    type: "FETCH_EXPANDEDITEM",
    payload: newValue,
  };
};
export const updateloader = (newValue) => {
  return {
    type: "UPDATE_LOADER",
    payload: newValue,
  };
};
export const fetchstockreallocatedata = (newValue) => {
  return {
    type: "FETCH_STOCKREALLOCATIONDATA",
    payload: newValue,
  };
};

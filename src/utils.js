const utils = {};

utils.saveDataToLocal = (assignments) => {
  sessionStorage.setItem("assignments", JSON.stringify(assignments));
};

utils.getDataFromLocal = () => {
  if (sessionStorage.getItem("assignments")) {
    return JSON.parse(sessionStorage.getItem("assignments"));
  }
  return [];
};

export default utils;

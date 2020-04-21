const GetLocations = async function () {
  const url =
    "http://api.brewerydb.com/v2/locations/?key=659d5c6b8f3d2447f090119e48202fdb";
  const response = await fetch(url);
  const data = await response.json();
  const dataArray = data.data;

  return dataArray;
};

export default GetLocations;

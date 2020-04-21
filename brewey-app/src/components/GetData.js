const GetData = async function () {
  const url =
    "http://api.brewerydb.com/v2/locations/?key=659d5c6b8f3d2447f090119e48202fdb";
  const response = await fetch(url);
  const data = await response.json();
  const dataArray = data.data;

  let allBeersAndCountries = [];
  let i;
  for (i = 0; i < dataArray.length; i++) {
    allBeersAndCountries.push({
      country: dataArray[i].country.displayName,
      beerName: dataArray[i].name,
      // img: dataArray[i].brewery.images.icon,
    });
  }
  allBeersAndCountries.sort();

  this.setState({
    allBeersAndCountries: allBeersAndCountries,

    loading: false,
  });
};

export default GetData;

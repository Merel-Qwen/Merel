import React from "react";

export default class BeerPerCountry extends React.Component {
  state = {
    loading: true,

    beersFromUSA: [],
    onlyUSA: [],
  };

  async componentDidMount() {
    const url =
      "http://api.brewerydb.com/v2/locations/?key=659d5c6b8f3d2447f090119e48202fdb";
    const response = await fetch(url);
    const data = await response.json();
    const dataArray = data.data;
    console.log("data:", data);
    console.log("data.data", dataArray);

    let allBeersAndCountries = [];
    let i;
    for (i = 0; i < dataArray.length; i++) {
      allBeersAndCountries.push({
        country: dataArray[i].country.displayName,
        beerName: dataArray[i].name,
      });
      allBeersAndCountries.sort();

      this.setState({
        allBeersAndCountries: allBeersAndCountries,

        loading: false,
      });
    }
    let beersFromUSA = [];
    let e;
    for (e = 0; e < dataArray.length; e++) {
      beersFromUSA.push({
        country: dataArray[e].country.displayName,
        beerName: dataArray[e].name,
      });

      const allcountries = beersFromUSA.map((item) => item.country);
      let onlyUSA = allcountries.filter(function checkCountry(country) {
        return country === "United States";
      });

      console.log(onlyUSA);

      const notUSA = allcountries.filter(function checkCountry(country) {
        return country != "United States";
      });

      console.log(notUSA);

      this.setState({
        beersFromUSA: beersFromUSA,
        onlyUSA: onlyUSA,

        loading: false,
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.allBeersAndCountries) {
      return <div>didn't get a beer</div>;
    }

    return (
      <div>
        <div>
          <h1>Beers per country</h1>
          <button>sort by country</button>
          <div className="allbeers">
            {this.state.beersFromUSA.map((item) => (
              <div className="beerItem">
                <p> {item.beerName}</p>

                <p>From:</p>
                <p> {item.country}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

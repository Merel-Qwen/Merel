import React from "react";

export default class BeerPerCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      beersFromUSA: [],
      onlyUSA: [],
      isClicked: false,
    };
  }

  async componentDidMount() {
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
        isOnlyUSA: this.isOnlyUSA(dataArray[i].country.isoCode),
      });
    }
    allBeersAndCountries.sort();

    this.setState({
      allBeersAndCountries: allBeersAndCountries,

      loading: false,
    });
  }
  isOnlyUSA(beerIsoCode) {
    return beerIsoCode === "US";
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
          <h1>Beer app</h1>

          <div className="allbeers">
            {this.state.allBeersAndCountries.map((item) => (
              <div className="beerItem">
                <p> {item.beerName}</p>

                <p>From:</p>
                <p> {item.country}</p>
                <img src={item.img} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1>Beers from USA</h1>
          <div className="allbeers">
            {this.state.allBeersAndCountries
              .filter((item) => item.isOnlyUSA)
              .map((item) => (
                <div className="beerItem">
                  <p> {item.beerName}</p>

                  <p>From:</p>
                  <p> {item.country}</p>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h1>Beers not from USA</h1>

          <div className="allbeers">
            {this.state.allBeersAndCountries
              .filter((item) => !item.isOnlyUSA)
              .map((item) => (
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

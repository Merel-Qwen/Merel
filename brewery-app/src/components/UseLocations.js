import React from "react";
import GetLocations from "./GetLocations";

export default class UseLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeersAndCountries: [],

      loading: false,
    };
  }

  componentDidMount = async () => {
    const dataArray = await GetLocations();
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
  };
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

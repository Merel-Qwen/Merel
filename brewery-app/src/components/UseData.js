import React from "react";
import GetData from "./GetData";

export default class UseData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeersAndCountries: [],

      loading: false,
    };
  }

  componentDidMount = async () => {
    const dataArray = await GetData();
    let allBeersAndCountries = [];
    let i;
    for (i = 0; i < dataArray.length; i++) {
      allBeersAndCountries.push({
        country: dataArray[i].country.displayName,
        beerName: dataArray[i].name,
      });
    }
    allBeersAndCountries.sort();
    console.log("allBeersAndCountries", allBeersAndCountries);

    this.setState({
      allBeersAndCountries: allBeersAndCountries,

      loading: false,
    });
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.allBeersAndCountries) {
      return <div>didn't get a beer</div>;
    }

    return (
      <div>
        <h1>use data</h1>
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
    );
  }
}

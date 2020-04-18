import React from "react";

export default class FetchData extends React.Component {
  state = {
    loading: true,
    countries: [],
    beerNames: [],
  };

  async componentDidMount() {
    const url =
      "http://api.brewerydb.com/v2/locations/?key=659d5c6b8f3d2447f090119e48202fdb";
    const response = await fetch(url);
    const data = await response.json();
    const dataArray = data.data;
    console.log("data:", data);
    console.log("data.data", dataArray);

    let countryList = [];
    let beerNameList = [];

    let i;
    for (i = 0; i < dataArray.length; i++) {
      countryList.push(dataArray[i].country);
      beerNameList.push(dataArray[i].name);
      //   this.setState({

      //     beer: dataArray[i].country,
      //     beerName: dataArray[i],
      //     ,
      //   });

      console.log(i);
      this.setState({
        countries: countryList,
        beerNames: beerNameList,
        loading: false,
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.beerNames) {
      return <div>didn't get a beer</div>;
    }

    return (
      <div>
        <div>
          <h6>Beer</h6>
          {this.state.beerNames.map((item) => (
            <p>{item}</p>
          ))}
          {console.log(this.state.beerNames)}
        </div>
        <div>
          <h6>country</h6>
          {/* <p>{this.state.countries}</p> */}
          {console.log(this.state.countries)}
        </div>

        <div>
          <h6>Region</h6>
          {/* <p>{this.state.beerName.region}</p> */}
        </div>
        <div></div>
      </div>
    );
  }
}

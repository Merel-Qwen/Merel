import React from "react";

export default class FetchData extends React.Component {
  state = {
    loading: true,
    beer: {},
    beerName: {},
  };

  async componentDidMount() {
    const url =
      "http://api.brewerydb.com/v2/locations/?key=659d5c6b8f3d2447f090119e48202fdb";
    const response = await fetch(url);
    const data = await response.json();
    const dataArray = data.data;
    console.log("data:", data);
    console.log("data.data", dataArray);

    let i;
    for (i = 0; i < dataArray.length; i++) {
      this.setState({
        beer: dataArray[i].country,
        beerName: dataArray[i],
        loading: false,
      });
      console.log(i);
    }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.beer) {
      return <div>didn't get a beer</div>;
    }

    return (
      <div>
        <div>
          <h6>Beer</h6>
          <p>{this.state.beerName.name}</p>
          {console.log(this.state.beerName)}
        </div>
        <div>
          <h6>country</h6>
          <p>{this.state.beer.name}</p>
          {console.log(this.state.beer.name)}
        </div>

        <div>
          <h6>Region</h6>
          <p>{this.state.beerName.region}</p>
        </div>
        <div></div>
      </div>
    );
  }
}

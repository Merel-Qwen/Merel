import React from "react";

export default class FetchData extends React.Component {
  state = {
    loading: true,
    beer: null,
  };

  async componentDidMount() {
    const url =
      "http://api.brewerydb.com/v2/locations/?key=659d5c6b8f3d2447f090119e48202fdb";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
    this.setState({ beer: data.data[2].country, loading: false });
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
          <h6>Region</h6>
          <p>{this.state.beer.region}</p>
        </div>
        <div>
          <h6>country</h6>
          <p>{this.state.beer.name}</p>
        </div>

        <div>
          <h6>Description</h6>
          <p>{this.state.beer.description}</p>
        </div>
        <div></div>

        <h1>hoi</h1>
      </div>
    );
  }
}

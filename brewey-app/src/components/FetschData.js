import React from "react";

export default class FetchData extends React.Component {
  state = {
    loading: true,
    allBeersAndCountries: [],
    beersFromUSA: [],
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

      console.log(i);
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
      beersFromUSA.sort();

      this.setState({
        beersFromUSA: beersFromUSA,

        loading: false,
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <div>Getting your beers....</div>;
    }

    if (!this.state.allBeersAndCountries) {
      return <div>didn't get a beer</div>;
    }

    // return (
    // //   <div>
    // //     <h1>All beers</h1>
    // //     <div className="allbeers">
    // //       {this.state.allBeersAndCountries.map((item) => (
    // //         <div className="beerItem">
    // //           <p> {item.beerName}</p>

    // //           <p>From:</p>
    // //           <p> {item.country}</p>
    // //           {console.log(this.state.allBeersAndCountries)}
    // //         </div>
    // //       ))}
    // //     </div>
    // //   </div>
    // );
  }
}

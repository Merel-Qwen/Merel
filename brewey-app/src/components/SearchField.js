import React from "react";

export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const url =
      "http://api.brewerydb.com/v2/beers/?key=659d5c6b8f3d2447f090119e48202fdb";
    const response = await fetch(url);
    const data = await response.json();
    const dataArray = data.data;
    console.log("data:", data);
    console.log("data.data", dataArray);

    let allBeers = [];
    let i;
    for (i = 0; i < dataArray.length; i++) {
      allBeers.push({
        beerName: dataArray[i].name,
        abv: dataArray[i].abv,
        // img: dataArray[i].brewery.images.icon,
      });
    }
    allBeers.sort();

    this.setState({
      allBeers: allBeers,

      loading: false,
    });
  }
  isOnlyUSA(beerIsoCode) {
    return beerIsoCode === "US";
  }

  ikbengeklikt() {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.allBeers) {
      return <div>didn't get a beer</div>;
    }
    // inputfielt met ID maken, value meenemen in de filter.
    //in de onclick maak ik een documentgetelementbijID , daarop een functie met een .value
    //
    return (
      <div>
        <div>
          <button onClick={this.ikbengeklikt}>
            {this.state.isClicked ? "zoek voor USA" : "Zoek voor niet-USA"}
          </button>
          <h1>Beers per country</h1>

          <div className="allbeers">
            {this.state.allBeers.map((item) => (
              <div className="beerItem">
                <p> {item.beerName}</p>
                <p> ABV {item.abv}%</p>
                <img src={item.img} />
              </div>
            ))}
          </div>
        </div>

        {/* <div>
          <h1>Beers from USA</h1>

          <div className="allbeers">
            {this.state.allBeersAndCountries
              .filter((item) => item.isOnlyUSA)
              .map((item) => (
                <ul className="beerItem">
                  <li> {item.beerName}</li>

                  <li>From:</li>
                  <li> {item.country}</li>
                </ul>
              ))}
          </div>
        </div> */}
        {/* 
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
        </div> */}
      </div>
    );
  }
}

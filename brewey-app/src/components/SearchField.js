import React from "react";

export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      });
    }
    allBeers.sort();

    this.setState({
      allBeers: allBeers,

      loading: false,
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const filterdBeers = this.state.allBeers.filter((beer) =>
      beer.beerName.toUpperCase().includes(this.state.value.toUpperCase())
    );

    this.setState({
      filterdBeers: filterdBeers,
    });
    event.preventDefault();
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.allBeers) {
      return <div>didn't get a beer</div>;
    }

    if (this.state.filterdBeers) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Search bij name
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <button onClick={this.backToBeers}>back to all beers</button>
          <div className="allbeers">
            {this.state.filterdBeers.map((item) => (
              <div className="beerItem">
                <p> {item.beerName}</p>
                <p> ABV {item.abv}%</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Search bij name
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <div className="allbeers">
            {this.state.allBeers
              .filter((item) => !this.state.value)

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

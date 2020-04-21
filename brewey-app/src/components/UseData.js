import React from "react";
import GetData from "./GetData";

export default class FetchData extends React.Component {
  state = {};

  render() {
    {
      console.log(GetData());
    }
    return <div> test</div>;
  }
}

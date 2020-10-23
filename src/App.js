import React, { Component } from "react";
import Table from "./Table";
import getCnBeta from "./cnbeta";

class App extends Component {
  componentDidMount() {
    getCnBeta().then((data) => {
      this.setState({
        cnBeta: data,
      });
      console.log(data);
    });
  }

  render() {
    const cnBeta = this.state && this.state.cnBeta ? this.state.cnBeta : {};
    return (
      <div className="App">
        <div className="container">
          <Table data={cnBeta} />
        </div>
      </div>
    );
  }
}

export default App;

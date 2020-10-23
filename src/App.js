import React, { Component } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Table from "./Table";
import { get9to5mac, getCnBeta } from "./feed";

class App extends Component {
  state = {
    activeIndex: 0,
  };

  componentDidMount() {
    get9to5mac().then((data) => {
      this.setState({
        _9to5mac: data,
      });
    });
    getCnBeta().then((data) => {
      this.setState({
        cnBeta: data,
      });
    });
  }

  render() {
    const cnBeta = this.state.cnBeta ? this.state.cnBeta : {};
    const _9to5mac = this.state._9to5mac ? this.state._9to5mac : {};
    return (
      <TabView
        activeIndex={this.state.activeIndex}
        onTabChange={(e) => this.setState({ activeIndex: e.index })}
      >
        <TabPanel header="9to5mac">
          <Table data={_9to5mac} />
        </TabPanel>
        <TabPanel header="cnBeta">
          <Table data={cnBeta} />
        </TabPanel>
        <TabPanel header="Header III">Content III</TabPanel>
      </TabView>
    );
  }
}

export default App;

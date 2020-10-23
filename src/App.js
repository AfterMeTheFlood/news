import React, { Component } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Table from "./Table";
import Page from "./Page";
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
          <div className="p-grid">
            <div className="p-col-4">
              <Table data={_9to5mac} />
            </div>
            <div className="p-col">
              <Page />
            </div>
          </div>
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

import React, { Component } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Table from "./Table";
import Page from "./Page";
import { getITHome, get9to5mac, getCnBeta } from "./feed";

class App extends Component {
  state = {
    activeIndex: 0,
    selectedArticle: {},
  };

  componentDidMount() {
    getITHome().then((data) => {
      this.setState({
        ithome: data,
      });
    });
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

  selectArticle = (item) => {
    this.setState({
      selectedArticle: item,
    });
  };

  render() {
    const cnBeta = this.state.cnBeta ? this.state.cnBeta : {};
    const _9to5mac = this.state._9to5mac ? this.state._9to5mac : {};
    const ithome = this.state.ithome ? this.state.ithome : {};
    const article = this.state.selectedArticle;
    return (
      <TabView
        activeIndex={this.state.activeIndex}
        onTabChange={(e) => this.setState({ activeIndex: e.index })}
      >
        <TabPanel header="ithome">
          <div className="p-grid">
            <div className="p-col-4">
              <Table data={ithome} selectArticle={this.selectArticle} />
            </div>
            <div className="p-col-fixed">
              <Page article={article} />
            </div>
          </div>
        </TabPanel>

        <TabPanel header="9to5mac">
          <div className="p-grid">
            <div className="p-col-4">
              <Table data={_9to5mac} selectArticle={this.selectArticle} />
            </div>
            <div className="p-col-fixed">
              <Page article={article} />
            </div>
          </div>
        </TabPanel>

        <TabPanel header="cnBeta">
          <div className="p-grid">
            <div className="p-col-4">
              <Table data={cnBeta} selectArticle={this.selectArticle} />
            </div>
            <div className="p-col-fixed">
              <Page article={article} />
            </div>
          </div>
        </TabPanel>
      </TabView>
    );
  }
}

export default App;

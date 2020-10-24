import React, { Component } from "react";
import PropTypes from "prop-types";
import { Panel } from "primereact/panel";

class Page extends Component {
  componentDidUpdate() {}

  render() {
    const { article } = this.props;
    console.log(article);
    const content = article.content;
    const htmlContent = (
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    );

    return <Panel header={article.title}>{htmlContent}</Panel>;
  }
}

Page.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Page;

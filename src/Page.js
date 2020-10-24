import React, { Component } from "react";
import PropTypes from "prop-types";
import { Panel } from "primereact/panel";

class Page extends Component {
  componentDidUpdate() {}

  render() {
    const { article } = this.props;
    if (Object.keys(article).length === 0) {
      return null;
    }

    console.log(article);
    const content = article.content;
    const styleContent = {
      width: "1000px",
    };
    const htmlContent = (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={styleContent}
      ></div>
    );

    return <Panel header={article.title}>{htmlContent}</Panel>;
  }
}

Page.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Page;

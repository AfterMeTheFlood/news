import React, { Component } from "react";
import PropTypes from "prop-types";
import { Panel } from "primereact/panel";
const htmlparser2 = require("htmlparser2");

class PageITHome extends Component {
  componentDidUpdate() {}

  render() {
    const { article } = this.props;
    if (Object.keys(article).length === 0) {
      return null;
    }
    console.log(article);
    const content = article.content;
    let paragraphList = [];
    const parser = new htmlparser2.Parser({
      onopentag(name, attribs) {
        if (name === "img") {
          console.log("img");
          console.log(attribs.src);
          const snippet = { type: "img", value: attribs.src };
          paragraphList.push(snippet);
        }
      },
      ontext(text) {
        const p = text.trim();
        if (!/^ *$/.test(p)) {
          console.log("-->", p);
          const snippet = { type: "text", value: p };
          paragraphList.push(snippet);
        }
      },
    });
    parser.write(content);
    parser.end();

    const paragraphs = paragraphList.map((snippet, index) => {
      if ("text" === snippet.type) {
        return <p key={index}>{snippet.value}</p>;
      } else if ("img" === snippet.type) {
        return <img src={snippet.value} width="100%" height="auto" />;
      }
    });

    return <Panel header={article.title}>{paragraphs}</Panel>;
  }
}

PageITHome.propTypes = {
  article: PropTypes.object.isRequired,
};

export default PageITHome;

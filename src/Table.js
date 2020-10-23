import React, { Component } from "react";
import PropTypes from "prop-types";

class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <table>
        <TableHeader data={data} />
        <TableBody data={data} />
      </table>
    );
  }
}

const TableHeader = (props) => {
  const description = props.data.description;
  return (
    <thead>
      <tr>
        <th>{description}</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const itemList = props.data.itemList ? props.data.itemList : [];
  const rows = itemList.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.pubDate}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

TableHeader.propTypes = {
  data: PropTypes.object.isRequired,
};

TableBody.propTypes = {
  data: PropTypes.object.isRequired,
};

Table.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Table;

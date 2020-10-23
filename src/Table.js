import React, { Component } from "react";
import PropTypes from "prop-types";

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>title</th>
        <th>date</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const itemList = props.characterData.itemList
    ? props.characterData.itemList
    : [];
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

TableBody.propTypes = {
  characterData: PropTypes.object.isRequired,
  removeCharacter: PropTypes.func.isRequired,
};

Table.propTypes = {
  characterData: PropTypes.object.isRequired,
  removeCharacter: PropTypes.func.isRequired,
};

export default Table;

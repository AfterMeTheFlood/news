import React, { Component } from "react";
import PropTypes from "prop-types";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

class Table extends Component {
  render() {
    const { data } = this.props;
    const itemList = data.itemList ? data.itemList : [];

    return (
      <div className="card">
        <DataTable
          value={itemList}
          // selection={itemList[0]}
          onSelectionChange={(e) => this.setState({ selectedItem: e.value })}
          selectionMode="single"
          dataKey="id"
        >
          <Column field="title" header={data.name}></Column>
        </DataTable>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Table;

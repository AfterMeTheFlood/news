import React, { Component } from "react";
import PropTypes from "prop-types";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

class Table extends Component {
  render() {
    const { data, selectArticle } = this.props;
    const items = data.items ? data.items : [];

    return (
      <div className="card">
        <DataTable
          value={items}
          onSelectionChange={(e) => selectArticle(e.value)}
          scrollable
          scrollHeight="1050px"
          selectionMode="single"
          dataKey="id"
        >
          <Column field="title"></Column>
        </DataTable>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.object.isRequired,
  selectArticle: PropTypes.func.isRequired,
};

export default Table;

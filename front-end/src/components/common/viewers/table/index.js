import React from "react";
import "./stylesheet.css";

class Table extends React.Component {
  render() {
    // const { total, onPageChange } = this.props;
    
    return (
      <div className="table-responsive">
        <table className="obolex-table">
          {this.props.children}
        </table>
        {/* <Pagination total={total} onPageChange={onPageChange} />*/}
      </div>
    );
  }
}

//
// Table.childContextTypes = {
//   muiTheme: React.PropTypes.object.isRequired,
// };

export default Table;

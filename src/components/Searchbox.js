import React from "react";

const Searchbox = ({ searchField, searchChange }) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        value={searchField}
        onChange={searchChange}
      />
      ;
    </div>
  );
};

export default Searchbox;

import React, { Component } from "react";
import Search from "./Search";
import { navigate } from "@reach/router";

class SearchQuery extends Component {
  render() {
    return (
      <div>
          <Search search={() => navigate('/')}/>
      </div>
    );
  }
}

export default SearchQuery;

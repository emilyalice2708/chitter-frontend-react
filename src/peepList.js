import { render } from "@testing-library/react";
import React, { Component } from "react";

class PeepList extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return this.props.peeps.map((peep, i) => (
      <div className="peeps">
        <div className="body">
          {peep.body}
        </div>
      </div>
    ))
  }
}

export default PeepList;